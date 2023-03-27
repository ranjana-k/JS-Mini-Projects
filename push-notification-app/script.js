//Model
const countInc = () => {
  count = count + 1;
  return display();
};

const display = () => {
  notificationCount.innerText = count;
};

//View
let count = 0;
const notify = document.querySelector(".notify");
const notificationCount = document.querySelector(".notification-count");
display();

//Controller
notify.addEventListener("click", () => {
  return countInc();
});

notificationCount.addEventListener("click", () => {
  count = 0;
  return display();
});
