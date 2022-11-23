//exercise1
const fs=require('fs');
fs.readFile('./file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

//exercise 2
fs.writeFile('./new.txt','bla bla bla ',(err)=>{
    if(err){
        console.log('error!!!',err);
    }

});
fs.appendFile('./new.txt','more bla bla',(err)=>{
    if(err){
        console.log('error!!!',err);
    }

});

fs.unlink('./new.txt',(err)=>{
    console.log(err);
})
