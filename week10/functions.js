// let dogName = "Bobo";
// let dogWeight = 23;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// }
// else {
//     console.log(dogName + " says woof woof");
// }

// dogName = "Spiky";
// dogWeight = 17;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// }
// else {
//     console.log(dogName + " says woof woof");
// }

// dogName = "Spot";
// dogWeight = 53;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// }
// else {
//     console.log(dogName + " says woof woof");
// }

// dogName = "Lady";
// dogWeight = 16;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// }
// else {
//     console.log(dogName + " says woof woof");
// }

// Fix this with functions

function bark(dogName, dogWeight) {
    if (dogWeight > 20) {
        console.log(dogName + " says WOOF WOOF");
    }
    else {
        console.log(dogName + " says woof woof");
    }
}

bark("Bobo", 23);
bark("Spiky", 17);
bark("Spot", 53);
bark("Lady", 16);

// Finding area and distance

let x = 32;
let y = 44;
let radius = 5;

let centerX = 0;
let centerY = 0;
let width = 600;
let height = 400;

function setup(width, height) {
    centerX = width / 2;
    centerY = height / 2;
}

function computeDistance(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    let d2 = (dx * dx) + (dy * dy);
    let d = Math.sqrt(d2);
    return d;
}

function circleArea(r) {
    let area = Math.PI * r * r;
    return area;
}

setup(width,height);
let area = circleArea(radius);
let distance = computeDistance(x, y, centerX, centerY)
alert("Area: " + area);
alert("Distance: " + distance);