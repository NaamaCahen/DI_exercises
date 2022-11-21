// const bigNum=require("./main.js");
// const b = 5;
// console.log(bigNum.largeNumber+b);

// const http=require("http");
// const server = http.createServer( (req,res) => {
//     res.setHeader('Content-Type', 'text/html')
//     res.end(`<h1>my module</h1> <p>My Module is  ${bigNum.largeNumber}</p>`);
//  });
//  server.listen(3000,()=>{
//      console.log('I am listening....');
//  });
 
//part III
const main=require('./main.js');
const now=new Date(main.now);
console.log(now);
const http=require("http");
const server = http.createServer( (req,res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(` <p>the current date and time is:  ${now}</p>`);
 });
 server.listen(8080,()=>{
     console.log('I am listening at 8080....');
 });