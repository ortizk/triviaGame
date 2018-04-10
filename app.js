console.log('JS is working!');


// -------------DISABLES KEYUP FUNCTIONALITY FROM BAR SO PLAYER CAN NO LONGER INCREASE BEER----------------
$('*').off('keyup');

// --------TRANSFERING BEER LEVEL FROM BAR--------
console.log(beerVal);

console.log(localStorage.barToTrivia);

let beerAtTrivia = parseInt(localStorage.barToTrivia);

console.log(beerAtTrivia);

$("#triviaBeer").css("height", beerAtTrivia);


// -------------TIMER-----------

var timer = $("#timer");
var counter = null;
var timeLeft = 5;

var interval;

$("#timer").text(timeLeft)

const onClickTimer = () => {
	const timeIt = () => {
		counter++;
		timer.text(timeLeft - counter);
		if(counter === timeLeft){
			counter = -1;
			clearInterval(interval);
			console.log('time is up!')
			timesUp();
		}
	};	
	interval = setInterval(timeIt, 1000);
};

// --------------------------------

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
	var option = $('input[name=options]:checked')[0];
	if(option){
		checkAnswer(option.id);
		$("#checkAnswerButton").addClass('hide');
		$("#nextButton").removeClass('hide');
		clearInterval(interval);
		counter = -1;
	}
	else {
		console.log('eff you pick an answer');
	}
});
let questionCount = 1;

$("#nextButton").click( (e) => {
	console.log("Next button was clicked, questionCount is at " + questionCount);
	if(questionCount === 10){
		console.log("GAME OVER");
	};
	questionCount += 1;
	clearBoard();
	questions.splice(random, 1);
	random = getRandomNumber();
	makeBoard();
	onClickTimer();
	$('#nextButton').addClass('hide');
	$('#checkAnswerButton').removeClass('hide');
});

let cssBeerTop = 282;

const checkAnswer = (option) => {
	if ($('input[name=options]:checked').length > 0 && questions[random][option] === questions[random].answer ) {
		console.log($('input[name=options]:checked')[0].id)
		console.log("RIGHT");
		console.log('correct answer', questions[random].answer);
		console.log('picked answer', questions[random][option]);
		$("#triviaBeer").css("top", cssBeerTop -= 15);
		$("#triviaBeer").css("height", beerAtTrivia += 15);
	}
	else {
		console.log(`WRONG, it's ${questions[random].answer}`);
		$("#triviaBeer").css("top", cssBeerTop += 15);
		$("#triviaBeer").css("height", beerAtTrivia -= 15);
	}
}


const makeBoard = () => {
		$("#questionForm").append("<p>" + questions[random].q + "</p>");

		// make this into a function
		var opt1 = document.createElement("input");
		opt1.type = "radio";
		opt1.name = "options";
		opt1.id = "opt1";
		$("#questionForm").append(opt1, "<p>" + questions[random].opt1 + "</p>");

		var opt2 = document.createElement("input");
		opt2.type = "radio";
		opt2.name = "options";
		opt2.id = "opt2"
		$("#questionForm").append(opt2, "<p>" + questions[random].opt2 + "</p>");

		var opt3 = document.createElement("input");
		opt3.type = "radio";
		opt3.name = "options";
		opt3.id = "opt3";
		$("#questionForm").append(opt3, "<p>" + questions[random].opt3 + "</p>");

		var opt4 = document.createElement("input");
		opt4.type = "radio";
		opt4.name = "options";
		opt4.id = "opt4";
		$("#questionForm").append(opt4, "<p>" + questions[random].opt4 + "</p>");
	};

const clearBoard = () => {
	$("#questionForm").empty();
}


const timesUp = () => {
	console.log("YOUR TIME IS UP! The correct answer is " + questions[random].answer);
	$("#checkAnswerButton").addClass('hide');
	$("#nextButton").removeClass('hide');
	$("#triviaBeer").css("top", cssBeerTop += 15);
	$("#triviaBeer").css("height", beerAtTrivia -= 15);
};















