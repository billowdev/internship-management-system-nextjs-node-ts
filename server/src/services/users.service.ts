import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken"
import { UserSchema } from "../interfaces/types/models/Users.types.model"
import Users, { UserSchemaWithDocument } from "../models/users.model"
import customError from "../utils/custom-error"
import * as authErrors from "../errors/auth.error"
import config from "../config/config"
import { AuthLoginBodyResponse } from "../interfaces/types/controllers/auth.types.controller"

const passwordHashing = (password: string): string => {
	const salt = bcrypt.genSaltSync(10)
	const hashPassword = bcrypt.hashSync(password, salt)
	return hashPassword
}

const comparePassword = (password: string, existsPassword: string): boolean => {
	const isPasswordCorrect = bcrypt.compareSync(password, existsPassword)
	if (!isPasswordCorrect) {
		customError(authErrors.AuthInvalidPassword)
	}
	return true
}

const createToken = (userId: string): string => {
	const token = sign({}, config.webtoken as string, {
		expiresIn: 60 * 5,
		audience: String(userId)
	})
	return token
}

const mapUserResponseObject = (userId: string, user: UserSchemaWithDocument, accessToken?: string): AuthLoginBodyResponse => {
	const response: AuthLoginBodyResponse = {
		id: userId,
		username: user.username,
		name: user.name || '',
		surname: user.surname || '',
		email: user.email,
		accessToken
	}
	return response
}

export const createUser = async (doc: UserSchema): Promise<UserSchemaWithDocument> => {
	doc.password = passwordHashing(doc.password)
	const user = new Users(doc)
	return user.save()
}

export const userLogin = async (username: string, password: string): Promise<AuthLoginBodyResponse> => {
	const user = await Users.findOne({
		username
	}).then(resp => {
		return resp
	}).catch(err => {
		return err
	})
	if (!user) {
		customError({
			...authErrors.AuthInvalidUsername,
			data: {
				success: false
			}
		})
	}
	comparePassword(password, user.password)
	const userId: string = user.id
	const accessToken = createToken(userId)
	const response: AuthLoginBodyResponse = mapUserResponseObject(userId, user, accessToken);
	return response
}

export const getUserById = async (userId: string): Promise<AuthLoginBodyResponse> => {
	const user = await Users.findById(userId!)
	if (!user) {
		return customError(authErrors.AuthJWTError)
	}
	const response: AuthLoginBodyResponse = mapUserResponseObject(userId, user)
	return response
}


export default {
	createUser,
	userLogin,
	getUserById,
	createToken
}