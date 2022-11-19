const tasksArr = [];
class Task {
    constructor(name, description, start, end, isCompleted) {
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
        this.isCompleted = isCompleted;
    }
    addToArr() {
        tasksArr.push(this);
        localStorage.setItem("tasks", JSON.stringify(tasksArr))

    }
}

document.forms.newTask.addEventListener("submit",addNewTask);
function addNewTask(event){
    event.preventDefault();
    const elements=event.target.elements;
    console.log(elements);
    const task=new Task(elements.myName.value,elements.description.value,elements.startDate.value,elements.endDate.value,false);
    task.addToArr();
}

