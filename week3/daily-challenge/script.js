function addPlanets(){
//Create an array which value is the planets of the solar system.
const planets=['Mercury','Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus','Neptune'];
const colors=['yellow','red','green','blue','orange','purple','pink','lightblue'];
for (let i=0; i<planets.length; i++){
   let divPlanet= document.createElement('div');
   divPlanet.classList.add('planet');
  divPlanet.style.backgroundColor=`${colors[i]}`;
  document.querySelector('section').appendChild(divPlanet);
}
}

addPlanets();