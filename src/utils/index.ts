import fs from "fs"
export const getUtf8DataFromDataDirUsingFS = async (fileName: string) => {
	try {
		const utfData = fs.readFileSync(`__data__/${fileName}`, "utf-8")
		return JSON.parse(utfData)
	} catch (error) {
		throw error
	}
}
