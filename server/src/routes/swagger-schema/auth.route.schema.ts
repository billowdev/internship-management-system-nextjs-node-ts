export const loginRouteSchema = {
	tags: ["auth"],
	body: {
		type: 'object',
		properties: {
			email: {
				type: 'string',
				format:'email',
			},
			password: {
				type: 'string',
			},
		}
	},
	response: {
		200: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					format: 'id'
				},
				username: {
					type: 'string',
				},
				name: {
					type: 'string',
					format: 'string',
				},
				roles: {
					type: "string",
				},
				is_active: {
					type: "boolean"
				},
				accessToken: {
					type: 'string',
					format: 'string',
				}
			}
		}
	},
}

export const registerRouteSchema = {
	tags: ["auth"],
	body: {
		type: 'object',
		properties: {
			username: {
				type: 'string',
			},
			password: {
				type: 'string',
			},
		}
	},
	response: {
		200: {
			type: 'object',
			properties: {
				username: {
					type: 'string',
				},
				password: {
					type: 'string',
					format: 'password',
				},
				roles: {
					type: "string",
				},
				is_active: {
					type: "boolean"
				}
			}
		}
	},
}

export const refreshTokenRouteSchema = {
	tags: ["auth"],
	security: [{ apiKey: [] }],
	response: {
		200: {
			type: 'object',
			properties: {
				accessToken: {
					type: 'string',
					format: 'jwt'
				}
			}
		}
	},
}



export default {
	refreshTokenRouteSchema,
	loginRouteSchema
}