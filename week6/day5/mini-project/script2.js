(function displayTasks() {
    JSON.parse(localStorage.getItem("tasks")).sort((a, b)=> a-b).forEach(element => {
        const card = document.createElement("div");
        const pName = document.createElement("p");
        const startDate = document.createElement("p");
        const daysLeft = document.createElement("p");
        pName.textContent = element.name;
        startDate.textContent =`starting date: ${element.start}`;
        daysLeft.textContent =`days left: ${(Math.round((element.end-Date.now())/1000/60/60/24))}`;
        card.classList.add("task");
        const dropDown=document.createElement("p");
            dropDown.textContent=element.description;
            dropDown.classList.add("hide");
            pName.appendChild(dropDown);
        card.addEventListener("click",()=>{
            
            dropDown.classList.toggle("show");
            
            
        })
        card.append(pName, startDate, daysLeft);
        document.body.appendChild(card);
        
    })
})()

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }