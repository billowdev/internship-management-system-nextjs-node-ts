export const profileRouteSchema = {
	tags: ["user"],
	security: [{ apiKey: [] }],
	response: {
		200: {
			type: 'object',
			properties: {
				Student: {
					type: 'object',
				},
				
				
			}
		}
	},
}

export default {
	profileRouteSchema
}