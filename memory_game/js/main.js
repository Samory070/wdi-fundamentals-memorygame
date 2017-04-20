
var cards = ['Queen', 'Queen', 'King', 'King'];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[3];
 cardsInPlay.push(cardOne);
 cardsInPlay.push(cardTwo);
  console.log("User flipped " + cardsInPlay);

if(cardOne === cardTwo){
	alert("You found a match!");
}else{
	alert("Sorry, try again.");
}