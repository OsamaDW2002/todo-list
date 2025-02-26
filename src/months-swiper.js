import {displayAllDaysOfMonth} from "./display-month-day.js";
import {setMonthNumber} from "./monthState.js";

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const monthMap = {
    "Jan": "January", "Feb": "February", "Mar": "March", "Apr": "April",
    "May": "May", "Jun": "June", "Jul": "July", "Aug": "August",
    "Sep": "September", "Oct": "October", "Nov": "November", "Dec": "December"
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('calender-months')
        .getElementsByTagName("img")[0].onclick = () => {

        const currentMonthText = document.getElementById('calender-months')
            .getElementsByTagName("p")[0].textContent;

        const newMonthIndex = (months.indexOf(currentMonthText) + 1) % 12;
        setMonthNumber(newMonthIndex);

        const monthNameAb = months[newMonthIndex];
        changeMonth(monthNameAb);
        displayAllDaysOfMonth(monthMap[monthNameAb]);
    };

    document.getElementById('calender-months')
        .getElementsByTagName("img")[1].onclick = () => {

        const currentMonthText = document.getElementById('calender-months')
            .getElementsByTagName("p")[0].textContent;

        const newMonthIndex = (months.indexOf(currentMonthText) - 1 + 12) % 12;
        setMonthNumber(newMonthIndex);

        const monthNameAb = months[newMonthIndex];
        changeMonth(monthNameAb);
        displayAllDaysOfMonth(monthMap[monthNameAb]);
    };

});

export function changeMonth(month){
    const calenderContainerMonths = document.getElementById('calender-months');

    calenderContainerMonths.getElementsByTagName("p")[0].innerHTML = month;

}
