export const profileRouteSchema = {
	tags: ["user"],
	security: [{ apiKey: [] }],
	response: {
		200: {
			type: 'object',
			properties: {
				"student": {
					"student": {
						"type": "object",
						"properties": {
							"id": {
								"type": "string"
							},
							"email": {
								"type": "string"
							},
							"id_card": {
								"type": "string"
							},
							"first_name": {
								"type": "string"
							},
							"last_name": {
								"type": "string"
							},
							"phone": {
								"type": "string"
							},
							"program": {
								"type": "string"
							},
							"department": {
								"type": "string"
							},
							"skill": {
								"type": "string"
							},
							"interest": {
								"type": "string"
							},
							"project_topic": {
								"type": "string"
							},
							"date_of_birth": {
								"type": "string",
								"format": "date"
							},
							"experience": {
								"type": "string"
							},
							"religion": {
								"type": "string"
							},
							"father_name": {
								"type": "string"
							},
							"father_job": {
								"type": "string"
							},
							"mother_name": {
								"type": "string"
							},
							"mother_job": {
								"type": "string"
							},
							"present_gpa": {
								"type": "integer",
								"format": "int32"
							},
							"image": {
								"type": "string"
							},
							"resume_status": {
								"type": "boolean"
							},
							"is_cointernship": {
								"type": "boolean"
							},
							"createdAt": {
								"type": "string"
							},
							"updatedAt": {
								"type": "string"
							},
							"user_id": {
								"type": "string"
							},
							"UserId": {
								"type": "string"
							}
						}
					},
				},
				"education": {
					"education": {
						"type": "array",
						"items": {
							"type": "object",
							"properties": {
								"id": {
									"type": "string"
								},
								"academy": {
									"type": "string"
								},
								"level": {
									"type": "string"
								},
								"gpa": {
									"type": "number"
								},
								"createdAt": {
									"type": "string"
								},
								"updatedAt": {
									"type": "string"
								},
								"student_id": {
									"type": "string"
								},
								"StudentId": {
									"type": "string"
								}
							}
						}
					},
				},
				"contactPerson": {
					"contactPerson": {
						"type": "object",
						"properties": {
							"id": {
								"type": "string"
							},
							"first_name": {
								"type": "string"
							},
							"last_name": {
								"type": "string"
							},
							"relationship": {
								"type": "string"
							},
							"createdAt": {
								"type": "string"
							},
							"updatedAt": {
								"type": "string"
							},
							"AddressId": {
								"type": "string"
							},
							"student_id": {
								"type": "string"
							},
							"address_id": {
								"type": "string"
							},
							"StudentId": {
								"type": "string"
							}
						}
					},
				},
				"hometownAddress": {
					"hometownAddress": {
						"type": "object",
						"properties": {
							"id": {
								"type": "string"
							},
							"house_number": {
								"type": "string"
							},
							"road": {
								"type": "string"
							},
							"village": {
								"type": "string"
							},
							"sub_district": {
								"type": "string"
							},
							"district": {
								"type": "string"
							},
							"province": {
								"type": "string"
							},
							"zip_code": {
								"type": "string"
							},
							"address_type": {
								"type": "string"
							},
							"createdAt": {
								"type": "string"
							},
							"updatedAt": {
								"type": "string"
							}
						}
					},
				},
				"presentAddress": {
					"presentAddress": {
						"type": "object",
						"properties": {
							"id": {
								"type": "string"
							},
							"house_number": {
								"type": "string"
							},
							"road": {
								"type": "string"
							},
							"village": {
								"type": "string"
							},
							"sub_district": {
								"type": "string"
							},
							"district": {
								"type": "string"
							},
							"province": {
								"type": "string"
							},
							"zip_code": {
								"type": "string"
							},
							"address_type": {
								"type": "string"
							},
							"createdAt": {
								"type": "string"
							},
							"updatedAt": {
								"type": "string"
							}
						}
					},
				},
				"director": {
					"type": "object",
					"properties": {
						"id": {
							"type": "string"
						},
						"first_name": {
							"type": "string"
						},
						"last_name": {
							"type": "string"
						},
						"phone": {
							"type": "string"
						},
						"program": {
							"type": "string"
						},
						"department": {
							"type": "string"
						},
						"createdAt": {
							"type": "string"
						},
						"updatedAt": {
							"type": "string"
						},
						"user_id": {
							"type": "string"
						},
					}
				},
				"admin": {
					"type": "object",
					"properties": {
						"id": {
							"type": "string"
						},
						"username": {
							"type": "string"
						},
						"roles": {
							"type": "string"
						}
					}
				}
			},

		}
	},
}

export default {
	profileRouteSchema
}