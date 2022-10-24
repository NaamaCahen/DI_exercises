//2.In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const divNav=document.querySelector('div');
divNav.setAttribute('id','socialNetworkNavigation');

//3.We are going to add a new <li> to the <ul>.
//1 First, create a new <li> tag (use the createElement method).
const newLi=document.createElement('li');
//2 Create a new text node with “Logout” as its specified text.
const logout=document.createTextNode('Logout');
//3 Append the text node to the newly created list node (<li>).
newLi.appendChild(logout);
//4 Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
document.querySelector('ul').appendChild(newLi);
