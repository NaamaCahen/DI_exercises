//part I

setTimeout(helloWorld, 2000);
function helloWorld() {
    alert(`hello world!`)
}
//partII
//in your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">
setTimeout(helloWorld2, 1991);
function helloWorld2() {
    let pHW = document.createElement("p");
    pHW.textContent = 'Hello World!';
    document.getElementById("container").appendChild(pHW);
    if (document.querySelectorAll('p').length >= 5) {
        clearInterval(createP);
    }

}
//part III
//in your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
const createP = setInterval(helloWorld2, 2000);
document.getElementById('clear').addEventListener('click', clearMyInterval);
function clearMyInterval() {
    clearInterval(createP);
}

