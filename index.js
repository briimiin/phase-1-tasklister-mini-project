document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the task description from the input field
        const taskInput = document.getElementById("new-task-description");
        const taskDescription = taskInput.value;

        // Create a new list item for the task
        const taskItem = document.createElement("li");
        taskItem.textContent = taskDescription;

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    });
});
