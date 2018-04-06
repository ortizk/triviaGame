console.log('JS is working!');

$("#startGame").click( (e)=>{
	console.log("start game button was clicked");
	$("#questionForm").append("<p>" + questions[random].q + "</p>");
	// will have to append a random question

	// make this into a function
	var opt1 = document.createElement("input");
	opt1.type = "radio";
	opt1.name = "options";
	opt1.id = "opt1";
	$("#questionForm").append(opt1, questions[random].opt1);

	var opt2 = document.createElement("input");
	opt2.type = "radio";
	opt2.name = "options";
	opt2.id = "opt2"
	$("#questionForm").append(opt2, questions[random].opt2);

	var opt3 = document.createElement("input");
	opt3.type = "radio";
	opt3.name = "options";
	opt3.id = "opt3";
	$("#questionForm").append(opt3, questions[random].opt3);

	var opt4 = document.createElement("input");
	opt4.type = "radio";
	opt4.name = "options";
	opt4.id = "opt4";
	$("#questionForm").append(opt4, questions[random].opt4);

	var submitButton = document.createElement("button");
	submitButton.id = "checkAnswerButton"
	textOnButton = document.createTextNode("check you answer")
	submitButton.append(textOnButton)
	$("#currentQuestion").append(submitButton)

	$("#checkAnswerButton").click( (e) => {
		console.log("check answer was clicked");

		checkAnswer();
	})

});


const checkAnswer = () => {
	var option = $('input[name=options]:checked')[0].id;
	if ($('input[name=options]:checked').length > 0 && questions[random][option] === questions[random].answer ) {
		console.log($('input[name=options]:checked')[0].id)
		console.log("RIGHT");
		console.log('correct answer', questions[random].answer);
		console.log('picked answer', questions[random][option]);
	}
	else {
		console.log("WRONG");
	}
}

// trying to make it so the player can't change their selection once answer is submitted
// $(":radio").click(function() {
// 	var options = $(this).attr("name");
// 	$(":radio[name='"+options+"']:not(:checked)").attr("disabled", true);
// });

var random = Math.floor((Math.random() * 10) + 1);
console.log(random);














