const checkboxes = document.querySelectorAll(".checkbox-btn");
const tasks = document.querySelectorAll(".task");
// console.log(checkboxes);
// console.log(tasks);


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