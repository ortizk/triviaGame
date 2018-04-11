console.log('JS is working!');


// -------------DISABLES KEYUP FUNCTIONALITY FROM BAR SO PLAYER CAN NO LONGER INCREASE BEER----------------
$('*').off('keyup');

// --------TRANSFERING BEER LEVEL FROM BAR--------
beerVal = Number(location.search.split('=')[1]);

console.log(localStorage.barToTrivia);

let beerAtTrivia = parseInt(localStorage.barToTrivia);

console.log(beerAtTrivia);

$("#triviaBeer").css("height", beerAtTrivia);
$('#beerMugTrivia').css('bottom', 0);
$('#beerMugTrivia').css('right', 0);

// -------------TIMER-----------

var timer = $("#timer");
var timeLeft = 10;
var interval;

$("#timer").text(timeLeft)

const onClickTimer = () => {
	timeLeft = 10;
	timer.text(timeLeft);
	const timeIt = () => {
		timeLeft--;
		timer.text(timeLeft);
		if(timeLeft === 0){
			clearInterval(interval);
			console.log('time is up!');
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
		gameOver();
	}
	else if(questionCount === 1){
		$("#checkStatus").remove
	}
		
	else {
		$("#rightBut").addClass("hide");
		questionCount += 1;
		clearBoard();
		questions.splice(random, 1);
		random = getRandomNumber();
		makeBoard();
		onClickTimer();
		$('#nextButton').addClass('hide');
		$('#checkAnswerButton').removeClass('hide');
		$("#wrongAnswer").text(questions[random].answer).addClass("hide");
		$("#right").text("RIGHT! More Beer For You!").addClass("hide");
	}
});


const checkAnswer = (option) => {
	if ($('input[name=options]:checked').length > 0 && questions[random][option] === questions[random].answer ) {
		console.log($('input[name=options]:checked')[0].id)
		console.log("RIGHT");
		console.log('correct answer', questions[random].answer);
		console.log('picked answer', questions[random][option]);
		$("#right").text("RIGHT! More Beer For You!").removeClass("hide");
		if(beerAtTrivia < 290){
			$("#triviaBeer").css("height", beerAtTrivia += 15);
		}
		else {
			$("#rightBut").text("THAT'S RIGHT but there's no more room in your mug for more beer! Keep Going!").removeClass("hide");
		}	
	}
	else {
		console.log(`WRONG, it's ${questions[random].answer}`);
		if(beerAtTrivia >= 0){
			$("#triviaBeer").css("height", beerAtTrivia -= 15);
		};
		$("#wrongAnswer").text(`WRONG! The correct answer is ${questions[random].answer}`).removeClass("hide");

	}
}

const makeOption = (name) => {
	var label = document.createElement("label");
	var opt = document.createElement("input");
	var p = document.createElement("p");

	p.textContent = questions[random][name];
	opt.type = "radio";
	opt.name = "options";
	opt.id = name;
	label.appendChild(opt);
	label.appendChild(p);
	label.onclick = function(){
		clearInterval(interval);
	}
	$("#questionForm").append(label);
}


const makeBoard = () => {
	$("#questionForm").append("<div>" + questionCount +". " + questions[random].q + "</div>");

	makeOption("opt1");
	makeOption("opt2");
	makeOption("opt3");
	makeOption("opt4");
};

const clearBoard = () => {
	$("#questionForm").empty();
}


const timesUp = () => {
	if(questionCount === 10){
		gameOver();
		$("#wrongAnswer").text(`Time's up! The answer is ${questions[random].answer}`).removeClass("hide");
	}
	else {
		console.log("YOUR TIME IS UP! The correct answer is " + questions[random].answer);
		$("#checkAnswerButton").addClass('hide');
		$("#nextButton").removeClass('hide');
		$("#triviaBeer").css("height", beerAtTrivia -= 15);
		$("#wrongAnswer").text(`Time's up! The answer is ${questions[random].answer}`).removeClass("hide");
		$("#rightBut").addClass("hide");

	}
		
};

const gameOver = () => {
		clearBoard();
		$("#wrongAnswer").addClass("hide");
		$("#nextButton").addClass('hide');
		$("#checkAnswerButton").addClass('hide');
		$("#playAgainLink").removeClass('hide');
		$("#rightBut").addClass("hide");
		$("#right").addClass("hide");
		if(beerAtTrivia >= 200){
			$("#status").text("Genius Status! Thanks for Playing!")
		}
		else if(beerAtTrivia >= 100 && beerAtTrivia <= 199){
			$("#status").text("Not Too Shabby! Thanks for Playing!")
		}
		else {
			$("#status").text("Guess It's Not Your Night! Thanks for Playing!");
		}
};


















