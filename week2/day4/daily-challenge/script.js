const promptInput = prompt("Enter comma separated words");
const words = promptInput.split(",");
//find the longest word
let max=0;
for(let i=0; i<words.length; i++){
    if(words[i].length>max) max=words[i].length;

}
console.log('*'.repeat(max+4));
for(word of words){
    console.log(`* ${word+' '.repeat(max-word.length)} *`);
}
console.log('*'.repeat(max+4));

