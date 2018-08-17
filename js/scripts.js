
var translation = function(inputted){
	
	var splitInput = inputted.split('');
	var result = [];
		
	splitInput.forEach(function(number) {
		var trans = ("");
			if (parseInt(splitInput[i]) % 3 === 0 && parseInt(splitInput[i] !== 0)) {
			trans =("I'm sorry, Dave. I'm afraid I can't do that.");
			}else{
				result.push(splitInput[i]);
			}	
	});
		result.push(trans);
};

	

$(document).ready(function(){

  $("form#formOne").submit(function(event){
  event.preventDefault();
	// var result = ("");
	var userInput = $("#textInput").val();
	 
  translation(userInput);
  });


});
