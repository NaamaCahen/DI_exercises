document.getElementById("find").addEventListener("click", findCharachter)
displayNone();
async function findCharachter() {
    try {
        displayLoading();
        const randomOne = await fetch(`https://www.swapi.tech/api/people/${Math.floor(Math.random() * 90)}`);
        hideLoading();
        if (randomOne.status !== 200) {
            throw new Error("charachter not found");
        } else {
            const obj = await randomOne.json();
            document.getElementById("name").textContent = obj.result.properties.name;
            displayBlock();
            document.querySelector("#height>span").textContent = obj.result.properties.height;
            document.querySelector("#gender>span").textContent = obj.result.properties.gender;
            document.querySelector("#birth>span").textContent = obj.result.properties.birth_year;
            const home = await fetch(obj.result.properties.homeworld);
            const homeObj = await home.json();
            document.querySelector("#home>span").textContent = homeObj.result.properties.name;

        }
    }
    catch{ 
        document.getElementById("name").textContent = "Oh No! That person isnt available."
        displayNone();
      
    }
}
function displayNone(){
    document.querySelector("#height").style.display = "none";
    document.querySelector("#gender").style.display = "none";
    document.querySelector("#birth").style.display = "none";
    document.querySelector("#home").style.display = "none";
}
function displayBlock(){
    document.querySelector("#height").style.display = "block";
    document.querySelector("#gender").style.display = "block";
    document.querySelector("#birth").style.display = "block";
    document.querySelector("#home").style.display = "block";
}
function displayLoading(){
    document.getElementById("loading").style.display="block";
    document.getElementById("name").style.display='none';
    displayNone();
}
function hideLoading(){
    document.getElementById("loading").style.display="none";
    document.getElementById("name").style.display='block';

}