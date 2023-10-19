const seatNum = document.querySelectorAll(".seat-num:not(.sold)");
const payment = document.querySelector(".pay");
console.log(payment);

const ticketsQuantity = [1, 2, 3];

seatNum.forEach((sn, i) => {
  sn.addEventListener("click", () => {
    payment.classList.remove("hidden");
    const activatedSeats = document.querySelectorAll(".active-seat");

    activatedSeats &&
      activatedSeats.forEach((as) => {
        as.classList.remove("active-seat");
      });

    ticketsQuantity.forEach((tq) => {
      seatNum[i + tq - 1].classList.add("active-seat");
    });
  });
});
