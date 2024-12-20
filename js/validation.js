document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Form fields
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    let isValid = true;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
    }

    // Validate password
    if (password.value.length < 8) {
      password.classList.add("is-invalid");
      isValid = false;
    } else {
      password.classList.remove("is-invalid");
    }

    // Confirm passwords match
    if (password.value !== confirmPassword.value) {
      confirmPassword.classList.add("is-invalid");
      isValid = false;
    } else {
      confirmPassword.classList.remove("is-invalid");
    }

    // If valid, submit form (or display success message)
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
