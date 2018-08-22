var translatedResults = function(number) {
	for (i = 0 ; i <= number ; i++) {
		if (i % 3 === 0 && i !== 0) {
			$(".result").append(" " + "I'm sorry, Dave. I'm afraid I can't do that");
		}else if (i.toString().includes("1")){
			$(".result").append(" " + "Boop!");
		}else if (i.toString().includes("0")){
			$(".result").append(" " + "Beep!");
		}else {
			$(".result").append(" " + i);
		}
	};	
};

	

$(document).ready(function(){
	
	$("form#formOne").submit(function(event){
		event.preventDefault();
		var userInput = $("#textInput").val();
		var userNumber = parseInt(userInput);
		$(".result").text("");
		var translate = translatedResults(userNumber);
		$("#textInput").val("");
	});
});
