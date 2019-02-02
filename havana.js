var hotel = {
	name: "Hotel Havana Oh NANANA!",
	rating: 5.0,
	roomRate: 325,
	roomNumbersAvailable: ["101", "201", "301", "401", "501", "601"],
	roomNumbersBooked: [],
	roomType: "Suite",

	numberOfRoomsAvailable: function() {
		//length of the number of rooms available, returned as an integer (1, 5, 20, etc)
		return this.roomNumbersAvailable.length;
	},

	numberOfRoomsBooked: function() {
		return this.roomNumbersBooked.length;
	},

	numberOfRooms: function() {
		//availa rooms plus booked rooms
		return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
	},


	bookRoom: function() {
		//only book a room if one+ is available

		if (this.numberOfRoomsAvailable() > 0) {
			//select a random available room
			//var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
			var selectedRoomDD = document.getElementById("selectedRoom").value;
			// alert("Room "+selectedRoomDD+" has been booked.")

			this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(selectedRoomDD), 1));

			//update the drop down list of available
			var selectRoomList = "<form> <select id='selectedRoom'>";
			for (var i = 0; i < this.roomNumbersAvailable.length; i++) {


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
	unBookRoom: function() {
		if (this.numberOfRoomsBooked() > 0) {
			
			var selectedRoomBooked = document.getElementById("bookedRoom").value;
			this.roomNumbersAvailable = this.roomNumbersAvailable.concat(this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(selectedRoomBooked),1));
			
			//update the drop down list of available
			var selectRoomList = "<form> <select id='selectedRoom'>";
			for (var i = 0; i < this.roomNumbersAvailable.length; i++) {


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
	}

};

document.getElementById("hotelName").innerText = hotel.name;

//create initial drop down list

var selectRoomList = "<form> <select id='selectedRoom'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {
	//need to escape certain quotes on the following line.  Should research "escaping characters and quotes"

	selectRoomList += "<option value=" + hotel.roomNumbersAvailable[i] + ">" + hotel.roomNumbersAvailable[i] + "</option>";
}
selectRoomList += "</select> </form>";
document.getElementById("selectARoom").innerHTML = selectRoomList;

//EO create drop down list

//dropdown of bookedseats




var roomsListed = "<form> <select id='bookedRoom'>";
for (var i = 0; i < hotel.roomNumbersBooked.length; i++) {
	roomsListed += "<option value=" + hotel.roomNumbersBooked[i] + ">" + hotel.roomNumbersBooked[i] + "</option>";
}
roomsListed += "</select> </form>";
document.getElementById("rmBooked").innerHTML = roomsListed;



//unbook room
// var randomRoom = this.roomNumbersBooked[Math.floor(Math.random() * this.roomNumbersBooked.length)];
// 			this.roomNumbersAvailable.unshift(this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(randomRoom), 1)[0]);


// this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]);
//reomve booked rotom from roomNumbersAvailable using slice/indexOf

//this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]));
//this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0];

// Start of UL List Section
//roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
// rmsAvail





// var roomList = "<ul>";
// for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {
// 	roomList += "<li>" + hotel.roomNumbersAvailable[i] + "</li>";


// }
// roomList += "</ul>";
// document.getElementById("rmsAvail").innerHTML = roomList;


// End of UL List Section

// Start of select a room method
//roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],


// EO select a room method


// var select = document.getElementById("selectARoom");

// select.innerHTML = "";
// for(var d = 0; d < hotel.roomNumbersAvailable.length; d++) {
// 	var opt = hotel.roomNumbersAvailable[d];
// 	select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
// }



// for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {
// var dropDown = roomNumbersAvailable[i]



//for loop
//document.getElementById("rmsAvail").innerText = hotel.roomNumbersAvailable[i];

//this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1));	



//this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1));

//this.numberOfRoomsBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(0, 1, randomRoom));
//console.log(this.roomNumbersBooked);

//this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]);
//add that random room to roomNumbersBooked
// I can use .push or .concat or .unshift
// this.roomNumbersBooked.concat(randomRoom);
//	this.roomNumbersBooked.push(randomRoom);


//this.roomNumbersBooked.push(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]);

// unBookRoom: function() {
// 	if (this.numberOfRoomsBooked() > 0 ) {
// 		return this.roomNumbersAvailable.unshift(this.roomNumbersBooked.shift());
// 	}
// }


// (this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]);
//var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()* this.roomNumbersAvailable.length)];
//return this.roomNumbersBooked.splice(0, 0, this.roomNumbersAvailable.splice([Math.floor(Math.random()* this.roomNumbersAvailable.length), 1])[0]);
//bookRoom: function () {

//if (this.numberOfRoomsAvailable() > 0 ) {
//return this.roomNumbersBooked.unshift(this.roomNumbersAvailable.shift());
//}
//},

//unBookRoom: function() {
//if (this.numberOfRoomsBooked() > 0 ) {
//	return this.roomNumbersAvailable.unshift(this.roomNumbersBooked.shift());
//}
//}

//return this.roomNumbersAvailable.splice(0, 1, this.roomNumbersBooked.splice(0,1));
//return this.roomNumbersBooked.splice(0, 1, this.roomNumbersAvailable.splice(0,1));





//Playground

// var ar = [1, 2, 3, 4, 5, 6];
// ar.pop();
// console.log(ar);
// var newAr = [];
// var removedItem = ar.pop();

