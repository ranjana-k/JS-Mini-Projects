//Model
const addCountSetter = (countAdd) => {
  notificationCount.setAttribute("data-count", countAdd + 1);
  if (countAdd === 0) {
    notificationCount.classList.add("add-numb");
  }
};

//View
let count = 0;
const notifyBtn = document.querySelector(".notify-btn");
const notificationCount = document.querySelector(".notification-count");

//Controller
notifyBtn.addEventListener("click", () => {
  let addCount = Number(notificationCount.getAttribute("data-count")) || count;
  addCountSetter(addCount);
});

//clearing the notification
notificationCount.addEventListener("click", () => {
  notificationCount.setAttribute("data-count", count);
  if (count === 0) {
    notificationCount.classList.remove("add-numb");
  }
});
