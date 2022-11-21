// Exercise 2 : HTTP & JSON
const http=require('http');
const server=http.createServer((req,res)=>{
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.end(JSON.stringify(user))
})
server.listen(8080,()=>console.log('I`m listening at 8080...'));