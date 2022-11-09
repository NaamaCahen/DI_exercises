function makeAllCaps(arr) {
    const myPromise = new Promise((resolve, reject) => {
        let flag = true;
        arr.forEach((element) => {
            if (typeof element !== 'string') {
                flag = false;
            }
        })
        if (flag) {
            const arrUp = [];
            arr.forEach((e, i) => {
                arrUp[i] = e.toUpperCase();
            })
            resolve(arrUp);
        } else {
            reject("not all the values of the array are strings!");
        }
    })
    return myPromise;
}

function sortWords(arrUpper) {
    const myPromise2 = new Promise((resolve, reject) => {
        if (arrUpper.length > 4) {
            resolve(arrUpper.sort());
        } else {
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

//2nd challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
function toJs(morseJson) {
    const promise = new Promise((resolve, reject) => {
        if (morseJson === undefined) {
            reject("json undefined");
        } else {
            const morseObj = JSON.parse(morseJson);
            resolve(morseObj)
        }
    })
    return promise;
}

function ToMorse(morseObj) {
    const word = prompt(`please type a word`);
    const arrChars = [...word];
    const arrMorse = [];
    const myPromise = new Promise((resolve, reject) => {
        arrChars.forEach((char) => {
            if (morseObj[char] !== undefined) {
                arrMorse.push(morseObj[char])
            } else {
                reject("the char doesnt exist in the morse code");
                // return myPromise;
            }
        })
        resolve(arrMorse);
    })
    return myPromise;
}

function joinWords(morseTranslation) {
    morseTranslation.forEach((word) => {
        const p = document.createElement("p");
        p.textContent = word;
        document
            .body.appendChild(p);
    })
}
toJs(morse)
    .then((result) => ToMorse(result))
    .then((result) =>{console.log(result);
        joinWords(result);} )
    .catch(console.log)
