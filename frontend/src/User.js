class User{
    constructor(userID){
        this.id = userID;
    }
}

class Place{
    constructor(lat, long, days){
        this.latitude = lat;
        this.longitude = long;
        this.days = days;
    }
}

class Itinerary{
    constructor(places, startingDate){
        this.placeList = places;
        this.startDate = startingDate;
    }
}