

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const clockContatiner = document.querySelector(".js-clock"),
      clockTitle = clockContatiner.querySelector("h2");


function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const today = new Date();
  const dDay = xmasDay - today;

  const days = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dDay / (1000 * 60 * 60 * 24)) % 24);
  const minutes = Math.floor((dDay / (1000 * 60 * 60)) % 60);
  const seconds = Math.floor((dDay / 1000) % 60);

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

function init() {
    getTime();
  setInterval(getTime,1000);
}

init();
