//🌟 Exercice 4 : Volume Of A Sphere

//V = ⁴⁄₃πr³
let btnCalc = document.forms[0].submit1;
btnCalc.addEventListener('click',volumeSphere)

function volumeSphere(event){
    event.preventDefault();
   let rad=Number(document.forms[0].radius.value) ;
   let volume = 4/3 * Math.PI * Math.pow(rad, 3);
   document.forms[0].volume.value=volume;
}