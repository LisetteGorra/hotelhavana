var hotel = {
    name: "Hotel Havana",
    rating: 5.0,
    roomRate: 1799,
    roomNumbersAvailable: ["101", "201", "301", "401", "501", "601", "701"],
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
	        // alert("Room "+selectedRoomDD+" has been booked.")
	        this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(selectedRoomDD), 1));
	        
	        //update the drop down list of available rooms
	        var selectRoomList = "<form> <select id='selectedRoom'>";
	        for (var i = 0; i < this.roomNumbersAvailable.length; i++);
	        
	        selectRoomList += "<option value=" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
	        }
	        selectRoomList += "</select> </form>";
	        document.getElementById("selectARoom").innerHTML = selectRoomList;
	        //end of drop down update
	        
	        var roomsListed = "<form> <select id='bookedRoom'>";
	        for (var i = 0; i < this.roomNumbersBooked.length; i++) {
	        	roomsListed += "<option value=" + this.roomNumbersBooked[i] + ">" + this.roomNumbersBooked[i] + "</option>";
            }
	        roomsListed += "</select> </form>";
	        document.getElementById("rmBooked").innerHTML = roomsListed;
	        //update the drop down list of booked rooms .. this code updates
	        
	        
		  }
		},
    	unBookRoom: function() {
		if (this.numberOfRoomsBooked() > 0) {
			
			var selectedRoomBooked = document.getElementById("bookedRoom").value;
			this.roomNumbersAvailable = this.roomNumbersAvailable.concat(this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(selectedRoomBooked),1));
			
			//update the dropdown list of available rooms
			var selectRoomList = "<form> <select id='selectedRoom'>";
			for (var i = 0; i < this.roomNumbersAvailable.length; i++) {
				
			selectRoomList += "<option value=" + this.numberOfRoomsAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
			}
			selectRoomList += "</select> </form>";
			document.getElementById("selectARoom").innerHTML = selectRoomList;
			//end of drop down update 

	
			var roomsListed = "<form> <select id='bookedRoom'>";
			for (var i = 0; i < this.roomNumbersBooked.length; i++) {
				roomsListed += "<option value=" + this.roomNumbersBooked[i] + ">" + this.roomNumbersBooked[i] +"</option>";
			}
			roomsListed += "</select> </form>";
			document.getElementById("rmBooked").innerHTML = roomsListed;
			//update the dropdown list of booked
		}
    }
};  	

document.getElementById("hotelName").innerText = hotel.name;

//create initial dropdown list

var selectRoomList = "<form> <select id='selectedRoom'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {
    
    selectRoomList += "<option value+" + hotel.roomNumbersAvailable[i] + ">" + hotel.roomNumbersAvailable[i] + "</option>";
}
selectRoomList += "</select> </form>";
document.getElementById("selectARoom").innerHTML = selectRoomList;
//end of create drop down list 

//drop down of booked seats 

var roomsListed = "<form> <select id='bookedRoom'>";
for (var i = 0; i < hotel.roomNumbersBooked.length; i++) {
    roomsListed += "<option value=" + hotel.roomNumbersBooked[i] + ">" + hotel.roomNumbersBooked[i] + "</option>";
}
roomsListed += "</select> </form>";
document.getElementById("rmBooked").innerHTML = roomsListed;


            