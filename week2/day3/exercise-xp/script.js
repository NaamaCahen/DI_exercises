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

console.log('***************************');


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
console.log('***************************');



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

 console.log('***************************');



 //exercise4
 const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
//Console.log the number of floors in the building.
console.log(building['numberOfFloors']);
//Console.log how many apartments are on the floors 1 and 3.
console.log(`rhere are ${building['numberOfAptByFloor']['firstFloor']} aprtments on the first floor, and ${building['numberOfAptByFloor']['thirdFloor']}`);
//Console.log the name of the second tenant and the number of rooms he has in his apartment.
let second=building['nameOfTenants'][1]
console.log(second, building['numberOfRoomsAndRent'][second.toLowerCase()][0]);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let short=building['numberOfRoomsAndRent'];
if(short['sarah'][1]+short['david'][1]>short['dan'][1]){
    short['dan'][1]=1200;
}
console.log(short['dan'][1]);
console.log('***************************');



//exercise5
//Create an object called family with a few key value pairs.
let family={
    Fname:'Cahen',
    address:'Pinkas 15',
    numChildren:7

}
//Using a for in loop, console.log the keys of the object.
for(let key in family){
    console.log(key);
}
//Using a for in loop, console.log the values of the object.
for(let key in family){
    console.log(family[key]);
}

console.log('***************************');


//exercise6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
 //Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
 let sentence='';
 for(let key in details){
    sentence+= key+' '+details[key]+' ';
} 
console.log(sentence);

console.log('***************************');


//exercise7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
names=names.sort();
//Console.log the name of their secret society. The output should be “ABJKPS”
let society='';
for(let name of names){
    society+=name[0];
}
console.log(society);
