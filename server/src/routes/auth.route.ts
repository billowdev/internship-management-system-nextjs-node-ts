import { FastifyInstance } from "fastify";
import { METHODS } from "http";
import { handleLogin, handleRefreshToken, handleRegister } from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware"

const authRouter = async (app: FastifyInstance) => {
	app.post('/login', handleLogin)
	app.post('/register', handleRegister)
	app.post('/refresh-token', {
		preHandler: [
			verifyToken
		]
	}, handleRefreshToken)
}

export default authRouter