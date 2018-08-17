$(document).ready(function(){

  $("form#formOne").submit(function(event){
  event.preventDefault();
	// var result = ("");
	var userInput = $("#textInput").val();
	var splitInput = userInput.split("");
	 
  $("#result").text(translation);
  });


});

// var numbers = ["2", "4", "5", "6", "7", "8", "9"];
// var beep = ["0"];

var translation = function(number) {
	if (number %3===0) {
		return ("I'm sorry, Dave. I'm afraid I can't do that.")
	};
	
	// for (i=0 ; i < splitInput.length; i++) {
		// if (beep.indexOf(splitInput[i]<= "0")) {
			// splitInput[i] === "Beep!";
		// };
		// return splitInput
	// };
};
