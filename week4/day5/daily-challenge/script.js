function isAnagram(string1,string2){
    const removeBlanks1=string1.replace(/\s/g,"");
    const removeBlanks2=string2.replace(/\s/g,"");
    const arrLetters1=[...removeBlanks1];
    const arrLetters2=[...removeBlanks2];
    return arrLetters1.sort().toString()===arrLetters2.sort().toString();
    
//     flag=true;
//     if(arrLetters1.length===arrLetters2.length){
//         arrLetters1.forEach((element,index)=>{
//             if(element!==arrLetters2[index]){
//                 flag=false;
//             }
//         })
//     }else{
//         flag=false;
//     }
// return flag;
}
console.log(isAnagram("aa bb","bb  a")); 