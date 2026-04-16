let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar_dates");
const currdate = document.querySelector(".current_date");
const prenexIcons = document.querySelectorAll(".calendar_navigation svg");

const months = [
  "Jan", "Febr", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

let selectedDate = null;

const manipulate = () => {
  let dayone = new Date(year, month, 1).getDay();
  let lastdate = new Date(year, month + 1, 0).getDate();
  let dayend = new Date(year, month, lastdate).getDay();
  let monthlastdate = new Date(year, month, 0).getDate();

  let lit = "";

  for (let i = dayone; i > 0; i--) {
    lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
  }

  for (let i = 1; i <= lastdate; i++) {
    let isToday =
      i === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";

    let isSelected =
      selectedDate &&
      i === selectedDate.day &&
      month === selectedDate.month &&
      year === selectedDate.year
        ? "highlight"
        : "";

    lit += `<li class="${isToday} ${isSelected}" data-day="${i}">${i}</li>`;
  }

  for (let i = dayend; i < 6; i++) {
    lit += `<li class="inactive">${i - dayend + 1}</li>`;
  }

  currdate.innerText = `${months[month]} ${year}`;
  day.innerHTML = lit;

  addClickListenersToDays();
};

function addClickListenersToDays() {
  const allDays = day.querySelectorAll("li:not(.inactive)");

  allDays.forEach(li => {
    li.addEventListener("click", () => {
      selectedDate = {
        day: parseInt(li.getAttribute("data-day")),
        month: month,
        year: year
      };

      manipulate();
    });
  });
}

manipulate();

prenexIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    month = icon.id === "chevron-left" ? month - 1 : month + 1;

    if (month < 0 || month > 11) {
      date = new Date(year, month, 1);
      year = date.getFullYear();
      month = date.getMonth();
    }

    manipulate();
  });
});