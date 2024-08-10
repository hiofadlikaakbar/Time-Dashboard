const btn = document.querySelectorAll("#btn");
const currentHours = document.querySelectorAll("#current");
const previousHours = document.querySelectorAll("#previous");

function updateData(timeframe) {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      currentHours.forEach((e, i) => {
        currentHours[i].textContent = `${data[i].timeframes[timeframe].current}hrs`;
        previousHours[i].textContent = `Last week - ${data[i].timeframes[timeframe].previous}hrs`;
      });
    });
}

// Adding event listeners to each button for the respective timeframe
btn.forEach((butt) => {
  butt.addEventListener("click", function (e) {
    e.preventDefault();
    btn.forEach((b) => b.classList.remove("text-white"));
    this.classList.add("text-white");

    const timeframe = this.getAttribute("data-timeframe");
    updateData(timeframe);
  });
});
