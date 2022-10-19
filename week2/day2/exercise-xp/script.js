//exercise1
let x=10;
let y=100;
if(x>y){
    console.log(`x is the biggest number`);
}
else if(y>x){
    console.log(`y is the biggest number`);
}
else{
    console.log(`x and y are equal!`);
}

//exercise2
// Create a variable called newDog where it’s value is “Chihuahua”.
let newDog="Chihuahua";
// Check and display how many letters are in newDog.
console.log(newDog.length);
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’
if(newDog.toLowerCase()==="chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed");
}
else{
    console.log("I dont care, I prefer cats");
}

// exercise3
// Prompt the user for a number and save it to a variable.
let num=prompt(`hey! give me a number please:`);
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
if(num%2===0){
    console.log(`${num} is an even number!`);
}
else if(num%2===1){
    console.log(`${num} is an odd number!`);
}

//exercise4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
switch (users.length) {
    case 0:
        console.log(`no one is online`);
        break;
    case 1:
        console.log(`${users[0]} is online`);
        break;
    case 2:
        console.log(`${users[0]} and ${users[1]} are online`);
        break;
   
    default:
        console.log(`${users[0]},${users[1]} and ${users.length-2} more are online`);
        break;
}