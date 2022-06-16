import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { IUserAttributes } from "../interfaces/types/models/user.model.types";
import customError from "../utils/custom-error";
import { authErrors } from "../errors";
import config from "../config/config";
import { IAuthLoginBodyResponse } from "../interfaces/types/handlers/auth.handler.types";
// import { getChache, setCache } from "../redis";
import db from "../models/index";
import { IProfileResponse, IStudentResume, IUserServices } from "@/interfaces/types/services/user.service.types";
import { IStudentAttributes } from "@/interfaces/types/models/student.model.types";
import { IEducationAttributes } from "@/interfaces/types/models/education.model.types";
import { IContactPersonAttributes } from "@/interfaces/types/models/contactPerson.model.types";
import { AuthInvalidUsername } from "@/errors/auth.errors";

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

export const createUser = async (
  data: IUserServices
): Promise<IUserServices> => {
  data.password = passwordHashing(data.password!);
  const user: IUserServices = await db.User.create(data);
  if (user) {
    const role = user.roles
    if (role === "student") {
      
      const username = user.username
      const student = await db.Student.create({
        first_name: "", last_name: "", program: "", department: "", user_id: username 
      })
      console.log("\n\n--debug--\n\n",student , "\n\n--debug\n\n")
     
      /*
      if (student) {
        const student_id = student.id;
        // hook education field
        await db.Education.create({ student_id })
        await db.Education.create({ student_id })
        await db.Education.create({ student_id })

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
        // hook table address for company 
        const companyAddress = await db.Address.create({ address_type: "company" })
        const companyData = await db.Company.create({ name: "", address_id: companyAddress.id })
        // const internship = await db.Internship.create({ student_id, company_id: companyData.id })
        // hook co stdeutn table for student
        // await db.CoInternship.create({ internship_id: internship.id })
        // await db.CoInternship.create({ internship_id: internship.id })
        // await db.CoInternship.create({ internship_id: internship.id })
        // await db.CoInternship.create({ internship_id: internship.id })

      }
*/
    }
  }

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

export const getStudentResume = async (id: string): Promise<IStudentResume> => {
  // get student data from Student model
  console.log("\--debug--\n", id, "\n--debug--\n")
  const student: IStudentAttributes = await db.Student.findOne({ where: { user_id: id } });
  // get id from student (response)
  const student_id = student.id;
  const education: IEducationAttributes = await db.Education.findAll({ where: { student_id } })
  const contactPerson: IContactPersonAttributes = await db.contactPerson.findAll({ where: { student_id } })
  const response: IStudentResume = { student, education, contactPerson };
  return response;
}

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
  let response: IProfileResponse = {};
  if (roles == "student") {
    const studentResume = getStudentResume(id)
    Object.assign(response, studentResume)
  }
  // console.log("\--debug--\n", response, "\n--debug--\n")
  // setCache(redisCacheKey, response);
  return response;
};

export default {
  createUser,
  userLogin,
  getProfile,
  createToken,
};
