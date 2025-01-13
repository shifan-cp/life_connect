// Function to show the main page
function showMainPage() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("main-page").style.display = "block";
  }
  
  // Function to show the sign-up page
  function showSignupPage() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("signup-page").style.display = "block";
    document.getElementById("main-page").style.display = "none";
  }
  
  // Function to show the login page
  function showLoginPage() {
    document.getElementById("login-page").style.display = "block";
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("main-page").style.display = "none";
  }
  
  // Function to validate password and confirm password match
  function validatePassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return false;
    }
  
    // Proceed with registration
    alert("Registration successful!");
    return true;
  }
  
  // Placeholder functions for main page buttons
  function handleBloodEmergency() {
    alert("Redirecting to Blood Emergency page...");
  }
  
  function handleDonorRegistration() {
    alert("Redirecting to Blood Donor Registration page...");
  }
  
  function handleAccidentReporting() {
    alert("Redirecting to Accident Reporting page...");
  }
  // Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");
    const showPasswordCheckbox = document.getElementById("show-password-checkbox");
  
    const type = showPasswordCheckbox.checked ? "text" : "password";
    passwordField.type = type;
    confirmPasswordField.type = type;
  }
  
  function togglePasswordVisibility() {
    const passwordField = document.getElementById("login-password");
    const icon = document.getElementById("toggle-password");
  
    if (passwordField.type === "password") {
      passwordField.type = "text"; // Show password
      icon.textContent = "🙈"; // Change the icon (optional)
    } else {
      passwordField.type = "password"; // Hide password
      icon.textContent = "👁️"; // Change the icon (optional)
    }
  }
  