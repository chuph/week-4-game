// Set variables

var wins = 0;
var losses = 0;
var userNumber = 0;


// Get target number
function targetNum() {

var targetNumber = Math.floor(Math.random() * 100);

$("#goalNumber").text(targetNumber);

}



targetNum();


