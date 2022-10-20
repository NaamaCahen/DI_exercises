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




