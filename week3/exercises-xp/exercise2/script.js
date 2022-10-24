//2.Add a “light blue” background color and some padding to the <div>.
const div1=document.querySelector('div');
div1.style.backgroundColor='lightblue';
//3.Do not display the <li> that contains the text node “John”.
let liJohn = document.querySelector("li:first-child");
liJohn.style.display='none';
//4.Add a border to the <li> that contains the text node “Pete”.
const liPete=document.querySelector("li:nth-child(2)");
liPete.style.border='5px solid red';
//5.Change the font size of the whole body.
document.body.style.fontSize='2em';


//Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
function alertIfBlue(){
if(div1.style.backgroundColor==='lightblue'){
    alert(`hello ${liJohn.innerHTML} and ${liPete.innerHTML}`)
}
}