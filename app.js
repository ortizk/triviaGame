console.log('JS is working!');

$("#startGame").click( (e)=>{
	console.log("start game button was clicked");
	console.log(questions[0].q)
	$("#questionForm").append("<p>" + questions[0].q + "</p>");
	// will have to append a random question

	// make this into a function
	var opt1 = document.createElement("input");
	opt1.type = "radio";
	opt1.name = "options"
	$("#questionForm").append(opt1, questions[0].opt1);

	var opt2 = document.createElement("input");
	opt2.type = "radio";
	opt2.name = "options"
	$("#questionForm").append(opt2, questions[0].opt2);

	var opt3 = document.createElement("input");
	opt3.type = "radio";
	opt3.name = "options"
	$("#questionForm").append(opt3, questions[0].opt3);

	var opt4 = document.createElement("input");
	opt4.type = "radio";
	opt4.name = "options"
	$("#questionForm").append(opt4, questions[0].opt4);

	var submitButton = document.createElement("button");
	textOnButton = document.createTextNode("check you answer")
	submitButton.append(textOnButton)
	$("#currentQuestion").append(submitButton)

})
















