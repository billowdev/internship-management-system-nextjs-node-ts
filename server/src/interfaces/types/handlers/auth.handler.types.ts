import { FastifyRequest } from "fastify";

export type IAuthLoginBodyRequest = FastifyRequest<{
  Body: {
    username: string;
    password: string;
  };
}>;

export type IAuthRegisterBodyRequest = FastifyRequest<{
  Body: {
    username: string;
    password: string;
  };
}>;

export interface IAuthLoginBodyResponse {
  id: string;
  username: string;
  roles: string;
  accessToken?: string;
}

export interface IAuthRefreshTokenResponse {
  accessToken: string;
}
