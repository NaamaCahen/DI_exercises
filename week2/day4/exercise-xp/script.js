//exercise1
//PartI
//Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
function infoAboutMe() {
    console.log(`my name is naama cahen, I am 19 years old`);
}
// Call the function.
infoAboutMe();

//PartII
//Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`your name is ${personName} , you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
}
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


//exercise2
//Create a function named calculateTip() that takes no parameter.
function calculateTip() {
    // Inside the function, use prompt to ask John for the amount of the bill.
    let bill = prompt(`what's the amount of the bill?`);
    //     If the bill is less than $50, tip 20%.
    // If the bill is between $50 and $200, tip 15%.
    // If the bill is more than $200, tip 10%.
    let tip;
    if (bill < 50) {
        tip = bill * 0.2;
    }
    else if (bill >= 50 && bill < 200) {
        tip = bill * 0.15;
    } else if (bill >= 200) {
        tip = bill * 0.1;
    }
    //Console.log the tip amount and the final bill (bill + tip).
    console.log(`the tip amount is ${tip}$ and the final bill is ${(Number(bill)) + tip}`);

}
//Call the calculateTip() function.
calculateTip();



//exercise3
//Create a function call isDivisible() that takes no parameter.
function isDivisible(divisor) {
    let sum = 0;
    // In the function, loop through numbers 0 to 500.
    for (let i = 0; i <= 500; i++)
        // Console.log all the numbers divisible by 23.
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    // At the end, console.log the sum of all numbers that are divisible by 23.
    console.log(sum);
}
//Bonus: Add a parameter divisor to the function.



//exercise4
//Add the stock and prices objects to your js file.
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ['banana', 'orange', 'apple'];
//Create a function called myBill() that takes no parameters.
//     The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. 
// If the item is in stock find out the price in the prices object.
function myBill() {
    let sum=0;
    for (fruit of shoppingList) {
        if(stock[fruit]>0){
            sum+=prices[fruit];
            stock[fruit]--;//Bonus: If the item is in stock, decrease the item’s stock by 1

        }
    }
    console.log('you have to pay:'+sum);
}
// Call the myBill() function.
myBill();





