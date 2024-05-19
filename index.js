let input = document.getElementsByClassName('input')[0]; // Get the first element
let listContainer = document.querySelector('.list-container'); // Get the ul element

document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

const addList = () => {
    if (input.value === '') {
        alert("Input is empty");
    } else {
        let task = input.value;
        addTaskToDOM(task);
        saveTask(task);
        input.value = ''; // Clear the input field after adding
    }
};

const addTaskToDOM = (task) => {
    let li = document.createElement('li');
    li.innerHTML = `<p>${task}</p><i class="fa-solid fa-x" onclick="removeListItem(this)"></i>`;
    listContainer.appendChild(li);
};

const saveTask = (task) => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasks = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
};

const removeListItem = (item) => {
    let li = item.parentElement;
    let task = li.querySelector('p').innerText;
    removeTask(task);
    listContainer.removeChild(li);
};

const removeTask = (task) => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};