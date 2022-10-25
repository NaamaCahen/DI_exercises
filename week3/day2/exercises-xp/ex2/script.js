//🌟 Exercise 2 : Work With Forms
//Retrieve the form and console.log it.
const form1 = document.forms[0];
console.log(form1);
//Retrieve the inputs by their id and console.log them.
let inputFname = document.getElementById('fname');
console.log(inputFname);
let inputLname = document.getElementById('lname');
console.log(inputLname);
let inputSubmit = document.getElementById('submit');
console.log(inputSubmit);
//Retrieve the inputs by their name attribute and console.log them.
inputFname = document.forms[0].fname;
console.log(inputFname);
inputLname = document.getElementsByName('lname')[0];
console.log(inputLname);
inputSubmit = document.forms[0].submit;
console.log(inputSubmit);
//When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
inputSubmit.addEventListener('click', mySubmit);

function mySubmit(event) {
    event.preventDefault();
    let valueFname = inputFname.value;
    let valueLname = inputLname.value;

    if (valueFname !== '' && valueLname !== '') {
        const li1 = document.createElement('li');
        const li1Text = document.createTextNode(valueFname);
        li1.appendChild(li1Text);
        const li2 = document.createElement('li');
        const li2Text = document.createTextNode(valueLname);
        li2.appendChild(li2Text);
        const ul=document.querySelector('ul');
        ul.appendChild(li1);
        ul.appendChild(li2);
    }
}