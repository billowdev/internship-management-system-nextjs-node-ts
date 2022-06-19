export const createInternshipSchema = {
	tags: ["internship"],
	body: {
		type: 'object',
		properties: {
			email: {
				type: 'string',
				format: 'email',
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

