var translation = function(inputted) {
	
	var splitInput = inputted.split('');
	var result = [];
	var translatedResults;
		
	splitInput.forEach(function(number) {
		var translation = ('');
			if (parseInt(number)% 3 === 0 && parseInt(number) > 0) {
				translation = "I'm sorry, Dave. I'm afraid I can't do that.";
			} else if (number === "0") {
				translation = "Beep!";
			} else if (number === "1") {
				translation = "Boop!";
			} else{			
				translation = number;
			}	
			result.push(translation);
	});
	translatedResults = transString(result);
	return translatedResults;
};

var transString = function (transInput) {
	translatedResults = transInput.join("");
	return translatedResults;
};

	

$(document).ready(function(){

	$("form#formOne").submit(function(event){
		event.preventDefault();
		var userInput = $("#textInput").val();		 
		translatedResults = translation(userInput);
	});


});
