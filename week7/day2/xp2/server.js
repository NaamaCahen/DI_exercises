const express=require('express');
const app=express();
app.get('/users',(req,res)=>{
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.json(user);
})
app.listen(3000,()=>console.log(`listening at 3000..`));
console.log(__dirname);
app.use('/',express.static(__dirname+'/public'));

//ex2
app.get('/users/:id',(req,res)=>{
    const {id}=req.params;
    const userId={id:id};
    res.json(userId);
    console.log(userId);
})