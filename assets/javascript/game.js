//putting reset function outside of document.ready to act as a global function.

// define variables without value globally so you don't have to put var on in the reset function.

var givenRandomNumber;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var counter;

function reset() {
	// random number generated
	// given random number must be between 19 - 120

	//under the variable written in the reset function - the random number needs to reset after
	//-- after a win or loss

	givenRandomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
	$("#givenRandomNumber").text(givenRandomNumber);

	// four crystals that represent a hidden number
	// crystal random hidden value must be between 1 - 12

	crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	// counter adds up numbers to equal random number generated
	// but must reset after each win or loss
	counter = 0;
	$("#userCount").text(counter);
}

$(document).ready(function() {
	// I put reset here- once the document is ready we want the functions assigned and ready to use.

	reset();

	//the variables below are not in the global variable becasue they are not defined more than once.

	var crystalImageOne = $("#crystalOne");
	var crystalImageTwo = $("#crystalTwo");
	var crystalImageThree = $("#crystalThree");
	var crystalImageFour = $("#crystalFour");

	// win and lose count start at 0 when the page is loaded and when it's refreshed.

	var winCount = 0;
	var loseCount = 0;

	// The code below allows for the  win/ loss count, given random numbers to appear on the game



	$("#win-count").text(winCount);
	$("#lose-count").text(loseCount);
	$("#givenRandomNumber").text(givenRandomNumber);
	$("#userCount").text(counter);


	// If we click crystal image one the counter will increase by crystal one (random number),
	// and if we click crystal image two it will increase the counter by crystal two,
	// and if we click crystal image three it will increase the counter by crystal three,
	// and if we click crystal image four it will increase the counter by crystal four.

	//this is where we call the images from the html and interact with them.

	//.click triggers the function

	//counter is equal to counter plus crystal number

	$(crystalImageOne).click(function() {
		counter += crystalOne;
		$("#userCount").text(counter);
		$("#win-count").text(winCount);
		$("#lose-count").text(loseCount);
		counterCheck(counter, givenRandomNumber);
	});

	$(crystalImageTwo).click(function() {
		counter += crystalTwo;
		$("#userCount").text(counter);
		$("#win-count").text(winCount);
		$("#lose-count").text(loseCount);
		counterCheck(counter, givenRandomNumber);
	});

	$(crystalImageThree).click(function() {
		counter += crystalThree;
		$("#userCount").text(counter);
		$("#win-count").text(winCount);
		$("#lose-count").text(loseCount);
		counterCheck(counter, givenRandomNumber);
	});

	$(crystalImageFour).click(function() {
		counter += crystalFour;
		$("#userCount").text(counter);
		$("#win-count").text(winCount);
		$("#lose-count").text(loseCount);
		counterCheck(counter, givenRandomNumber);
	});

	// everytime we click on an image and the counter increases--
	// we should check if the counter value is equal to the given random number.
	// if that is true, then you WIN!! and the game restarts.
	// if else you LOSE and the game restarts and new values are assigned.
	// if the number is greater than the random given number you lose.
	// else you keep playing.

	// game restarts whenever the player wins or loses.

	function counterCheck(currentTotal, total) {
		if (currentTotal === total) {
			winCount += 1;
			alert("YOU WIN!!");
			$("#win-count").text(winCount);
			reset();
		} else if (currentTotal > total) {
			loseCount += 1;
			alert("YOU LOSE! TRY AGAIN!!");
			$("#lose-count").text(loseCount);
			reset();
		}

		// win count / lose count

		// if the current total is equal to the given random number you win! Increase win count
		//and restart game.

		// if the current total is greater than the random given number then we increase the lose count.
		//and restart the game.
	}

});

// game restarts whenever the player wins or loses.
