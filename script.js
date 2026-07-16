const endDate = new Date("nov 25, 2026 00:00:00").getTime();

const interval = setInterval(() => {
  const currentDate = new Date(),
    timeLeft = endDate - currentDate.getTime(), // in ms
    daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    ).getDate();

  if (timeLeft <= 0) {
    clearInterval(x);
    return;
  }

  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000),
    minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
    hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    days = daysInMonth - currentDate.getDate(),
    months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * daysInMonth));

  // Get elements by class name
  let countdownElements = document.getElementsByClassName("countdown-element");

  // Loop through the elements and update their content
  for (const countdownElement of countdownElements) {
    let className = countdownElement.classList[1]; // Get the second class name
    switch (className) {
      case "months":
        countdownElement.innerHTML = months;
        break;
      case "days":
        countdownElement.innerHTML = days;
        break;
      case "hours":
        countdownElement.innerHTML = hours;
        break;
      case "minutes":
        countdownElement.innerHTML = minutes;
        break;
      case "seconds":
        countdownElement.innerHTML = seconds;
        break;
      default:
        break;
    }
  }
}, 1000);

const swiper = new Swiper(".progress-slide-carousel", {
  loop: true,
  fraction: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".progress-slide-carousel .swiper-pagination",
    type: "progressbar",
  },
});
