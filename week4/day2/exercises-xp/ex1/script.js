//ex1
const sum = (x, y) => x + y;


//🌟 Exercise 2 : Kg And Grams
function grToKg(kg) {
    return kg * 1000;
}
grToKg(5);

const grToKgEXp = function (kg) {
    return kg * 1000;
}
grToKgEXp(4);

const grToKgArrow = (kg) => kg * 1000;

//🌟 Exercise 3 : Fortune Teller
(function fortune(numberChildren, partnerName, geographicLocation, jobTitle) {
    const sentence = document.createElement("p");
    sentence.textContent = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberChildren} kids.`
    document.body.appendChild(sentence);
})(18, "NOAM", "israel", "veterinar");

//🌟 Exercise 4 : Welcome
(function welcome(user) {
    const userDiv = document.createElement("div");
    userDiv.textContent = "welcome" + user;
    document.querySelector("nav").appendChild(userDiv);
})("NAAMA")

//🌟 Exercise 5 : Juice Bar
function makeJuice(beverageSize) {
    const ingredients = [];
    function addIngredients(ingr1, ingr2, ingr3) {
        ingredients.push(ingr1, ingr2, ingr3);
        // const juice=document.createElement("p");
        // juice.textContent=`the client wants a ${beverageSize} juice, containing ${ingr1},${ingr2} and ${ingr3}.`;
        // document.body.appendChild(juice);
    }
    function displayJuice() {
        const juice = document.createElement("p");
        juice.textContent = `the client wants a ${beverageSize} juice, containing`;
        ingredients.forEach((element) => {
            const str=element;
            juice.textContent+=` ${str} `;
        });
        document.body.appendChild(juice);
    }
    addIngredients("apple", "tomato", "vanilla");
    addIngredients("cocoa", "kiwi", "orange");
    displayJuice();
}
makeJuice("medium");
