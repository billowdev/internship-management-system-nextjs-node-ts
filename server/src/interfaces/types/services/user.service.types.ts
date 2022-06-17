import { IAuthLoginBodyResponse } from "../handlers/auth.handler.types";
import { IContactPersonAttributes } from "../models/contactPerson.model.types";
import { IDirectorAttributes } from "../models/director.model.types";
import { IEducationAttributes } from "../models/education.model.types";
import { IStudentAttributes } from "../models/student.model.types";
import { IUserAttributes, rolesUserEnums } from "../models/user.model.types";

export interface IUserServices {
	id?: string;
	username?: string;
	password?: string;
	roles?: rolesUserEnums;
	is_active?: boolean;
	created_at?: Date;
	updated_at?: Date;
}

export interface IStudentResume {
	student?: IStudentAttributes;
	education?: IEducationAttributes;
	contactPerson?: IContactPersonAttributes;
	loginResponse?: IAuthLoginBodyResponse;
	director?: IDirectorAttributes;
}

export interface IProfileResponse {
	studentResume?: IStudentResume;
	director?: IDirectorAttributes;
	user?: IUserAttributes;
}