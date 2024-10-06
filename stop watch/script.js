let [secs, mins, hrs] = [0, 0, 0];
let displayTime = document.getElementById("disTime");
let timer = null;

// logic to run the stopwatch
function stopwatch() {
  secs++;
  if (secs == 60) {
    secs = 0;
    mins++;
    if (mins == 60) {
      mins = 0;
      hrs++;
    }
  }
  let h = hrs < 10 ? "0" + hrs : hrs;
  let m = mins < 10 ? "0" + mins : mins;
  let s = secs < 10 ? "0" + secs : secs;
  displayTime.innerHTML = h + ":" + m + ":" + s;
}

// start the stopwatch
function startwatch() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

// stop the stopwatch
function stopwatchFunc() {
  clearInterval(timer);
}

// reset the stopwatch
function resetwatch() {
  clearInterval(timer);
  [secs, mins, hrs] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
