const customerSchema = `
type Customer{
    customerID:String!
    name:String!
    address:String
    bookedRooms:[HotelRoom]
    role:CustomerRole
}

enum CustomerRole{
    ADMIN
    EMPLOYEE
    OUTSIDER
}

type Query{
    customers:[Customer]
    customerByID(cID:String!):Customer
}
`

export default customerSchema
