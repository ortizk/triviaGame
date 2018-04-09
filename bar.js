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
		console.log("space bar is being pressed");
		$("#beer").animate({
			"top": "-=2px",
			"height": "+=2px"
		}, 50);
	}
		console.log(beerVal);
		addToLocalStorage(beerVal);
});



// TODO
// insert tiimer
// make beer a global variable that can be accessed and displayed when player starts game