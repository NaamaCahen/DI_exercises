// 🌟 Exercise 5 : Colors #2
// Instructions
// Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
let ord = 0;
colors.forEach(function (element, index) {
    if (index < 3) {
        ord = index + 1;
    } else{
        ord=0;
    }
    console.log(`the ${index + 1}${ordinal[ord]} choice is ${element}`);
})

