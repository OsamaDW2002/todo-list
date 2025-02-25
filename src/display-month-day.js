import {loadTasks} from "./memory-actions.js";

export const displayAllDaysOfMonth = (monthName, year = new Date().getFullYear()) => {
    const calenderContainer = document.getElementById('calender-container');
    monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1).toLowerCase();
    if (!calenderContainer) {
        console.error("Calendar container not found!");
        return;
    }
     document.querySelectorAll('.dayNumber, .empty').forEach(el => el.remove());

    const months = {
        January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
        July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };

    if (!(monthName in months)) {
        console.error("Invalid month name!");
        return;
    }
    const monthIndex = months[monthName];
    const lastDay = new Date(year, monthIndex + 1, 0).getDate();
    const firstDayName = new Date(year, monthIndex , 1).getDay();
     for (let i = 0; i < firstDayName; i++) {
         const dayElement = document.createElement("div");
         dayElement.classList.add("empty");
         calenderContainer.appendChild(dayElement);
     }
    Array.from({ length: lastDay }, (_, i) => {
        const dayElement = document.createElement("div");
        dayElement.id = `${i + 1}`;
        dayElement.classList.add("dayNumber");
        dayElement.innerHTML = `<p>${dayElement.id}</p>`;

        const dayTaskList = document.createElement('div');
        dayTaskList.classList.add("day-tasks-container");

        const dayTasks = loadTasks(String((+i + 1)));
        if (dayTasks && Array.isArray(dayTasks.tasks)) {
            dayTasks.tasks.forEach(el => {
                const task = document.createElement('p');
                task.classList.add('task');
                task.textContent = el;
                dayTaskList.appendChild(task);
            });
        } else {
            console.error(`Invalid data format for day ${dayElement.id}:`, dayTasks);
        }

        dayElement.appendChild(dayTaskList);
        calenderContainer.appendChild(dayElement);
    });

};

