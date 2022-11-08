function makeAllCaps(arr){
    const myPromise=new Promise((resolve,reject)=>{
        let flag=true;
        arr.forEach((element)=>{if(typeof element!=='string'){
            flag=false;
        }})
        if(flag){
            const arrUp=[];
            arr.forEach((e,i)=>{
                arrUp[i]=e.toUpperCase();
             } )
            resolve(arrUp);
        }else{
            reject("not all the values of the array are strings!");
        }
    })
    return myPromise;
}

function sortWords(arrUpper){
    const myPromise2=new Promise((resolve,reject)=>{
        if(arrUpper.length>4){
            resolve(arrUpper.sort());
        }else{
            reject("the array is too short!");
        }
    })
    return myPromise2;
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))

      