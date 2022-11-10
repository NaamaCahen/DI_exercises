(async function fetchOptions(){
    const options=await fetch(`https://v6.exchangerate-api.com/v6/b686183d16f0afdec1fc52b9/codes`) 
    const obj=await options.json();
    const arrCodes=obj.supported_codes;
    arrCodes.forEach((code)=>{
        const option=document.createElement("option");
        option.textContent=[...code];
        document.getElementById("from").appendChild(option);
        const option2=document.createElement("option");
        option2.textContent=[...code];
        document.getElementById("to").appendChild(option2);
    })
})()


document.querySelector("form").addEventListener("submit",convert);

async function convert(event){
    event.preventDefault();
    const base=document.getElementById("from").value.substring(0,3);
    const target=document.getElementById("to").value.substring(0,3);
    const amount=document.getElementById("amount").value;
    const convert= await fetch(`https://v6.exchangerate-api.com/v6/b686183d16f0afdec1fc52b9/pair/${base}/${target}/${amount}`);
    const objConvert=await convert.json();
    document.getElementById("result").value=objConvert.conversion_result;
}