import { FastifyRequest } from "fastify";
import { userService } from "../services";
import {
  IAuthLoginBodyRequest,
  IAuthRefreshTokenResponse,
  IAuthRegisterBodyRequest,
  IAuthRegisterBodyRespoonse,
} from "../interfaces/types/handlers/auth.handler.types";
import { authErrors } from "../errors";
import customError from "../utils/custom-error";
import { IUserAttributes } from "../interfaces/types/models/user.model.types";

export const handleLogin = async (request: IAuthLoginBodyRequest) => {
  const { username, password } = request.body;
  const login = await userService.userLogin(username, password);
  return login;
};

export const handleRegister = async (
  request: IAuthRegisterBodyRequest
): Promise<IAuthRegisterBodyRespoonse> => {
  const { username, password } = request.body;
  const user: IAuthRegisterBodyRespoonse = await userService
    .createUser({
  username, password
})
    .catch((err) => {
      customError(authErrors.AuthRegisterFailure);
      throw new Error();
    });
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
