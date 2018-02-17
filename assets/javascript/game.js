// global variables

var countries = [];   
countries[0] = {name: "new zealand", hint: "Lots of sheep!"};

countries[1] = {name: "russia", hint: "hand me some vodka!"};

countries[2] = {name: "united states of america", hint: "tide pods are on every menu!"};

countries[3] = {name: "saudi arabia", hint: "land of oil and headwear"};

countries[4] = {name: "germany", hint: "dont be a braut, your the werst (lol?)"};

countries[5] = {name: "zimbabwe", hint: "no hint, good luck!"};

var countryName;
var lettersGuessed;
var randomCountry;
var pickedCountry;
var countryLength
var countrySubstring
var placeholder;
var wins = 0;
var losses = 0;
var guessesLeft;
var hint;
var key;


function newGame() {
    placeholder = "";
    guessesLeft = 8;
    lettersGuessed = [];
    randomCountry = Math.floor(Math.random() * countries.length);
    pickedCountry = countries.splice(randomCountry, 1);
    countryName = pickedCountry[0].name;
    hint = pickedCountry[0].hint;
    countryLength = countryName.length;
    countrySubstring = countryName.substring;

    for (var i = 0; i < countryName.length; i++) {

    if (countryName.substring(i, i + 1) === " ") {

            placeholder = placeholder + " ";
        }
    
    else {
            placeholder = placeholder + "_";
        }

 }

    document.querySelector("#win-counter").innerHTML = wins;
    document.querySelector("#loss-counter").innerHTML = losses;
    document.querySelector("#word-blanks").innerHTML = placeholder;
    document.querySelector("#wrong-guesses").innerHTML = lettersGuessed;
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
    
}

    newGame();

    document.onkeyup = function(event) {
        key = event.key;

        var correct = 0;
        //checking for correct guesses when clicked
        for (var i = 0; i < countryLength; i++) {
           if (key == countryName.substring(i, i + 1)) {
                correct++;
                placeholder = placeholder.substring(0, 1) + key + placeholder.substring(i + 1, placeholder.length + 1);
                document.querySelector("#word-blanks").innerHTML = placeholder;
           }
        } 

    //wrong guesses

        if (correct == 0) {
            guessesLeft--;
            lettersGuessed.push(key);
            document.querySelector("#guesses-left").innerHTML = guessesLeft;
            document.querySelector("#wrong-guesses").innerHTML = lettersGuessed;
        }
    //if you win

        if (placeholder == countryName) {
            wins++;
            alert("you big winner! The answer is " + countryName);
            document.querySelector("#win-counter").innerHTML = wins;
        }
    //if you lose
        if (guessesLeft == 0) {
            losses++;
            alert("you lost, dummy! The answer is " + countryName);
            document.querySelector("#loss-counter").innerHTML = losses;
          }

    }
    //new game
    document.querySelector("#button").addEventListener("click", newGame);