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
  roles: rolesUserEnums;
  accessToken?: string;
}

export enum rolesUserEnums {
  Admin = "admin",
  Director = "director",
  Student = "student"
}

export interface IAuthRegisterBodyRespoonse {
  id?: string;
  username: string;
  password: string;
  roles?: rolesUserEnums;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface IAuthRefreshTokenResponse {
  accessToken: string;
}
