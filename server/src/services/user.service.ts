import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { IUserAttributes } from "../interfaces/types/models/user.model.types";
import customError from "../utils/custom-error";
import { authErrors } from "../errors";
import config from "../config/config";
import { IAuthLoginBodyResponse } from "../interfaces/types/handlers/auth.handler.types";
// import { getChache, setCache } from "../redis";
import db from "../models";
import { IUserServices } from "@/interfaces/types/services/user.service.types";
import logger from "@/utils/logger";

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

export const getUserById = async (
  UserId: string
): Promise<IAuthLoginBodyResponse> => {

  // docker redis | caching section
  // const redisCacheKey: string = "services:getUserById";
  // const userCache: any = await getChache(redisCacheKey);
  // if (userCache) {
  //   return userCache;
  // }

  const user = await db.User.findOne({ where: { id: UserId } });
  if (user == null) {
    return customError(authErrors.AuthJWTError);
  }
  const response: IAuthLoginBodyResponse = mapUserResponseObject(UserId, user);

  // setCache(redisCacheKey, response);
  
  return response;
};

export default {
  createUser,
  userLogin,
  getUserById,
  createToken,
};
