// DOM references
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskContainer = document.getElementById("taskContainer");

// Event listener for form submission
taskForm.addEventListener("submit", function(e) {
  e.preventDefault();
  // TODO: Add logic to create a new task element and append to DOM
});

// Function to add a task
function addTask(taskText) {
  // TODO: Create <li> element with taskText
  // TODO: Add "Complete" and "Delete" buttons
  // TODO: Append to taskContainer
}

// Function to mark task as complete
function completeTask(taskElement) {
  // TODO: Toggle "completed" class
}

// Function to delete task
function deleteTask(taskElement) {
  // TODO: Remove taskElement from DOM
}

// Function to save tasks to localStorage
function saveTasks() {
  // TODO: Serialize tasks and save
}

// Function to load tasks from localStorage
function loadTasks() {
  // TODO: Retrieve tasks and render
}

// Initialize app
window.onload = function() {
  loadTasks();
};
