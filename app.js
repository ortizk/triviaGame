console.log('JS is working!');


// -------------DISABLES KEYUP FUNCTIONALITY FROM BAR SO PLAYER CAN NO LONGER INCREASE BEER----------------
$('*').off('keyup');

// -------------TIMER STARTS-----------

var timer = $("#timer");
var counter = 0;
var timeLeft = 5;


$("#timer").text(timeLeft)

const onClickTimer = () => {
	const timeIt = () => {
		counter++;
		timer.text(timeLeft - counter);
		if(counter === timeLeft){
			console.log('timer stopped!')
			clearInterval(interval);
		}
	};	
	var interval = setInterval(timeIt, 1000);
};

// -------------TIMER ENDS----------

const getRandomNumber = () => {
	return Math.floor((Math.random() * questions.length));
}

var random = getRandomNumber();

$("#startGame").click( (e)=>{
	console.log("start game button was clicked");
	makeBoard();
	$('#timer').removeClass('hide');
	onClickTimer();

	$('#checkAnswerButton').removeClass('hide');
	$('#startGame').addClass('hide');

});

$("#checkAnswerButton").click( (e) => {
	console.log("check answer was clicked");
	var option = $('input[name=options]:checked')[0];
	if(option){
		checkAnswer(option.id);
		$("#checkAnswerButton").addClass('hide');
		$("#nextButton").removeClass('hide');
	}
	else {
		console.log('eff you pick an answer');
	}
});

$("#nextButton").click( (e) => {
	console.log("Next button was clicked");
	clearBoard();
	questions.splice(random, 1);
	random = getRandomNumber();
	makeBoard();
	$('#nextButton').addClass('hide');
	$('#checkAnswerButton').removeClass('hide');
});


const checkAnswer = (option) => {
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


const makeBoard = () => {
		$("#questionForm").append("<p>" + questions[random].q + "</p>");

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
	};

const clearBoard = () => {
	$("#questionForm").empty();
}

// --------TRANSFERING BEER LEVEL FROM BAR--------
console.log(beerVal);

console.log(localStorage.barToTrivia);

let beerAtTrivia = parseInt(localStorage.barToTrivia);

console.log(beerAtTrivia);

$("#beer").css("height", beerAtTrivia);

//------------------------------------------------













