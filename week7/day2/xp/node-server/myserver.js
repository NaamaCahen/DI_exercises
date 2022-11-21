//ex1
const http=require('http');
const server=http.createServer((req,res)=>{
    res.end('<h1>this is my first response</h1> <h2>this is my second response</h2> <h3>this is my third response</h3>');
})
server.listen(3000,()=>{
    console.log('server listening at 3000...');
})


