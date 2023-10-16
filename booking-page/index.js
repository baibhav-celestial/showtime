// DOM elements
const dates = document.querySelector(".dates");

// Date variables
const currentDate = new Date();
const oneDayAhead = 24 * 60 * 60 * 1000;
const currentHour = Number(
  currentDate
    .toLocaleString("en-US", { hour: "numeric", hour12: true })
    .split(" ")[0]
);
const currentHour24 = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();

console.log(currentHour24);

const days = {
  1: "Sun",
  2: "Mon",
  3: "Tue",
  4: "Wed",
  5: "Thu",
  6: "Fri",
  7: "Sat",
};

const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const dateHtml = ` <div class="date">
FRI <br />
<span class="day"> 13 </span><br />
OCT
</div>`;

// Rendering Dates from today to next 7 days (today is highlighted by default)

dates.innerHTML = "";

for (let i = 0; i < 7; i++) {
  // ternary operator below
  const activeOrNot = i === 0 ? "active-date" : "";
  const date = new Date(Date.now() + oneDayAhead * i);

  const finalDateHtml = `<div class="date ${activeOrNot}">
            ${days[date.getDay() + 1]} <br />
            <span class="day"> ${date.getDate()} </span><br />
            ${months[date.getMonth() + 1]}
         </div>`;

  dates.insertAdjacentHTML("beforeEnd", finalDateHtml);
}

// Activating Dates (on click highlight)
const date = document.querySelectorAll(".date");

date.forEach((d) => {
  d.addEventListener("click", () => {
    const activatedDate = document.querySelector(".active-date");
    activatedDate.classList.remove("active-date");
    d.classList.add("active-date");
  });
});

// Rendering Timings for current day (not rendering elapsed time)

// const timeHtml = `<div class="timing">
// <p>8:15</p>
// </div>`;
// const movieTimings = ["8:15", "11:30", "14:40", "15:30", "20:00", "23:10"];
// const activeDate = document.querySelector(".active-date");
// const timings = document.querySelector(".timings");
// console.log(timings);

// if (
//   activeDate.textContent.trim().split(" ")[0] === days[currentDate.getDay() + 1]
// ) {
//   movieTimings.forEach((mt) => {
//     if (parseInt(`${currentHour24}:${currentMinutes}`) < parseInt(mt))
//       console.log(mt);
//   });
// }

// Activating Timings (on click highlight)
const timing = document.querySelectorAll(".timing");
const seatBtnSection = document.querySelector(".seat-btn-section");

timing.forEach((t) => {
  t.addEventListener("click", () => {
    seatBtnSection.classList.remove("hidden");
    const activatedTime = document.querySelector(".active-time");
    //short circuit operator below
    activatedTime && activatedTime.classList.remove("active-time");
    t.classList.add("active-time");
  });
});

// MODEL POPUP FOR SEAT QUANTITY
const seatBtn = document.querySelector(".seat-btn");
const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

seatBtn.addEventListener("click", (e) => {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Activating Seats Quantity (on click highlight)
const seat = document.querySelectorAll(".seat");

seat.forEach((s) => {
  s.addEventListener("click", () => {
    const activatedSeat = document.querySelector(".active-seat");
    activatedSeat.classList.remove("active-seat");
    s.classList.add("active-seat");
  });
});
