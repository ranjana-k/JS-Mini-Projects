let count = 0;
const notify = document.querySelector(".notify");
const notificationCount = document.querySelector(".notification-count");
notificationCount.innerText = count;

notify.addEventListener("click", () => {
  count = count + 1;
  console.log(count);
  notificationCount.innerText = count;
});

notificationCount.addEventListener("click", () => {
  count = 0;
  notificationCount.innerText = count;
});
