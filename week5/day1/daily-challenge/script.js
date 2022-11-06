// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:
document.querySelector("button").addEventListener("click",appendJson);
function appendJson(event){
    event.preventDefault();
    const formObj={
        fname: document.querySelector("#fname").value,
        lname: document.querySelector("#lname").value
    }
    const stringObj=JSON.stringify(formObj,null,2);
    const div=document.createElement("div");
    div.textContent=stringObj;
    document.body.appendChild(div);
}
