
function saveData() {
    const listContainer = document.querySelector('.todo-list-container')
    console.log(listContainer);
    // localStorage.setItem('data', listContainer.innerHTML);
}

function getData() {
    const listContainer = document.querySelector('.todo-list-container')
    // listContainer.innerHTML = localStorage.getItem('data');
    console.log(listContainer);
}


// function to get all the new checkboxes and delete buttons
function refresh() {
    const tasks = document.querySelectorAll(".task");
    const checkboxes = document.querySelectorAll(".checkbox-btn");

    // listening to checkboxes being clicked to complete task
    for (let i = 0; i < checkboxes.length; i++) {
        // adding event listener to each checkbox
        checkboxes[i].addEventListener('click', function (e) {
            e.stopPropagation();
            // console.log(i);
            // getting the task clicked based on index
            const task = tasks[i];
            // console.log(task);

            // checking if the checkbox is checked or not to add checked class to task
            if (checkboxes[i].checked) {
                task.classList = "task checked"
            } else {
                task.classList = "task";
            }
        })
    }
    // saveData();

}

// initializing and setting event handlers to checklist and delete buttons
// getData();
refresh();
deleteTask();

// This function adds a new div to the lsit container
function addTask() {
    // getting nodeLists
    const taskContainer = document.querySelector(".todo-list-container");
    const input = document.querySelector(".input");

    if (!input.value) {
        return;
    }

    // creating new div and setting attributes
    let taskDiv = document.createElement('div')
    taskDiv.setAttribute('class', 'individual-task');

    // adding the inner html of the div 
    taskDiv.innerHTML = `
    <input type="checkbox" class="checkbox-btn">
    <p class="task">${input.value}</p>
    <div class="buttons-group">
    <!-- <button class="btn edit-btn">EDIT</button> -->            
    <button class="btn delete-btn" onclick="deleteTask()">DELETE</button>
    `

    // appending to the selected div
    taskContainer.appendChild(taskDiv);
    input.value = ""

    // refreshing the page
    // saveData();
    refresh();
    deleteTask();
}

// funciton to delete task
function deleteTask() {
    // querying
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const tasks = document.querySelectorAll('.task');

    // adding event listeners
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function (e) {
            e.stopPropagation();
            let task = tasks[i];
            task.parentElement.remove();

        })
    }

    // saveData();
    refresh();
}