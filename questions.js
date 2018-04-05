const questions = [
	{
		q:"What year was the two dollar bill last printed in the United States",
		opt1: 2014,
		opt2: 2008,
		opt3: 2006,
		opt4: 2000 
	},
	{
		q:"Jackson Polluck was an inlfuencial abstract expressionist painter from what country?",
		opt1: "Brazil",
		opt2: "France",
		opt3: "Italy",
		opt4: "United States"	
	}
	];

$("#startGame").click( (e)=>{
	console.log("start game button was clicked");
	console.log(questions[0].q)
	// $("#currentQuestion").append("<p>" + $(questions[0].q) + "</p");
})

