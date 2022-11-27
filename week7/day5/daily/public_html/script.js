const login =(event)=>{
    event.preventDefault();
    const email=event.target.email.value;
    const password=event.target.password.value;
    fetch('/login',{
        method:'POST' ,
        body: JSON.stringify({email,password}),
        headers:{
            'content-type':'aplication/json'
        }
    })
    .then(res=>{
        console.log(res);
       return res.json()})
    .then(data=>{
        const root =document.getElementById('root')
        root.textContent=data.msg;
    })
    .catch(err=>{
        console.log(err);
    })
}

