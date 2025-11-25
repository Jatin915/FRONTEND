// FORM VALIDATION
const form = document.getElementById("regForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const errors = document.querySelectorAll(".error");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page reload

  let valid = true;

  // Reset previous errors
  errors.forEach(e => e.innerText = "");
  [nameInput, emailInput, passInput].forEach(i => {
    i.classList.remove("error-border", "success-border");
  });

  // Validate Name
  if (nameInput.value.trim() === "") {
    errors[0].innerText = "Name is required";
    nameInput.classList.add("error-border");
    valid = false;
  } else {
    nameInput.classList.add("success-border");
  }

  // Validate Email
  if (emailInput.value.trim() === "") {
    errors[1].innerText = "Email is required";
    emailInput.classList.add("error-border");
    valid = false;
  } else if (!emailInput.value.includes("@")) {
    errors[1].innerText = "Invalid email (must contain @)";
    emailInput.classList.add("error-border");
    valid = false;
  } else {
    emailInput.classList.add("success-border");
  }

  // Validate Password
  if (passInput.value.trim() === "") {
    errors[2].innerText = "Password is required";
    passInput.classList.add("error-border");
    valid = false;
  } else if (passInput.value.length < 8) {
    errors[2].innerText = "Password must be at least 8 characters";
    passInput.classList.add("error-border");
    valid = false;
  } else {
    passInput.classList.add("success-border");
  }

  if (valid) {
    alert("Form submitted successfully! 🎉");
    form.reset();

    // remove green borders after submit
    [nameInput, emailInput, passInput].forEach(i => {
      i.classList.remove("success-border");
    });
  }
});