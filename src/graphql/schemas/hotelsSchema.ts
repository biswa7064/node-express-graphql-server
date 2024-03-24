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

type DemoSubscription{
    hotelID:String
    address:String
}

type Subscription{
    demoSubscription:DemoSubscription
}
`
export default hotelsSchema
