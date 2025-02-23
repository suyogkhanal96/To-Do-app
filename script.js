
const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");
const list = document.getElementById("list");

let myTask = JSON.parse(localStorage.getItem("myTask")) || [];

renderTask();

addBtn.addEventListener("click", () => {
    const taskValue = inputBox.value.trim();
    if (taskValue !== "") {
        myTask.push({ text: taskValue, done: false });
        updateLocalStorage();
        renderTask();
        inputBox.value = "";
    } else {
        alert("Please enter a task");
    }
});

function renderTask() {
    list.innerHTML = "";
    myTask.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.done ? 'done' : ''}">${index + 1}. ${task.text}</span>
            <button class="done-btn" onclick="markDone(${index})">✔</button>
            <button class="delete-btn" onclick="removeTask(${index})">✖</button>
        `;
        list.appendChild(li);
    });
}

function markDone(index) {
    myTask[index].done = !myTask[index].done; 
    updateLocalStorage();
    renderTask();
}

function removeTask(index) {
    myTask.splice(index, 1); 
    updateLocalStorage();
    renderTask();
}

deleteBtn.addEventListener("click", () => {
    localStorage.removeItem("myTask");
    myTask = [];
    renderTask();
});

function updateLocalStorage() {
    localStorage.setItem("myTask", JSON.stringify(myTask));
}
