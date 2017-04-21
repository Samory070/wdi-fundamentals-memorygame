
var cards = ['Queen', 'Queen', 'King', 'King'];
var cardsInPlay = [];

var checkForMatch = function(){
	if(cardsInPlay.length === 2){
		if (cardsInPlay)[0] === cardsInPlay[1]
		alert("You found a match!");
		} else{ alert("Sorry, try again.");
	}
};


var flipCard = function (cardId){
	console.log("User flipped " + cards[cardId]);
	cards[cardId].push(cardsInPlay);
	checkForMatch();

};



	/*var cardOne = cards[0];
	var cardTwo = cards[2];
 	flipCard.push(cardOne);
 	flipCard.push(cardTwo);*/