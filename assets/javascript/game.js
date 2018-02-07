// random number generated 

var givenRandomNumber = Math.floor((Math.random() * (120 - 19 + 1) + 19));

// four crystals that represent a hidden number

var crystalOne = Math.floor((Math.random() * (12 - 1 + 1) + 1));

var crystalTwo = Math.floor((Math.random() * (12 - 1 + 1) + 1));

var crystalThree = Math.floor((Math.random() * (12 - 1 + 1) + 1));

var crystalFour = Math.floor((Math.random() * (12 - 1 + 1) + 1));


$(document).ready(function() {

	var crystalImageOne = $("#crystalOne");
	var crystalImageTwo = $("#crystalTwo");
	var crystalImageThree = $("#crystalThree");
	var crystalImageFour = $("#crystalFour");

// counter adds up numbers to equal random number generated 

	var counter = 0;

// If we click crystal image one the counter will increase by crystal one (random number), 
// and if we click crystal image two it will increase the counter by crystal two,
// and if we click crystal image three it will increase the counter by crystal three,
// and if we click crystal image four it will increase the counter by crystal four.

	$(crystalImageOne).click(function() {
		counter += crystalOne
	});

	$(crystalImageTwo).click(function() {
		counter += crystalTwo
	});

	$(crystalImageThree).click(function() {
		counter += crystalThree
	});

	$(crystalImageFour).click(function() {
		counter += crystalFour
	});



});



// win count / lose count

// game restarts whenever the player wins or loses.