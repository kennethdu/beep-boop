var translation = function(input) {
	
	var splitInput = input.split(); 
	var result = [];
	var translatedResults;
		
	splitInput.forEach(function(number) {
		var translate = '';
			if (parseInt(number)% 3 === 0 && parseInt(number) > 0) {
				translate = "I'm sorry, Dave. I'm afraid I can't do that.";
			} else if (number.includes("0")) {
				translate = "Beep!";
			} else if (number.includes("1")) {
				translate = "Boop!";
			} else{			
				translate = number;
			}	
			result.push(translate);
	});
	translatedResults = transString(result);
	return translatedResults;
};

var transString = function (transInput) {
	translatedResults = transInput.join("").toString();
	return translatedResults;
};

	

$(document).ready(function(){
	$("form#formOne").submit(function(event){
		event.preventDefault();
		var userInput = $("#textInput").val();		 
		translatedResults = translation(userInput);
		$("#result").text(translatedResults);
	});
});
