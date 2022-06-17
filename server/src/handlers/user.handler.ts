import { IProfileResponse } from "@/interfaces/types/services/user.service.types";
import { FastifyRequest } from "fastify";
import { IAuthLoginBodyResponse } from "../interfaces/types/handlers/auth.handler.types";
import { userService } from "../services";

export const handleUserProfile = async (
  request: FastifyRequest
): Promise<IProfileResponse> => {
  const { UserId } = request;
  const profile: IProfileResponse = await userService.getProfile(UserId!);
  console.log("========= Debug ----", profile)
  return profile;
};


export default {
  handleUserProfile,
};
