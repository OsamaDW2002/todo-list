 const displayAllDaysOfMonth = (monthName, year = new Date().getFullYear()) => {
    const calenderContainer = document.getElementById('calender-container');
    monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1).toLowerCase();
    if (!calenderContainer) {
        console.error("Calendar container not found!");
        return;
    }

    const months = {
        January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
        July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };

    if (!(monthName in months)) {
        console.error("Invalid month name!");
        return;
    }
    const monthIndex = months[monthName];
    const lastDay = new Date(year, monthIndex + 1, 0).getDate(); // Get last day of month

    Array.from({ length: lastDay }, (_, i) => {
        const dayElement = document.createElement("div");
        dayElement.className = "dayNumber";
        dayElement.innerHTML = `<p>${i + 1}</p>`;
        calenderContainer.appendChild(dayElement);
    });
};
displayAllDaysOfMonth('juNe');
