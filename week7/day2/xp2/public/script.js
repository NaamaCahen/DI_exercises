async function getUsers(){
    try{
        const f=await fetch(`http://localhost:3000/users`);
    const obj=await f.json();
    console.log(obj);
    appendObject(obj); 
    }catch(e){
        console.log(e);
    }
   
}
function appendObject(obj){
    const p1=document.createElement("p");
    p1.textContent=`first name: ${obj.firstname}`;
    const p2=document.createElement("p");
    p2.textContent=`first name: ${obj.lastname}`;
    document.getElementById('root').append(p1,p2);
}
getUsers();