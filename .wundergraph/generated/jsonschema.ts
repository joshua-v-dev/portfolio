import { JSONSchema7 } from "json-schema";

interface Schema {
	Dragons: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	Missions: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
}

const jsonSchema: Schema = {
	Dragons: {
		input: { type: "object", properties: {}, additionalProperties: false },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						spacex_dragons: {
							type: "array",
							items: {
								type: "object",
								properties: { name: { type: "string" }, active: { type: "boolean" } },
								additionalProperties: false,
							},
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	Missions: {
		input: {
			type: "object",
			properties: {
				find: {
					additionalProperties: false,
					type: "object",
					properties: {
						id: { type: "string" },
						manufacturer: { type: "string" },
						name: { type: "string" },
						payload_id: { type: "string" },
					},
				},
			},
			additionalProperties: false,
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						spacex_missions: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									name: { type: "string" },
									manufacturers: { type: "array", items: { type: "string" } },
								},
								additionalProperties: false,
							},
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
};
export default jsonSchema;
