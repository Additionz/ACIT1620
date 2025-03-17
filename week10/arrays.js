let scores = [60, 50, 60 ,58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 
    69, 64, 66 , 55, 52, 61, 
    46, 31, 37, 52, 44, 18, 
    41, 53, 55, 61, 51, 44
];

let i = 0;
let highScore = 0;
while (i < scores.length) {
    console.log("Bubble solution #" + i + " score: " + scores[i]);
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
    i = i + 1;
}

console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

let bestSolutions = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);
    }
}

console.log("Solutions with the highest score: " + bestSolutions);

let numbers = new Array(1,2,3,4,5);
console.log(numbers); // [1,2,3,4,5]

let values = new Array(5);
console.log(values); // creates 5 empty items

// let arr = Array.of(5);
// console.log(arr); // [5]

let arr = [1,2,3];
arr.push(4);
console.log(arr); // [1,2,3,4]

arr.pop();
console.log(arr); // [1,2,3] removes from top (end)

arr.unshift(0); 
console.log(arr); // [0,1,2,3] adds from beginning (bottom)

arr.shift();
console.log(arr); // [1,2,3] removes from beginning (bottom)

console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(7)); // -1 (not found)

console.log(arr.lastIndexOf(2)); // 1

console.log(arr.includes(1)); // true
console.log(arr.includes(10)); // false

arr.splice(2,1,10,20); // [1,2,10,20] removes 3 in position 2, adds 10, 20
console.log(arr);

arr.splice(2,0,10,20); // [1,2,10,20,3] adds 10,20 in position 2, pushes 3 to end
console.log(arr);

let sliced = arr.slice(1,4); // [2,10,20] starts at position 1, ends at 4
console.log(sliced);

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let combined = arr1.concat(arr2);
console.log(combined); // [1,2,3,4,5,6]

let words = ["Hello", "world!"];
console.log(words.join(" ")); // "Hello world!"

let sentence = "JavaScript is fun";
let wordsArray = sentence.split(" "); // ["JavaScript", "is", "fun"]
console.log(wordsArray);

function add(a,b) {
    return a+b;
}

console.log(add(2,3));

// Arrow function
let add_arrow = (a,b) => a + b; // don't need curly braces for single line as it's return is implicit

let multiply = (a,b) => { // need curly braces as there are multiple lines
    console.log(`Multiplying ${a} and ${b}`); // ` is similar to (f"{variable}") in Python 
    return a * b;
}
console.log(multiply(4, 5));

const square = x => x * x;
console.log(square(6)); // 36

const greet = () => "Hello World!";  // requires parenthesis even if no arguments are defined
console.log(greet()); // Hello World