const btn = document.querySelectorAll("#btn");
const currentHours = document.querySelectorAll("#current");
const previousHours = document.querySelectorAll("#previous");

// Function to update data based on the selected timeframe
function updateData(timeframe) {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      currentHours.forEach((e, i) => {
        currentHours[i].textContent = `${data[i].timeframes[timeframe].current}hrs`;
        previousHours[
          i
        ].textContent = `Last week - ${data[i].timeframes[timeframe].previous}hrs`;
      });
    });
}

// Add event listeners to buttons
btn.forEach((butt) => {
  butt.addEventListener("click", function (e) {
    e.preventDefault();
    const timeframe = this.dataset.timeframe; // assuming each button has a data-timeframe attribute
    updateData(timeframe);
    btn.forEach((b) => b.classList.remove("text-white"));
    this.classList.add("text-white");
  });
});
