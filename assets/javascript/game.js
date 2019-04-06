var wins = document.getElementById("winNum");
var guessNum = document.getElementById("guessNum")
guessNum.innerHTML = 10
wins.innerHTML = 0
var bands = [
    { b: "Sabaton", a: "_______" },
    { b: "Metallica", a: "_________" },
    { b: "Led Zeppelin", a: "___ ________" },
    { b: "Slayer", a: "______" },
    { b: "Rush", a: "____" },
    { b: "Opeth", a: "_____" },
    { b: "Strapping Young Lad", a: "_________ _____ ___" },
    { b: "Death", a: "_____" }
];
var guessedLetters = []
//selects random band from array & displays the associated array on the screen
var bandIndex = Math.floor(Math.random() * 7);
var bandSelect = bands[bandIndex].b;



//creates empty array which will be populated with the 'a' attribute of the selected band
var bandToFill = []
bandToFill.push((bands[bandIndex].a));
splitBand = bandToFill[0].split("");
var displayBand = document.getElementById("hangman");
displayBand.innerHTML = splitBand.join("  ")

function reset() {
    bandIndex = Math.floor(Math.random() * 7)
    bandSelect = bands[bandIndex].b;
    bandToFill.length = [0];
    bandToFill.push((bands[bandIndex].a));
    splitBand = bandToFill[0].split("");
    displayBand = document.getElementById("hangman");
    displayBand.innerHTML = splitBand.join(" ");
    guessNum.innerHTML = 10;
    guessedLetters.length = [0];
    guessedLetters.toString();
    document.getElementById("guessedLetters").innerHTML = guessedLetters;

}
document.onkeyup = function (event) {
    var lcBand = bandSelect.toLowerCase();
    var pattern = /[a-z]/
    //ignore non a-z characters or if the letter was guessed already
    if (guessedLetters.indexOf(event.key) !== -1 && event.key.match(pattern)) {
        return
    }
    //if guessed letter is incorrect, add to guessed letters and increment fails by 1
    if ((lcBand.indexOf(event.key) === -1) && (event.key.match(pattern))) {
        guessNum.innerHTML = guessNum.innerHTML - 1;
        guessedLetters.push(event.key);
        console.log(guessedLetters);
        guessedLetters.toString();
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
    if (parseInt(guessNum.innerHTML) === 0) {
        console.log(guessNum.innerHTML)
        alert("Sorry! Try Again!");
        reset();
    }
    else if ((lcBand.indexOf(event.key) !== -1) && (event.key.match(pattern))) {
        for (i = 0; i < lcBand.length; i++) {
            if (event.key === lcBand[i]) {
                splitBand[i] = event.key;
                displayBand.innerHTML = splitBand.join(" ");
            }
        }
    }

    if (splitBand.indexOf("_") === -1) {
        wins.innerHTML = parseInt(wins.innerHTML) + 1;
        alert("You got it!");
        //resets everything
        reset()
    }

}



