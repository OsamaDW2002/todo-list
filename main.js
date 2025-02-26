import {displayAllDaysOfMonth} from "./src/js/display-month-day.js";
import {changeMonth} from "./src/js/months-swiper.js";
import {monthNumber, setMonthNumber} from "./src/js/monthState.js";

document.addEventListener("DOMContentLoaded", () => {
    displayAllDaysOfMonth(new Date().toLocaleString('en-US', { month: 'long' }));
    changeMonth(new Date().toLocaleString('en-US', { month: 'short' }));
    setMonthNumber(new Date().getMonth())
});

document.querySelector("#app").innerHTML = `
  <main>
    <div id="calender-months">
        <img src="/assets/icons/arrow-right.svg" alt="arrow next month in the calender">
        <p>Jan</p>
        <img src="/assets/icons/arrow-left.svg" alt="arrow previous month in the calender">
    </div>
    <div id="calender-container">
        <div class="dayName"><p>Sunday</p></div>
        <div class="dayName"><p>Monday</p></div>
        <div class="dayName"><p>Tuesday</p></div>
        <div class="dayName"><p>Wednesday</p></div>
        <div class="dayName"><p>Thursday</p></div>
        <div class="dayName"><p>Friday</p></div>
        <div class="dayName"><p>Saturday</p></div>
    </div>
    <dialog id="day-dialog">
        <div>
            <p id="dialog-header">Recent Tasks</p>
            <img src="/assets/icons/add.svg" alt="add new task" id="add-task">
            <img src="/assets/icons/close.svg" alt="close dialog button" id="close-dialog"/>
        </div>
        <div id="task-container">
            
        </div>
    </dialog>
  </main>
`;


