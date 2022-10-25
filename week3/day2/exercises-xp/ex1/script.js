//Using a DOM property, retrieve the h1 and console.log it.
const h1=document.querySelector("h1");
console.log(h1);
//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2=document.querySelector("h2");
h2.addEventListener('click',changeColorH2);

function changeColorH2(event){
    event.target.style.backgroundColor='red';
}

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3=document.querySelector("h3");
h3.addEventListener('click',hideH3);

function hideH3(event){
    event.target.style.display='none';
}

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const btnBold=document.querySelector("button");
btnBold.addEventListener('click',boldText);

function boldText(){
    let paras=document.querySelectorAll('p');
    for (let p of paras) {
        p.style.fontWeight='bold';
    }
}

//BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1.addEventListener('mouseover',randomSize);

function randomSize(event){
    event.target.style.fontSize=`${Math.round(Math.random()*100)}px`;
}

//BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
const secondP=document.querySelector('p#second');
secondP.addEventListener('mouseover',fadeOut);
secondP.addEventListener('mouseout',fadeOut);

function fadeOut(event){
    event.target.classList.toggle('fade-out');
}