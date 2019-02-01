// 	bookRoom: function() {
// 		//only book a room if one+ is available

// 		if (this.numberOfRoomsAvailable() > 0) {
// 			//select a random available room
// 			//var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
// 			var selectedRoomDD = document.getElementById("selectedRoom").value;
// 			// alert("Room "+selectedRoomDD+" has been booked.")

			// this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(selectedRoomDD), 1));






			// //update the drop down list of available
			// var selectRoomList = "<form> <select id='selectedRoom'>";
			// for (var i = 0; i < this.roomNumbersAvailable.length; i++) {








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
			//update the drop down list of booked


		}
	},
	
	
	booRoom: function(){
	    //only book if one+ is available
	
	    if(this.numberOfRoomsAvailable() > 0) {
	        // select a room with selected room drop down 
	        var selectedRoomDD = document.getElementById("selectedRoom").value;
	        
	        this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(roomNumbersAvailable.indexOf(selectedRoomDD), 1));
	        
	        var selectRoomList = "<form> <select id='selectedRoom'>";
	        for (var i = 0; i < this.roomNumbersAvailable.length, i++);
	        
	        selectRoomList += "<option value=" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>"
	        
	        
	        
	    }
	}