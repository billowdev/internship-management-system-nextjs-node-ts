import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import customError from "../utils/custom-error";
import { authErrors } from "../errors";
import config from "../config/config";
import { IAuthLoginBodyResponse, IAuthRegisterBodyRequest } from "../interfaces/types/handlers/auth.handler.types";
// import { getChache, setCache } from "../redis";
import db from "../models/index";
import { IProfileResponse, IUserServices } from "@/interfaces/types/services/user.service.types";
import { IStudentAttributes } from "@/interfaces/types/models/student.model.types";
import { IEducationAttributes } from "@/interfaces/types/models/education.model.types";
import { IContactPersonAttributes } from "@/interfaces/types/models/contactPerson.model.types";
import { IHometownAddressAttributes } from "@/interfaces/types/models/hometownAddress.model.types";
import { IAddressAttributes } from "@/interfaces/types/models/address.model.types";
import { IDirectorAttributes } from "@/interfaces/types/models/director.model.types";
import { IUserAttributes } from "@/interfaces/types/models/user.model.types";

const passwordHashing = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const comparePassword = (password: string, existsPassword: string): boolean => {
  const isPasswordCorrect = bcrypt.compareSync(password, existsPassword);
  if (!isPasswordCorrect) {
    customError(authErrors.AuthInvalidPassword);
  }
  return true;
};

const createToken = (userId: string): string => {
  const token = sign({}, config.webtoken as string, {
    expiresIn: 3600 * 30,
    audience: String(userId),
  });
  return token;
};

const mapUserResponseObject = (
  userId: string,
  user: IUserAttributes,
  accessToken?: string
): IAuthLoginBodyResponse => {
  const response: IAuthLoginBodyResponse = {
    id: userId,
    username: user.username,
    roles: user.roles,
    accessToken,
  };
  return response;
};

const createStudent = async (user_id: string, username: string, roles: string) => {
  const student = await db.Student.create({
    id: username,
    first_name: "", last_name: "", program: "", department: "", user_id: user_id
  })
  console.log("\n\n--debug--\n\n", student, "\n\n--debug\n\n")

  const student_id = student.id

  // hook education field
  const studentEducation = [{ student_id }, { student_id }, { student_id }]
  Promise.all(studentEducation.map(function (value) {
    db.Education.create(value)
  }))

  // hook address table for student
  await db.Address.create({ address_type: "hometown" }).then((data: any) => {
    db.HometownAddress.create({ student_id, address_id: data.id })
  })

  await db.Address.create({ address_type: "present" }).then((data: any) => {
    db.PresentAddress.create({ student_id, address_id: data.id })
  })

  // hook address table for contact_person
  await db.Address.create({ address_type: "contact_person" }).then((data: any) => {
    // hook table contact_person for student
    db.ContactPerson.create({ first_name: "", last_name: "", student_id, address_id: data.id })
  })


}

export const createUser = async (
  data: IUserServices
): Promise<IUserServices> => {
  data.password = passwordHashing(data.password!);
  // const user: IUserServices = {}
  const user: IUserServices = await db.User.create(data)

  const { id, username, roles } = user
  const student = await createStudent(id as string, username as string, roles as string)

  // hook data in 
  return user;
};

export const userLogin = async (
  username: string,
  password: string
): Promise<IAuthLoginBodyResponse> => {
  const user = await db.User.findOne({
    where: { username },
  });
  if (user == null) {
    customError({
      ...authErrors.AuthInvalidUsername,
      data: {
        success: false,
      },
    });
  }
  comparePassword(password, user.password);
  const UserId: string = user.id;
  const accessToken = createToken(UserId);
  const response: IAuthLoginBodyResponse = mapUserResponseObject(
    UserId,
    user,
    accessToken
  );
  return response;
};

// function for student profile or resume
export const studentResume = async (id: string): Promise<IProfileResponse> => {
  // get student data from Student model
  const student: IStudentAttributes = await db.Student.findOne({ where: { user_id: id } },)
  // get id from student (response)
  const student_id = student.id;
  // education data
  const education: IEducationAttributes = await db.Education.findAll({ where: { student_id } })
  // contact person 
  const contactPerson: IContactPersonAttributes = await db.ContactPerson.findOne({ where: { student_id } })
  // get address by address id from hometown_address table
  const hometownAddress: IAddressAttributes = await db.HometownAddress.findOne({ where: { student_id } })
    .then((resp: IHometownAddressAttributes) => {
      return db.Address.findOne({ where: { id: resp.address_id } })
    })
  // get address by address id from present_address table
  const presentAddress: IAddressAttributes = await db.PresentAddress.findOne({ where: { student_id } })
    .then((resp: IHometownAddressAttributes) => {
      return db.Address.findOne({ where: { id: resp.address_id } })
    })
  // combine {student, education, contactPerson, hometownAddress, presentAddress }
  const resume: IProfileResponse = { student, education, contactPerson, hometownAddress, presentAddress };

  return resume;
}

// function for get profile
export const getProfile = async (
  UserId: string
): Promise<IProfileResponse> => {
  // docker redis | caching section
  // const redisCacheKey: string = "services:getProfile";
  // const userCache: any = await getChache(redisCacheKey);
  // if (userCache) {
  //   return userCache;
  // }

  // check user is exist?
  const user = await db.User.findOne({ where: { id: UserId } });
  // user is not exist... then...
  if (user == null) {
    return customError(authErrors.AuthJWTError);
  }
  // user is exist... then... check user role
  const loginResponse: IAuthLoginBodyResponse = mapUserResponseObject(UserId, user);
  // destructuring {id, roles} from response of login data
  const { id, roles } = loginResponse;
  if (roles === "student") {
    const resume: IProfileResponse = await studentResume(id)
    return resume
  } else if (roles === "director") {
    const profile: IDirectorAttributes = await db.Director.findOne({ where: { user_id: id } })
    const resp = { director: profile }
    return resp
  } else {
    const admin: IProfileResponse = { admin: loginResponse };
    return admin
  }
};

export default {
  createUser,
  userLogin,
  getProfile,
  createToken,
};
