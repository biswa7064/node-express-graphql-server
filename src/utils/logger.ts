import { ObjectValues } from "../types"

const LOG_LEVEL = {
	INFO: "info",
	FATAL: "fatal",
	ERROR: "error",
	SILLY: "silly",
} as const
class Logger {
	private isDevelopment = process.env.NODE_ENV === "development"
	// info
	info = (message: string, args?: any) => {
		this.isDevelopment && this.defaultLog(message, LOG_LEVEL.INFO, args)
	}

	// error
	error = (message: string, args?: any) => {
		this.isDevelopment && this.defaultLog(message, LOG_LEVEL.ERROR, args)
	}

	// default log format for all type of log
	private defaultLog = (
		message: string,
		level: ObjectValues<typeof LOG_LEVEL>,
		args: any
	) =>
		console.log(
			JSON.stringify({
				appname: "graphql-server",
				level,
				message,
				args,
				timestamp: new Date(),
			})
		)
}

const logger = new Logger()
export default logger
