
// var numbers = ["2", "4", "5", "6", "7", "8", "9"];
// var beep = ["0"];

var translation = function(number) {
var userInput = $("#textInput").val();
var splitInput = userInput.split();
	
	for (i=0 ; i < splitInput.length ; i++) {
			
		if (splitInput.length[i] % 3 === 0) {
			return ("I'm sorry, Dave. I'm afraid I can't do that.");
		}else if (splitInput.length[i] === 1) {
			return ("Boop!"); 
		}else if (splitInput.length[i] === 0) {
			return ("Beep!");
			}else {
				return false;
			}
	}
}
	
	// for (i=0 ; i < splitInput.length; i++) {
		// if (beep.indexOf(splitInput[i]<= "0")) {
			// splitInput[i] === "Beep!";
		// };
		// return splitInput
	// };




$(document).ready(function(){

  $("form#formOne").submit(function(event){
  event.preventDefault();
	// var result = ("");
	 
  $("#result").text(translation);
  });


});
