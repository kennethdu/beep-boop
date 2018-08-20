var translation = function(input) {
	
	var splitInput = input.split(); 
	var result = [];
	var translatedResults;
	
		
	splitInput.forEach(function(number) {
		var translate = '';
			if (parseInt(number)% 3 === 0 && parseInt(number) > 0) {
				translate = "I'm sorry, Dave. I'm afraid I can't do that.";
			} else if (number.includes("1")) {
			translate = "Boop!";
			} else if (number.includes("0")) {
				translate = "Beep!";
			// } else{
				// var range = function (start, number) {
					// for (i = 0 ; i <= number ; i++) {
						// result.push[i];
					
				// translate = range;
					// }
				// };	
			// result.push(translate);
			// }; working on showing a range of numbers code not operationtional
	translatedResults = transString(result);
	return translatedResults;
	});
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
		$("#result").text(translatedResults);
	});
});
