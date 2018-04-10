var beerVal = 0;

function transferBeer (beerVal) {
	return beerVal;
}; 

const addToLocalStorage = (value) => {
	localStorage.setItem('barToTrivia', value)
}

$("body").keyup((e) => {
	if(32 === e.keyCode){
		transferBeer(beerVal += 2);
		$("#beer").animate({
			"top": "-=2px",
			"height": "+=2px"
		}, 50);
	}
		console.log(beerVal);
		$("#spacebar").addClass("hide");
		addToLocalStorage(beerVal);
});


// -------------TIMER 1-----------

var timer1 = $("#timer1");
var counter1 = null;
var timeLeft1 = 3;

var interval1;

$("#timer1").text(timeLeft1)

	const timeIt1 = () => {
		counter1++;
		timer1.text(timeLeft1 - counter1);
		if(counter1 === timeLeft1){
			clearInterval(interval1);
			$("#timer1").addClass("hide");
			$("#spacebar").removeClass("hide");
			wholeBeerTimer();


			console.log('HIT SPACE BAR')
		}
	};	
	interval = setInterval(timeIt1, 1000);

// --------------------------------

const wholeBeerTimer = () => {
var timer2 = $("#timer2");
var counter2 = null;
var timeLeft2 = 10;

var interval2;

$("#timer2").text(timeLeft2)

const beerTimer = () => {
	counter2++;
	timer2.text(timeLeft2 - counter2);
	if(counter2 === timeLeft2){
		clearInterval(interval2);
		$("#playLink").removeClass("hide");
		$("#homeLink").removeClass("hide");			
		$('*').off('keyup');
	}
}
interval2 = setInterval(beerTimer, 1000);

};


