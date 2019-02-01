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
    
	bookRoom: function(){
	    //only book if one+ is available
	
	    if(this.numberOfRoomsAvailable() > 0) {
	        // select a room with selected room drop down 
	        var selectedRoomDD = document.getElementById("selectedRoom").value;
	        
	        this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(selectedRoomDD), 1));
	        
	        var selectRoomList = "<form> <select id='selectedRoom'>";
	        for (var i = 0; i < this.roomNumbersAvailable.length; i++);
	        
	        selectRoomList += "<option value=" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
	        }
	        selectRoomList += "</select> </form>";
	        
	        document.getElementById("selectARoom").innerHTML = selectRoomList;
	        //end of drop down update
	        
	        var roomsListed ="<form> <select id='bookedRoom'>";
	        for(var i = 0; i < this.roomNumbersBooked.length; i++) {
	        	roomsListed += "<option value=" + this.roomNumbersBooked[i] + ">" + this.roomNumbersBooked[i] + "</option>";
            }
	        roomsListed += "</select> </form>";
	        document.getElementById("rmBooked").innerHTML = roomsListed;
	        //update the drop down list of booked rooms .. this code updates
	    }
	};