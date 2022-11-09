//challenge1
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]
Promise.all([promise1,promise2,promise3])
.then((result)=> console.log(result))


//challenge2
const form=document.querySelector("form");
form.addEventListener("submit",getSunRise) 

async function getSunRise(event){
    event.preventDefault();
    const [lat1,long1,lat2,long2]=[...form.elements].map((input)=>input.value);

    const city1= await fetch(`https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${long1}`);
    const city2= await fetch(`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${long2}`);

   const values=await Promise.all([city1,city2])
   values.forEach((response,i)=>{
    const obj=  response.json()
    .then(result=>{console.log(result.results.sunrise)
        const div=document.querySelector(`#city${i+1}`);
        div.textContent=result.results.sunrise;
    }
    );
   })
}

