// global variables

var guess = [];

var wrongGuess = [];
var word = ['yep','nope'];
var randomWord;
var underScores = [];

var wordBlanks;

var guessesLeft = [10];
var winCounter;
var lossCounter;


function startGame() {

    randomWord = word[Math.floor(Math.random() * word.length)];

    for (var i = 0; i < randomWord.length; i++) {
        
        underScores.push('_');

    }

    document.getElementById('word-blanks').innerHTML = underScores.join(" ");

    wrongGuess = [];

    guessesLeft = [10];

    document.getElementById('guesses-left').innerHTML = guessesLeft;

}

function

document.onkeyup = function(event) {

    guess = event.key;

    if (randomWord.indexOf(guess) > -1) {

        for (var i = 0; i < randomWord.length; i++) {
            
            if (randomWord[i] === guess) {

                underScores[i] === guess;

            }

        }
        
    }

    else {

        wrongGuess.push(guess);

        guessesLeft--;
        
        document.getElementById('guesses-left').innerHTML = guessesLeft;


    }

}

startGame();
