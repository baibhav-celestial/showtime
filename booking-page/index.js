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

const currentMinutes = currentDate.getMinutes();

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

// Rendering Dates from today to next 7 days logic (today is highlighted by default)

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

// Activating Timings (on click highlight)
const timing = document.querySelectorAll(".timing");
const seatBtn = document.querySelector(".seat-btn-section");

timing.forEach((t) => {
  t.addEventListener("click", () => {
    seatBtn.classList.remove("hidden");
    const activatedTime = document.querySelector(".active-time");
    //short circuit operator below
    activatedTime && activatedTime.classList.remove("active-time");
    t.classList.add("active-time");
  });
});

//TESTING CODE
// Settle timings for current day
// const activeDate = document.querySelector(".active-date");
// const times = document.querySelectorAll(".timing p");

// console.log(activeDate.textContent.trim().split(" ")[0]);
// // console.log(days[currentDate.getDay() + 1]);
// console.log(
//   activeDate.textContent.trim().split(" ")[0] === days[currentDate.getDay() + 1]
// );

// if (
//   activeDate.textContent.trim().split(" ")[0] === days[currentDate.getDay() + 1]
// ) {
//   const currentHour = currentDate.getHours();
//   const currentMinutes = currentDate.getMinutes();
//   console.log(`${currentHour}:${currentMinutes}`);

//   times.forEach((p) => {
//     if (
//       parseInt(`${currentHour}:${currentMinutes}`) >
//       parseInt(p.innerHTML.split(" ")[0])
//     )
//       console.log(p.innerHTML.split(" ")[0]);
//   });
// }
