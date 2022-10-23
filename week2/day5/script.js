function bottlesOfBeer() {
    //Prompt the user for a number to begin counting down bottles.
    let numBottles = +prompt(`enter the number of bottles to start:`);
    //the first 
    console.log(`${numBottles} bottles of beer on the wall \n${numBottles} bottles of beer \ntake _1_ down, pass it around`);
    numBottles--;
    console.log(`${numBottles} bottles of beer on the wall`);
    for (let i = 2; numBottles > 0; i++) {
        console.log(`${numBottles} bottles of beer on the wall \n${numBottles} bottles of beer \ntake _${i}_ down, pass them around`);
        numBottles -= i;
        if (numBottles > 0) {
            console.log(`${numBottles} bottles of beer on the wall`);
        } else {
            console.log(`no bottle of beer on the wall`);
        }
    }
}