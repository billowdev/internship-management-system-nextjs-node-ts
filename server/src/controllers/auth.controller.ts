import UsersService from "../services/users.service"
import { UserSchemaWithDocument } from "../models/users.model"
import { FastifyRequest } from "fastify"
import { AuthLoginBodyRequest, AuthRefreshTokenResponse, AuthRegisterBodyRequest } from "../interfaces/types/controllers/auth.types.controller"
import { AuthRegisterFailure, AuthRegisterFailureDuplicateValue } from "../errors/auth.error"
import customError from "../utils/custom-error"

export const handleLogin = async (req: AuthLoginBodyRequest) => {
	const { username, password } = req.body;
	const login = await UsersService.userLogin(username, password)
	return login
}

export const handleRegister = async (req: AuthRegisterBodyRequest): Promise<UserSchemaWithDocument> => {
	const { username, password, email, name, surname } = req.body;
	const user = await UsersService.createUser({
		username, password, email, name, surname
	}).catch(err => {
		const error: object = err.keyPattern
		if (Object.entries(error)[0][0] === "username") {
			customError({
				...AuthRegisterFailureDuplicateValue, data: {
					duplicate: "username"
				}
			})
		} else if (Object.entries(error)[0][0] === "email") {
			customError({
				...AuthRegisterFailureDuplicateValue, data: {
					duplicated: "email"
				}
			})
		} else {
			customError(AuthRegisterFailure)
		}
		throw new Error()
	})

	return user
}

export const handleRefreshToken = async (req: FastifyRequest): Promise<AuthRefreshTokenResponse> => {
	const { userId } = req
	const accessToken = UsersService.createToken(userId!)
	const response: AuthRefreshTokenResponse = {
		accessToken
	}
	return response
}

export default {
	handleLogin
}