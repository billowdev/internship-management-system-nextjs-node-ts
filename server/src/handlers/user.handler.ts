import { IProfileResponse } from "@/interfaces/types/services/user.service.types";
import { FastifyRequest } from "fastify";
import { IAuthLoginBodyResponse } from "../interfaces/types/handlers/auth.handler.types";
import { userService } from "../services";

export const handleUserProfile = async (
  request: FastifyRequest
): Promise<IProfileResponse> => {
  const { UserId } = request;
  const user: IProfileResponse = await userService.getProfile(UserId!);
  return user;
};


export default {
  handleUserProfile,
};
