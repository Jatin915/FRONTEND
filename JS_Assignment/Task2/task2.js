// CHARACTER COUNTER TASK
const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");
const MAX = 100;

textBox.addEventListener("input", () => {
  let used = textBox.value.length;
  let left = MAX - used;

  counter.innerText = `Characters left: ${left}`;

  // COLOR CHANGE LOGIC
  if (left > 60) {
    counter.style.color = "green";
  } 
  else if (left > 20) {
    counter.style.color = "orange";
  } 
  else {
    counter.style.color = "red";
  }

  // Stop typing if limit reached (extra safety)
  if (used >= MAX) {
    textBox.value = textBox.value.substring(0, MAX);
  }
});