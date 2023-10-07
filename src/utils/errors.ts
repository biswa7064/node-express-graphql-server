import { GraphQLError, GraphQLErrorExtensions } from "graphql"

export const errorCodes = {
	FORBIDDEN: "FORBIDDEN",
} as const
export class UnAuthorizedError extends GraphQLError {
	extensions: GraphQLErrorExtensions
	constructor(message: string) {
		super(message)
		this.message = message
		this.extensions = {
			code: errorCodes.FORBIDDEN,
		}
	}
}
