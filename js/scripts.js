var translation = function(inputted){
	
	var splitInput = inputted.split('');
	var result = [];
	var translatedResults;
		
	splitInput.forEach(function(number) {
		var trans = '';
			if (parseInt(number)% 3 === 0 && parseInt(number) > 0) {
				trans = "I'm sorry, Dave. I'm afraid I can't do that.";
			}else if (number === "0") {
				trans = "Beep!";
			}else if (number === "1") {
				trans = "Boop!";
			}else{			
				trans= number;
			}	
			result.push(trans);
	});
};

	

$(document).ready(function(){

	$("form#formOne").submit(function(event){
		event.preventDefault();
		// var result = ("");
		var userInput = $("#textInput").val();
		 
		translatedResults = translation(userInput);
	});


});
