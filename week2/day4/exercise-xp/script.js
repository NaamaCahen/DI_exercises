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
    if(bill<50)
    {
        tip=bill*0.2;
    }
    else if(bill>=50 && bill<200){
        tip=bill*0.15;
    }else if (bill>=200){
        tip=bill*0.1;
    }
    //Console.log the tip amount and the final bill (bill + tip).
    console.log(`the tip amount is ${tip}$ and the final bill is ${(Number(bill))+tip}`);

}
//Call the calculateTip() function.
calculateTip();
