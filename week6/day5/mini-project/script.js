const tasksArr =JSON.parse(localStorage.getItem("tasks"))  || [];
document.forms.newTask.addEventListener("submit", addNewTask);

class Task {
    constructor(name, description, start, end, isCompleted) {
        this.name = name;
        this.description = description;
        this.start =new Date(start) ;
        this.end = end;
        this.isCompleted = isCompleted;
    }
    addToArr() {
        tasksArr.push(this);
        localStorage.setItem("tasks", JSON.stringify(tasksArr))

    }
}

function addNewTask(event) {
    event.preventDefault();
    const elements = event.target.elements;
    console.log(elements);
    const task = new Task(elements.myName.value, elements.description.value, elements.startDate.valueAsNumber, elements.endDate.valueAsNumber, false);
    task.addToArr();
    window.open("displayTask.html","_parent");

}

//  localStorage.clear();
