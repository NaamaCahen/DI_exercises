
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne() //inside the funcOne function 3
// #1.2 What will happen if the variable is declared 
// with const instead of let ? error, you can't reassign a value to a const variable 

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() //inside the funcThree function 0
funcTwo()
funcThree() //inside the funcThree function 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?first will alert-inside the funcThree function 0- and after calling funcTwo()- error, you can't reassign a value to a const variable 



//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()//inside the funcFive function 5

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix() //alert(`inside the funcSix function test`);
// #4.2 What will happen if the variable is declared 
// with const instead of let ? it won't change anything because the a inside the function is a new declaration and not a re-assignment to the a in the global scope.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?it won't change anything because the a inside the if is a new declaration and not a re-assignment to the a in the global scope.