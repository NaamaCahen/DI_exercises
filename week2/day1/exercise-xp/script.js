//exercise1
let favoriteFood="chocolate";
let favoriteMeal="lunch";
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

//exercise2
//part I
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength=myWatchedSeries.length;
let myWatchedSeriesSentence="black mirror, "+"money heist ,"+"the big bang theory"
console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);
//part II
myWatchedSeries[2]="friends";
myWatchedSeries.push("hamavdil");
myWatchedSeries.unshift("the best serie");
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);

//exercise 3
let celsius=20;
let fahrenheit=celsius/5*9+32;
console.log(`${celsius}'C is ${fahrenheit}'F `);

//exercise4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:it will output 55 because a and b contain numbers 21+34=55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:it will output 23 because 2+21=23
// Actual:23
//the value of c is - undefined
console.log(3 + 4 + '5');
//the answer is 75 beacause 3+4 are numbers and they are equal to 7 , and the 5 is a string so it is concatenated to the 7 ==>75

//exercise5
typeof(15)
// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:NaN
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction:boolean
// Actual:

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:hamburger
// Actual:NaN

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:-2
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:johnny5

"johnny" - 5
// Prediction:j
// Actual:NaN

99 * "hello"
// Prediction:"hellohellohellohellihello"ect..
// Actual:NaN

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction:true
// Actual:true

1 === "1"
// Prediction:false
// Actual:false


//exercise6
5 + "34"
// Prediction:534
// Actual:534

5 - "4"
// Prediction:NaN
// Actual:1

10 % 5
// Prediction:0
// Actual:0

5 % 10
// Prediction:0
// Actual:5

"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript

" " + " "
// Prediction:"  "
// Actual:'  '

" " + 0
// Prediction: 0
// Actual:' 0'

true + true
// Prediction:2 becase the value of true is 1 (and false=0)
// Actual:2

true + false
// Prediction:1
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:-1
// Actual:-1

!true
// Prediction:false
// Actual:false

3 - 4
// Prediction:-1
// Actual:-1

"Bob" - "bill"
// Prediction:NaN
// Actual:NaN
