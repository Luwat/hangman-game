// //interact with player
// //creating a prompt
// let name = prompt("What's your name");
// alert("Hello " + name);

// //Using corfirm to ask some yes/no questions
// var likeGame = confirm("Do you like hangman game?");
// if (likeGame) {
//     alert("Very Good!")
// } else {
//     alert("Please feel free to play, You'll enjoy it!");
// }
//creating an array of words
let words = ["javascript", "monkey", "amazing", "pancake"];

//picking a random word
let word = words[Math.floor(Math.random() * words.length)];

//setting up the answer array
let answerArray = [];
for (let i=0; i < word.length; i++){
    answerArray[1] = "_"
}
let remainingLetters = word.length;

//the loop
while (remainingLetters > 0) {
    //Show the player their progress
    alert(answerArray.join(" "));

    //Get a guess from the player
    let guess = prompt("Guess a letter or click cancel to stop playing");
    if (guess === null) {
        //Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter")
    } else {
        //Update the game state with the guess
        for (let j=0; j < word.length; j++) {
            if(word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;

            }
        }
    }
//The end of the Game loop
}
//Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good Job! The answer was " + word);