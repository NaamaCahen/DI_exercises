const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.listen(4000,()=>{
    console.log('run on port 4000');
})

app.get('/api/hello',(req,res)=>{
    res.json('<h1>Hello from express</h1>');
})