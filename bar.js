$("body").keyup((e) => {
	if(32 === e.keyCode){
		console.log("space bar is being pressed");
		$("#beer").animate({
			"top": "-=10px",
			"height": "+=10px"
		}, 90);
	}
});

// var count = 30;

// var counter = setInterval(timer, 1000);

// function timer()
// {
// 	count = count - 1;
// 	if (count <= 0)
// }
// 	clearInterval(counter);

// 	return;
// }
// $("#timer") = count + "secs";
// }