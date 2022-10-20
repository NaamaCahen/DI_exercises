// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.
let sentence="The cake is not that bad, I like it";

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot=sentence.indexOf("not");

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad=sentence.indexOf("bad");

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
let subs;
if(wordBad > wordNot && wordBad!== -1 && wordNot!== -1){
    subs = sentence.substring(wordNot,wordBad+3);
    sentence=sentence.replace(subs,"good");
}
//console.log the sentence anyway
console.log(sentence);
