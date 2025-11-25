// TASK 7 — SEQUENTIAL PROMISES

const stepsList = document.getElementById("stepsList");

// Helper to log in DOM
function addStep(text, highlight = false) {
  const li = document.createElement("li");
  li.innerText = text;

  if (highlight) li.classList.add("active-step");

  stepsList.appendChild(li);
  return li;
}

// Promises
function step1() {
  return new Promise(res => {
    const li = addStep("Executing Step 1...", true);
    setTimeout(() => {
      li.classList.remove("active-step");
      li.innerText = "Step 1 done";
      res("Step 1 done");
    }, 1000);
  });
}

function step2() {
  return new Promise(res => {
    const li = addStep("Executing Step 2...", true);
    setTimeout(() => {
      li.classList.remove("active-step");
      li.innerText = "Step 2 done";
      res("Step 2 done");
    }, 1000);
  });
}

function step3() {
  return new Promise(res => {
    const li = addStep("Executing Step 3...", true);
    setTimeout(() => {
      li.classList.remove("active-step");
      li.innerText = "Step 3 done";
      res("Step 3 done");
    }, 1000);
  });
}

// Run sequentially (async/await)
async function runSteps() {
  await step1();
  await step2();
  await step3();
}

runSteps();