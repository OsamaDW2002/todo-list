import {monthNumber} from "./monthState.js";

function saveTask(day, task) {
    const storageKey = day + monthNumber;
    let data = JSON.parse(localStorage.getItem(storageKey)) || { tasks: [], notes: "", completed: [] };

    data.tasks.push(task);
    data.completed.push(false);

    localStorage.setItem(storageKey, JSON.stringify(data));
}

function loadTasks(day) {
    const storageKey = day + monthNumber;
    const data = JSON.parse(localStorage.getItem(storageKey)) || { tasks: [], notes: "", completed: [] };

    // console.log("Tasks:", data.tasks);
    // console.log("Notes:", data.notes);
    // console.log("Completed:", data.completed);
    return data;
}



function taskState(day, taskIndex, complete= true) {
    const storageKey = day + monthNumber;
    let data = JSON.parse(localStorage.getItem(storageKey)) || { tasks: [], notes: "", completed: [] };

    if (data.completed[taskIndex] !== undefined) {
        data.completed[taskIndex] = complete;
    }

    localStorage.setItem(storageKey, JSON.stringify(data));
}

function deleteTask(day, taskIndex) {
    const storageKey = day + monthNumber;
    let data = JSON.parse(localStorage.getItem(storageKey)) || { tasks: [], notes: "", completed: [] };

    data.tasks.splice(taskIndex, 1);
    data.completed.splice(taskIndex, 1);

    localStorage.setItem(storageKey, JSON.stringify(data));
}

export {taskState, saveTask, loadTasks, deleteTask}