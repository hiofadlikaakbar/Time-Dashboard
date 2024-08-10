const btn = document.querySelectorAll("#btn");
const currentHours = document.querySelectorAll("#current");
const previousHours = document.querySelectorAll("#previous");

// daily data
function dailyData() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) =>
      currentHours.forEach((e, i) => {
        currentHours[i].textContent = ${data[i].timeframes.daily.current}hrs;
        previousHours[
          i
        ].textContent = Last week - ${data[i].timeframes.daily.previous}hrs;
      })
    );
}

// weekly data
function weeklyData() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) =>
      currentHours.forEach((e, i) => {
        currentHours[i].textContent = ${data[i].timeframes.weekly.current}hrs;
        previousHours[
          i
        ].textContent = Last week - ${data[i].timeframes.weekly.previous}hrs;
      })
    );
}

// monthly data
function monthlyData() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) =>
      currentHours.forEach((e, i) => {
        currentHours[
          i
        ].textContent = ${data[i].timeframes.monthly.current}hrs;
        previousHours[
          i
        ].textContent = Last week - ${data[i].timeframes.monthly.previous}hrs;
      })
    );
}

// active
btn.forEach((butt) => {
  butt.addEventListener("click", function (e) {
    e.preventDefault();
    btn.forEach((b) => b.classList.remove("text-white"));
    this.classList.add("text-white");
  });
});
