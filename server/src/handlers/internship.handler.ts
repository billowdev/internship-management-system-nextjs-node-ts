import customError from "../utils/custom-error";
import { FastifyRequest } from "fastify"
import { authErrors } from "../errors";
import db from "../models";
import * as internshipService from "../services/internship.service";
import { IStudentInternshipResponse } from "interfaces/types/services/internship.service.types";

export const createInternship = async () => {
	return
}

export const getInternship = async (request: FastifyRequest) => {
	const { UserId } = request;
	const response = internshipService.studentInternship(UserId!);

	return response

}

export default { createInternship }