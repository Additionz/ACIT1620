console.log(Math.floor(10 + Math.random() * 90));
// Math.floor() rounds down every number
// Math.random() generates a number from 0 to 0.99e-15
// Math.ceil() rounds up every number
// Math.floor(min + Math.random() * max-min+1);
let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location1 + 2;
let guess;
let hits = 0;
let guesses = 0;
// Variable first word starts lowercase and then upper case subsequent words instead of using underscore
let isSunk = false;

while (isSunk == false) {
    // Prompt is similar to input in Python
    guess = prompt("Ready, aim, fire! (Enter a number from 0-6):");
    // && = and || = or ! = not
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    }
    else {
        guesses = guesses + 1
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        }
        else {
            alert("MISS!");
        }
    }
}

let stats = "You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/guesses);
alert(stats);