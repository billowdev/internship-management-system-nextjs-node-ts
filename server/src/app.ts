import fastify, { FastifyServerOptions } from "fastify"
import { CustomError } from "./utils/custom-error"
import authRouter from "./routes/auth.route"
import fastifySwagger from "@fastify/swagger"
import { Swagger } from "./config/swagger"

declare module 'fastify' {
	interface FastifyRequest {
		userId?: string;
	}
}

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)
	app.register(fastifySwagger, Swagger.options)
	app.get('/', async () => "SERVE")
	app.register(authRouter, { prefix: "/auth" })
	app.setErrorHandler((err, req, res) => {
		const customError: CustomError = err
		res.status(customError.statusCode || 500).send({
			error: {
				message: customError.message,
				code: customError.code,
				data: customError.data
			}
		})
	})
	return app
}

export default App