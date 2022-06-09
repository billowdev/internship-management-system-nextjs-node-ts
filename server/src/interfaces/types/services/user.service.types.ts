import { rolesUserEnums } from "../models/user.model.types";

export interface IUserServices {
	id?: string;
	username?: string;
	password?: string;
	roles?: rolesUserEnums;
	is_active?: boolean;
	created_at?: Date;
	updated_at?: Date;
}