let colorOfDiv;
let isMouseDown=false;
createColorBox();
function createColorBox() {
    const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',];
    const btnClear = document.getElementById("clear");
    btnClear.addEventListener('click', clearButton)
    for (let i = 0; i < 21; i++) {
        let divColor = document.createElement('div');
        divColor.style.background = colorArray[i];
        document.getElementById("left").appendChild(divColor);
        divColor.setAttribute('id', `${colorArray[i]}`);
        divColor.addEventListener('click', retrieveColor);
    }
    createGrid();
}

function retrieveColor(event) {
    // event.target.style.opacity=0.5;
    colorOfDiv = event.target.id;
}

function createGrid() {
    for (let i = 0; i < 2025; i++) {
        let divDraw = document.createElement("div");
        divDraw.setAttribute('class', 'blankDiv');
        document.getElementById("right").appendChild(divDraw);
        divDraw.addEventListener("mousedown",mouseDown);
         divDraw.addEventListener("mouseup",mouseUp);
        divDraw.addEventListener("mouseover",mouseOver);
       
    }
}


function mouseDown(event){
    event.target.style.background = colorOfDiv;
    isMouseDown=true;   
}

function mouseOver(event){
    if (isMouseDown){
        event.target.style.background = colorOfDiv;
    }
}

function mouseUp(event){
    isMouseDown=false;
}

function clearButton() {
    blankDivs = document.querySelectorAll(".blankDiv");
    for (const div of blankDivs) {
        div.style.backgroundColor = "white";
    }
    colorOfDiv="white";
}