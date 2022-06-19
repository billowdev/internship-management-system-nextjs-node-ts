import { FastifyRequest } from "fastify";
import { userService } from "../services";
import {
  IAuthLoginBodyRequest,
  IAuthLoginBodyResponse,
  IAuthRefreshTokenResponse,
  IAuthRegisterBodyRequest,
} from "../interfaces/types/handlers/auth.handler.types";
import { authErrors } from "../errors";
import customError from "../utils/custom-error";
import { IUserServices } from "../interfaces/types/services/user.service.types";

export const handleLogin = async (request: IAuthLoginBodyRequest): Promise<IAuthLoginBodyResponse> => {
  const { username, password } = request.body;
  const login: IAuthLoginBodyResponse = await userService.userLogin(username, password);
  return login;
};

export const handleRegister = async (
  request: IAuthRegisterBodyRequest
): Promise<IUserServices> => {
  const { username, password } = request.body;
  const user: IUserServices = await userService
    .createUser(
      {username, password}
    )
    // .catch((err) => {
    //   customError(authErrors.AuthRegisterFailure);
    //   throw new Error();
    // });
  return user;
};

export const handleRefreshToken = async (
  request: FastifyRequest
): Promise<IAuthRefreshTokenResponse> => {
  const { UserId } = request;
  const accessToken = userService.createToken(UserId!);
  const response: IAuthRefreshTokenResponse = {
    accessToken,
  };
  
  return response;
};

export default {
  handleLogin,
  handleRegister,
  handleRefreshToken,
};
