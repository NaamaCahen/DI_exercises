const bigNum=require("./main.js");
const b = 5;
console.log(bigNum.largeNumber+b);

const http=require("http");
const server = http.createServer( (req,res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h1>my module</h1> <p>My Module is  ${bigNum.largeNumber}</p>`);
 });
 server.listen(3000,()=>{
     console.log('I am listening....');
 });
 
