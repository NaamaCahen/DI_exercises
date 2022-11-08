//ex1
function compareToTen(num){
    const myPromise=new Promise((resolve,reject)=>{
        if(num<10){
            resolve(num+" less than 10");
        }else{
            reject(num+" bigger than ten");
        }
       
    })
   return myPromise; 
} 

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))


//ex2
function ex2(){
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("SUCCESS");
        reject("FAILED");
    },4000)
})
return promise2;
}
ex2().then(result => console.log(result)).catch(result => console.log(result));

Promise.resolve("success").then(result=>console.log(result));
