//exercise1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
fruits.sort();
fruits.push("kiwi");
fruits.splice(0,1);
fruits.reverse();
console.log(fruits);


//exercise2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1]);