
document.getElementById('click').addEventListener('click',btnClick);
document.getElementById('mouseover').addEventListener('mouseover',btnMouseover);
document.getElementById('mouseout').addEventListener('mouseout',btnMouseout);
document.getElementById('dblclick').addEventListener('dblclick',btnDblClick);

function btnClick(){
    document.body.style.backgroundColor='yellow';
}

function btnMouseover(event){
    event.target.style.backgroundColor='red';
}

function btnMouseout(event){
    document.body.style.backgroundColor='pink';
}

function btnDblClick(event){
    document.body.style.backgroundColor='red';
}