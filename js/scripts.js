
var translation = function(number) {
	
var splitInput = number.split("");
var result = [];
	
	for (i=0 ; i < splitInput.length ; i++) {
			
		if (parseInt(splitInput[i]) % 3 === 0 && parseInt(splitInput[i] !== 0)) {
		result.push("I'm sorry, Dave. I'm afraid I can't do that.");
		}else{
			result.push(splitInput[i]);
	}
}
}
	

$(document).ready(function(){

  $("form#formOne").submit(function(event){
  event.preventDefault();
	// var result = ("");
	var userInput = $("#textInput").val();
	 
  translation(userInput);
  });


});
