const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors());
// app.use('/',express.static(__dirname));
app.set('view engine','ejs')

app.listen(5500,()=>{
    console.log('listening on 5500...');
})
app.get('/index',(req,res)=>{
    res.render('/index.ejs')
})
app.get('/list.ejs',(req,res)=>{
    res.render('/list.ejs')
})