import { ObjectValues } from "."

export const UserRole = {
	ADMIN: "ADMIN",
	OUTSIDER: "OUTSIDER",
	EMPLOYEE: "EMPLOYEE",
} as const

export interface CustomerType {
	customerID: string
	name: string
	address: string
	bookedRooms: any[]
	role: ObjectValues<typeof UserRole>
}
