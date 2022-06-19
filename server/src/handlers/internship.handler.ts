import { IStudentAttributes } from "../interfaces/types/models/student.model.types";
import customError from "../utils/custom-error";
import { FastifyRequest } from "fastify"
import { authErrors } from "../errors";
import db from "../models";

export const createInternship = async () => {
	return
}

export const getInternship = async (request: FastifyRequest) => {
	const { UserId } = request;
	console.log("=\n=", UserId, "\n=\n");
	const login = await db.User.findOne({ where: { id: UserId } })
	const { roles } = login;
	if (roles === "student") {

		const student_id = await db.Student.findOne({ where: { user_id: UserId } }).then((resp: IStudentAttributes) => {
			return resp.id
		})
		const internship = await db.Internship.findOne({ where: { student_id } });
		const {
			id, contact_person, contact_person_position,
			contact_person_phone, name, type, activities,
			propoose_to, phone, address_id }
			= await db.Company.findOne({ where: { id: internship.company_id } })
		const Address = await db.Address.findOne({ where: { id: address_id } })
		const company = { id, contact_person, contact_person_position, contact_person_phone, name, type, activities, propoose_to, phone, Address }
		console.log({ internship, company })
		return company
	} else {
		return customError(authErrors.AuthJWTError);
	}
}

export default { createInternship }