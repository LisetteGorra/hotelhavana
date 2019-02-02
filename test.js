	// unBookRoom: function() {
	// 	if (this.numberOfRoomsBooked() > 0) {
			
	// 		var selectedRoomBooked = document.getElementById("bookedRoom").value;
	// 		this.roomNumbersAvailable = this.roomNumbersAvailable.concat(this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(selectedRoomBooked),1));
			
	// 		//update the drop down list of available
	// 		var selectRoomList = "<form> <select id='selectedRoom'>";
	// 		for (var i = 0; i < this.roomNumbersAvailable.length; i++) {


			// 	selectRoomList += "<option value=" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
			// }
		
			// selectRoomList += "</select> </form>";
			// document.getElementById("selectARoom").innerHTML = selectRoomList;

			//end of drop down update
		
		
		
			var roomsListed = "<form> <select id='bookedRoom'>";
			for (var i = 0; i < this.roomNumbersBooked.length; i++) {
				roomsListed += "<option value=" + this.roomNumbersBooked[i] + ">" + this.roomNumbersBooked[i] + "</option>";
			}
			roomsListed += "</select> </form>";
			document.getElementById("rmBooked").innerHTML = roomsListed;
			//update the drop down list of booked
		}
	}

};


	unBookRoom: function() {
		if(this.numberOfRoomsBooked() > 0) {
			
			var selectedRoomBooked = document.getElementById("bookedRoom").value;
			this.roomNumbersAvailable = this.roomNumbersAvailable.concat(this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(selectedRoomBooked), 1));
			
			//update the dropdown list of available rooms
			var selectRoomList = "<form> <select id='selectedRoom'>";
			for(var i = 0; i < this.roomNumbersAvailable.length; i++) {
				
				selectRoomList += "<option value=" + this.numberOfRoomsAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
			}
			
			selectRoomList += "</select> </form>";
			document.getElementById(selectARoom).innerHTML = selectRoomList;
			//end of drop down update
			
			
			
		}
	}