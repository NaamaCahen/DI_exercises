//exercise1
fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));
//converted to async await:
async function ex1(){
    const result= await fetch("https://www.swapi.tech/api/starships/9/");
    const obj=await result.json();
    console.log(obj.result);

}
ex1();

//exercise2
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');//calling
    let result = await resolveAfter2Seconds();//waits 2 seconds for the promise to fulfill
    console.log(result);//resolved
}

asyncCall();