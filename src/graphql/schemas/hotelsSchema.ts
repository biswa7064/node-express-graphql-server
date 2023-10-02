const hotelsSchema = `#graphql
type Hotel{
    hotelID:String!
    address:String
    price:String
    ratings:Float
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

type Mutation{
    addHotel( address:String
    price:String,
    ratings:Float,
    image:String):Hotel
}
`
export default hotelsSchema
