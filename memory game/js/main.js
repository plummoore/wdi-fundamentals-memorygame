var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];


//checks the 2 flipped cards to see if matching
var checkForMatch = function (){
    if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
} else {
    alert("Sorry, try again.");
    }	
};


//card is clicked and flipped over, front card image is displayed
var flipCard = function (){
	var cardId = this.getAttribute('data-id');
	var card = cards[cardId];
	this.setAttribute('src', cards[cardId].cardImage);
	this.setAttribute("class","clicked");
	console.log(this);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
	checkForMatch();
	}
};



//inital function to create game board
var createBoard = function (){
	for (var i = 0; i < cards.length; i++){
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src','images/back.png');	
	cardElement.setAttribute('data-id',i);
	cardElement.addEventListener('click', flipCard);
	var board = document.getElementById('game-board');
	board.appendChild(cardElement);
}
};

//function to flip back cards for new game (not ideal code!)
var reset = function() {
	document.location.reload();
};


//event listen click button, function reset game (not ideal code - see var reset!)

createBoard();
document.getElementById('button').addEventListener('click', reset);














