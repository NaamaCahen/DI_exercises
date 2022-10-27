const tasks = [];
document.querySelector("button").addEventListener("click",addTask)

function addTask(event){
    event.preventDefault();
    console.log("it works!");
    let input1=document.forms[0].firstInput;
    if(input1!==""){
        let newTask=document.createElement("div");
        newTask.classList.add("newTask")
        let btnX=document.createElement("button");
        btnX.classList.add("buttonX")
        let newInput=document.createElement("input");
        newInput.classList.add("newInput");
        newInput.textContent=input1.value;
        newTask.append(btnX,newInput);
        document.querySelector(".listTasks").appendChild(newTask);
    }
}

