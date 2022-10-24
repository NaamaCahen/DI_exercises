//1.
const div=document.getElementById("container");
console.log(div);
//2.
document.body.children[1].lastElementChild.innerHTML='Richard';
//3.
const list=document.getElementsByClassName("list");
for(let i=0; i<list.length; i++){
    list[i].firstElementChild.innerHTML='Naama';
}
//4.
let names=document.getElementsByTagName("li");
for(li of names){
    if(li.innerHTML==='Sarah'){
        li.remove();
    }
}
