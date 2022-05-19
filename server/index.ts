import { FastifyServerOptions } from "fastify"
import App from "./src/app"
import mongooseConfig from "./src/config/database.config"
import config from "./src/config/config"

const options: FastifyServerOptions = {
	logger: {
		prettyPrint:
			config.env === 'development'
				? {
					translateTime: 'HH:MM:ss Z',
					ignore: 'pid,hostname'
				}
				: false
	}
}
const app = App(options)
mongooseConfig(app)
app.listen(config.port)