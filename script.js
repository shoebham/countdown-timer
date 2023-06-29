var startDate = Date.parse(document.querySelector("#start-date").value);
var endDate = Date.parse(document.querySelector("#end-date").value);

const startDateText = document.querySelector("#start-date-text");
const endDateText = document.querySelector("#end-date-text");
// run the function when the page is loaded
window.addEventListener("load", increaseProgress);

// run every second

function setEventTitle() {
  const event = document.querySelector("#event").value;
  const eventTitle = document.querySelector("#event-title");
  eventTitle.textContent = event;
  console.log(event);
  increaseProgress();
  showProgressHideInput();
}

function increaseProgress() {
  startDate = Date.parse(document.querySelector("#start-date").value);
  endDate = Date.parse(document.querySelector("#end-date").value);
  console.log("increaseProgress");
  const now = Date.now();
  // calculate the progress
  var progress = ((now - startDate) / (endDate - startDate)) * 100;
  progress = progress < 0 ? 0 : progress;
  // set the progress bar
  const progressBar = document.querySelector("#bar");
  progressBar.value = `${progress}`;
  // set the progress percentage
  const progressDone = document.querySelector("#percentage-done");
  progressDone.textContent = `${Math.round(progress)}% Done`;
  const progressLeft = document.querySelector("#percentage-left");
  progressLeft.textContent = `${Math.round(100 - progress)}% Left`;

  startDateText.textContent = formateEpochDate(
    document.querySelector("#start-date").value
  );
  endDateText.textContent = formateEpochDate(
    document.querySelector("#end-date").value
  );
}

function showInputHideProgress() {
  const inputBox = document.querySelector("#input-box");
  const progress = document.querySelector("#progress");
  // show input box
  inputBox.style.display = "flex";
  // hide progress bar
  progress.style.display = "none";
}

function showProgressHideInput() {
  const inputBox = document.querySelector("#input-box");
  const progress = document.querySelector("#progress");
  // hide input box
  inputBox.style.display = "none";
  // show progress bar
  progress.style.display = "flex";
}

function formateEpochDate(date) {
  //  convert date to "1 Jan 2023" format
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
}

function init() {
  // hide everything
  const inputBox = document.querySelector("#input-box");
  const progress = document.querySelector("#progress");
  inputBox.style.display = "none";
  progress.style.display = "none";

  increaseProgress();
  showProgressHideInput();
  setInterval(increaseProgress, 1000);

  // show input box
}
init();
