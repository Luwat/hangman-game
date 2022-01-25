//interact with player
//creating a prompt
let name = prompt("What's your name");
console.log("Hello " + name);

//Using corfirm to ask some yes/no questions
var likeGame = confirm("Do you like hangman game?");
if (likeGame) {
    console.log("Very Good!")
} else {
    console.log("Please feel free to play, You'll enjoy it!");
}