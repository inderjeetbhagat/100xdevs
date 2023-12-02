// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

let distanceInKilometer = 100;

let distanceInMetre = function(distanceInKilometer) {
 return distanceInKilometer * 10000;
}

console.log(distanceInMetre(distanceInKilometer));

// Question-2:    WAP to input radius of a circle and log the area of circle.

let radius = 10

let logArea = function(radius) {
    return Math.log(2*3.14*radius)
}

console.log(logArea(radius))

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

let a = 10, b = 20;

let addition = function (a, b) {
    return a + b;
}

let substraction = function (a, b) {
    return a - b;
}

console.log(`The addition of two number is ${addition(a, b)}`);
console.log(`The substraction of two number is ${substraction(a, b)}`);

// Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

let sub1, sub2;

let totalMarks = function (subject1, subject2) {
    return subject1 + subject2;
}

let percentage = function (sum) {
    return (sum/200)*100;
}

console.log(`The sum of two subject is ${totalMarks(90,100)}`)
console.log(`The percentage is ${percentage(totalMarks(90,100))}`)