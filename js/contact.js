

function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("formResult");

    // Check if any field is empty
    if (!name || !email || !message) {
        result.innerHTML = "<p style='color:red;'>Please fill in all fields.</p>";
        return;
    }

    // Basic email validation
    if (!email.includes("@") || !email.includes(".")) {
        result.innerHTML = "<p style='color:red;'>Please enter a valid email address.</p>";
        return;
    }

    // If valid
    result.innerHTML = "<p style='color:green;'>Message sent successfully!</p>";

    // Clear form
    document.getElementById("contactForm").reset();
}