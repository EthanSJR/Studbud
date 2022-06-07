const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");
button.addEventListener("click", function(event) {
    event.preventDefault();
    let task = form.elements.task.value;
    let date = new Date().toLocaleDateString("en-US");
    // Call the addTask() function using
    addTask(task, date, "26/03/2021", "Low", [
        "1",
        "30"
    ], false);
    console.log(taskList);
});
// Create an empty array to store our tasks
var taskList = [];
function addTask(taskDescription, createdDate, dueDate, priorityRating, estimatedTime, completionStatus) {
    let task = {
        taskDescription,
        createdDate,
        dueDate,
        priorityRating,
        estimatedTime,
        completionStatus
    };
    taskList.push(task);
    renderTask(task);
}
function renderTask(task) {
    let item = document.createElement("li");
    item.innerHTML = "<p>" + task.taskDescription + "</p>";
    tasklist.appendChild(item);
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
    delButton.addEventListener("click", function(event) {
        item.remove();
    });
    form.reset();
}

//# sourceMappingURL=index.3d9cc09f.js.map
