//exercise1
//PartI

const people = ["Greg", "Mary", "Devon", "James"];
// Write code to remove “Greg” from the people array.
people.shift();
// Write code to replace “James” to “Jason”.
people.splice(people.length - 1, 1, "Jason");
// Write code to add your name to the end of the people array.
people.push("Naama");
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
const people2 = people.slice(1, people.length - 1);
// Write code that gives the index of “Foo”. Why does it return -1 ?
let foo = people.indexOf("Foo");
console.log(foo);
// Create a variable called last which value is the last element of the array.
let last = people[people.length - 1]
console.log(last);

//PartII
// Using a loop, iterate through the people array and console.log each person.
for (const name of people) {
    console.log(name);
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for (let j of people) {
    console.log(j);
    if (j === "Jason") {
        break;
    }
}




//exercise2
// 	Create an array called colors where the value is a list of your five favorite colors.
let colors=["yellow","blue",'green','bordo','white'];
// 	Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for(let i=0; i<colors.length; i++){
    console.log(`my #${i+1} favorite color is: ${colors[i]}`);
}
// 	Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
const suffixes=['st','nd','rd','th','th'];
for(let i=0; i<colors.length; i++){
    console.log(`my ${i+1}${suffixes[i]} choice is: ${colors[i]}`);
}



//exercise3

// Prompt the user for a number.
 let num= prompt('please type a number');
 console.log(typeof num);
 //  While the number is smaller than 10 continue asking the user for a new number.
 //checking if it is a number
 while(num < 10 || isNaN(num)){
  
    num= prompt('please retype a number')
}
 console.log(num);




 //exercise4


