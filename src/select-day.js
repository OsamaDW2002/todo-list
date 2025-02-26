import { deleteTask, loadTasks, saveTask, taskState} from "./memory-actions.js";
let dayText;
function clearDialog(){
    document.querySelectorAll('.task-item').forEach(el => el.remove())
}
function createTaskInput(day) {
    const taskContainer = document.getElementById('task-container');
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('task-item')
    const input = document.createElement('input');
    input.type = 'textArea';
    input.placeholder = 'Enter your task...';

    inputContainer.appendChild(input);
    taskContainer.appendChild(inputContainer);
    input.focus();

    function addTask() {
        if (input.value.trim() === '') {
            input.remove();
            return;
        }
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const deleteIcon = document.createElement('img');
        deleteIcon.src = "/assets/icons/delete.svg"
        deleteIcon.alt = "delete task item icon"
        deleteIcon.classList.add('delete-icon');
        const label = document.createElement('label');
        label.textContent = input.value;



        saveTask(day, input.value);
        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteIcon);
        taskContainer.appendChild(taskItem);


        input.remove();
        inputContainer.remove();
    }

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask();
    });

}


document.getElementById('calender-container').addEventListener('click', (event) => {
    const taskContainer = document.getElementById('task-container');
    const dayElement = event.target.closest('.dayNumber');
    if (dayElement) {
        dayText = dayElement.firstElementChild.textContent.trim();
        document.getElementById('dialog-header').textContent = `Tasks For Day ${dayText}`;
        document.getElementById('day-dialog').showModal();
        clearDialog();
        const retrieveData = loadTasks(dayText);
        retrieveData.tasks.forEach((el, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        if(retrieveData.completed[index]){
            checkbox.checked= true;
            label.classList.add('checked');
        }
        label.textContent = el;


        const deleteIcon = document.createElement('img');
        deleteIcon.src = "/assets/icons/delete.svg";
        deleteIcon.alt = "delete task item icon";
        deleteIcon.classList.add('delete-icon');


        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteIcon);
        taskContainer.appendChild(taskItem);
    })

    const addTaskButton = document.getElementById('add-task');
    const newButton = addTaskButton.cloneNode(true);
    addTaskButton.replaceWith(newButton);

    newButton.addEventListener('click', () => {
        console.log('Adding new task...');
        createTaskInput(dayText);
    });
    }
});
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-icon")) {
        const parentElement = event.target.closest(".task-item");
        if (parentElement) {
            const items = Array.from(document.querySelectorAll(".task-item"));
            const index = items.indexOf(parentElement);
            console.log(`Item index: ${index}`);
            deleteTask(dayText ,index);
            parentElement.remove();
        }
    }
});
document.addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
        const parentElement = event.target.closest(".task-item");
        if (parentElement) {
            const items = Array.from(document.querySelectorAll(".task-item"));
            const index = items.indexOf(parentElement);
            console.log(`Checked item index: ${index}, Checked: ${event.target.checked}`);

            const label = parentElement.querySelector("label");
            if (label) {
                if (event.target.checked) {
                    label.classList.add("checked");
                    taskState(dayText, index);
                } else {
                    label.classList.remove("checked");
                    taskState(dayText, index, false);
                }
            }
        }
    }
});



document.getElementById('close-dialog').addEventListener('click', () => {
    document.getElementById('day-dialog').close();
});

