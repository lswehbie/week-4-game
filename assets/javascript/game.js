//putting reset function outside of document.ready to act as a global function.

function reset() {
	// random number generated

	var givenRandomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

	// four crystals that represent a hidden number

	var crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	var crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	var crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	var crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	// counter adds up numbers to equal random number generated
	var counter = 0;
}

$(document).ready(function() {
	var crystalImageOne = $("#crystalOne");
	var crystalImageTwo = $("#crystalTwo");
	var crystalImageThree = $("#crystalThree");
	var crystalImageFour = $("#crystalFour");

	var winCount = 0;
	var loseCount = 0;

	// If we click crystal image one the counter will increase by crystal one (random number),
	// and if we click crystal image two it will increase the counter by crystal two,
	// and if we click crystal image three it will increase the counter by crystal three,
	// and if we click crystal image four it will increase the counter by crystal four.

	$(crystalImageOne).click(function() {
		counter += crystalOne;
		counterCheck(counter, givenRandomNumber);
	});

	$(crystalImageTwo).click(function() {
		counter += crystalTwo;
		counterCheck(counter, givenRandomNumber);
	});

	$(crystalImageThree).click(function() {
		counter += crystalThree;
		counterCheck(counter, givenRandomNumber);
	});

	$(crystalImageFour).click(function() {
		counter += crystalFour;
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
		} else if (currentTotal > total) {
			loseCount += 1;
		}

		// win count / lose count

		// if the current total is equal to the given random number you win! Increase win count
		//and restart game.

		// if the current total is greater than the random given number then we increase the lose count.
		//and restart the game.
	}
});

// game restarts whenever the player wins or loses.
