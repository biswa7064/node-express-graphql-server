const customerSchema = `
type Customer{
    customerID:String!
    name:String!
    address:String
    bookedRooms:[HotelRoom]
}

type Query{
    customers:[Customer]
}
`

export default customerSchema