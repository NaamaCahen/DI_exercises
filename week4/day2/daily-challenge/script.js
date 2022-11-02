let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        payed: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach((fruit) => console.log(fruit));
}
displayGroceries();

const cloneGroceries = () => {
    const user = client;
    console.log(user);
    const shopping = groceries;
    client = "Betty"; //wont change the user -pass by value
    groceries.totalPrice = "35$" //will change shopping- pass by reference
    groceries.other.payed = false;//will affect shopping
}
cloneGroceries();
