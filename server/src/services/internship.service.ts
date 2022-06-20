import { IStudentAttributes } from "interfaces/types/models/student.model.types";
import db from "../models"
import customError from "../utils/custom-error";
import { authErrors } from "../errors";
import { IStudentInternshipResponse } from "interfaces/types/services/internship.service.types";

export const studentInternship = async (UserId: string): Promise<IStudentInternshipResponse> => {
	const login = await db.User.findOne({ where: { id: UserId } })
	const { roles } = login;

	if (roles === "student") {
		const student_id = await db.Student.findOne({ where: { user_id: UserId } }).then((resp: IStudentAttributes) => {
			return resp.id
		})
		const internship = await db.Internship.findOne({
			where: { student_id },
			raw: true
		});
		const company = await db.Company.findOne({
			where: { id: internship.company_id },
			raw: true
		})
		const companyAddress = await db.Address.findOne({
			where: { id: company.address_id },
			raw: true
		})
		const Company = { ...company, ...companyAddress }
		const studentInternship: IStudentInternshipResponse = { internship, Company }
		return studentInternship
	} else {
		return customError(authErrors.AuthJWTError);
	}
}

export default {
	studentInternship
}