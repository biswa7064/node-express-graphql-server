const hotelsSchema = `#graphql
type Hotel{
    hotelID:String
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
input CreateHotel{
    address:String
    price:String
    ratings:Float
    image:String
}

type Mutation{
    addHotel(req:CreateHotel):Hotel
}
`
export default hotelsSchema
