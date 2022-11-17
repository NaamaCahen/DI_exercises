// const urls = [
//     'https://www.swapi.tech/api/people/1',
//     'https://www.swapi.tech/api/people/2',
//     'https://www.swapi.tech/api/people/3',
//     'https://www.swapi.tech/api/people/4'
//   ];
//   Promise.all()
//   const promise=new Promise((resolve,reject)=>{

//   })  
let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

sequentialStart()