console.log('JS is working!');

$("#startGame").click( (e)=>{
	console.log("start game button was clicked");
	$("#questionForm").append("<p>" + questions[0].q + "</p>");
	// will have to append a random question

	// make this into a function
	var opt1 = document.createElement("input");
	opt1.type = "radio";
	opt1.name = "options";
	opt1.id = "opt1";
	$("#questionForm").append(opt1, questions[0].opt1);

	var opt2 = document.createElement("input");
	opt2.type = "radio";
	opt2.name = "options";
	opt2.id = "opt2"
	$("#questionForm").append(opt2, questions[0].opt2);

	var opt3 = document.createElement("input");
	opt3.type = "radio";
	opt3.name = "options";
	opt3.id = "opt3";
	$("#questionForm").append(opt3, questions[0].opt3);

	var opt4 = document.createElement("input");
	opt4.type = "radio";
	opt4.name = "options";
	opt4.id = "opt4";
	$("#questionForm").append(opt4, questions[0].opt4);

	var submitButton = document.createElement("button");
	submitButton.id = "checkAnswerButton"
	textOnButton = document.createTextNode("check you answer")
	submitButton.append(textOnButton)
	$("#currentQuestion").append(submitButton)

	$("#checkAnswerButton").click( (e) => {
		console.log("check answer was clicked");
		checkAnswer();
		// whichBox()
	})

});


const checkAnswer = () => {
	var option = $('input[name=options]:checked')[0].id;
	if ($('input[name=options]:checked').length > 0 && questions[0][option] === questions[0].answer ) {
		console.log($('input[name=options]:checked')[0].id)
		console.log("RIGHT");
		console.log('correct answer', questions[0].answer);
		console.log('picked answer', questions[0][option]);
	}
	else {
		console.log("WRONG");
	}
}

// 	const whichBox = () => {
// 		if($("#opt1")[0].checked && questions[0].opt1 === questions[0].answer) {
// 			console.log("you got the right answer");
// 		}
// 		else if($("#opt2")[0].checked && questions[0].opt2 === questions[0].answer){
// 			questions[0].opt1 === questions[0].answer
// 			console.log("you got the right answer");
// 		}
// 		else if($("#opt3")[0].checked && questions[0].opt3 === questions[0].answer){
// 			questions[0].opt1 === questions[0].answer
// 			console.log("you got the right answer");
// 		}
// 		else if($("#opt4")[0].checked && questions[0].opt4 === questions[0].answer){
// 			questions[0].opt1 === questions[0].answer
// 			console.log("you got the right answer");
// 		}

// 	}


// })
// ---------------------------------------trying to write code to check if it's right AND wrong

// const whichBox = () => {
// 		if($("#opt1")[0].checked && questions[0].opt1 === questions[0].answer) {
// 			console.log("you got the right answer");
// 		}
// 		else if($("#opt2")[0].checked && questions[0].opt2 === questions[0].answer){
// 			questions[0].opt1 === questions[0].answer
// 			console.log("you got the right answer");
// 		}
// 		else if($("#opt3")[0].checked && questions[0].opt3 === questions[0].answer){
// 			questions[0].opt1 === questions[0].answer
// 			console.log("you got the right answer");
// 		}
// 		else if($("#opt4")[0].checked && questions[0].opt4 === questions[0].answer){
// 			questions[0].opt1 === questions[0].answer
// 			console.log("you got the right answer");
// 		}

// 	}

// const checkFirstBox = () => {
// 	if($("#opt1")[0].checked && questions[0].opt1 === questions[0].answer) {
// 			console.log("RIGHT");
// 		}
// 	else {
// 		console.log("WRONG")
// 	}
// }
// const checkAnswer = () => {
// 	if ($('input[name=options]:checked').length > 0 && questions[0].opt1 === questions[0].answer ) {
// 		console.log("RIGHT");
// 	}
// 	else {
// 		console.log("WRONG");
// 	}
// }













