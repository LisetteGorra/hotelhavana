var hotel = {
    name: "Hotel Havana",
    rating: 5.0,
    roomRate: 1799,
    roomsNumbersAvailable: ["101", "201", "301", "401", "501", "601", "701"],
    roomNumbersBooked: [],
    roomType: "Suite",
    
    numberOfRoomsAvailable: function() {
        return this.roomNumbersAvailable.length;
    },
    numberOfRoomsBooked: function() {
		return this.roomNumbersBooked.length;
	},
	numberOfRooms: function() {
        //available rooms plus booked rooms
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },
    
};