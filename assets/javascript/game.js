// Set variables

var wins = 0;
var losses = 0;
var userNumber = 0;


// Get target number
function targetNum() {

var targetNumber = Math.floor(Math.random() * 101);

$("#goalNumber").text(targetNumber);

};

// Add value to crystals

function crystalpoints () {

	for (var = c; c < 4; c++) {
		var userPoints = Math.floor(Math.random() * 16);

		$("#power" + c).attr("value", userPoints);
	};
};



targetNum();
crystalpoints();


