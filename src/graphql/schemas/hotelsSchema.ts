const hotelsSchema = `#graphql
type Hotel{
    hotelID:String!
    address:String
    price:String
    ratings:Int
    image:String
}

type RoomService{
    serviceID:String!
    name:String!
}

type HotelRoom{
    roomNumber:Int!
    roomID:String!
    services:[RoomService]
}


type Query{
    hotels:[Hotel]
}
`
export default hotelsSchema
