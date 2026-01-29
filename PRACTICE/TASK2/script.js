const List = document.querySelector("#taskList");
const inputTask = document.querySelector("#inputTask");
const btn = document.querySelector("button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  List.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `<span>${task}</span>
                        <div class="actions">
                          <button onclick="editTask(${index})">Edit</button>
                          <button onclick="deleteTask(${index})">Delete</button>
                        </div>`;
    List.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//add task
function addTask() {
  let task = inputTask.value.trim();

  if (task === "") return alert("Enter a task!");

  tasks.push(task);
  inputTask.value = "";
  renderTasks();
}

//edit task
function editTask(index) {
  let editedTask = prompt("enter your task");
  if (editedTask !== null && editedTask.trim() !== "")
    tasks[index] = editedTask;
  renderTasks();
}

//delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();