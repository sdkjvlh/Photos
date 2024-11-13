const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.innerHTML = `<span onclick="toggleComplete(this)">${taskText}</span>
                    <button class="delete" onclick="deleteTask(this)">x</button>`;
    
    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleComplete(taskElement) {
    taskElement.classList.toggle('completed');
}

function deleteTask(deleteButton) {
    deleteButton.parentElement.remove();
}