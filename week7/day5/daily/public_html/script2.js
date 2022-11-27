const register=(event)=>{
    event.preventDefault();
    const fName=document.getElementById('fName').value;
    const lName=document.getElementById('lName').value;
    const email=document.getElementById('email').value;
    const userName=document.getElementById('uName').value;
    const password=document.getElementById('password').value;
    fetch('http://localhost:3002/register',{
        method:'POST' ,
        body: JSON.stringify({fName,lName,email,userName,password}),
        headers:{
            'content-type':'aplication/json'
        }
    })
    .then(res=>res.json())
    .then(data=>{
        const root =document.getElementById('root')
        root.textContent=data.msg;
    })
    .catch(err=>{
        console.log(err);
    })
}