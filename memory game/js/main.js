var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//display flipped cards
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

//check cards selected and display message
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!")
} else{
		alert("Sorry, try again.")
	}
