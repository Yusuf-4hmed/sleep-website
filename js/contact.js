function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const country = document.getElementById("country").value;
    const sleepHours = document.getElementById("sleep-hours").value;
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("formResult");

    const occupationSelected = document.querySelector('input[name="occupation"]:checked');
    const topicsSelected = document.querySelectorAll('input[name="enquiry-topic"]:checked');

    const missing = [];

    if (!name) missing.push("Full Name");
    if (!email) missing.push("Email Address");
    if (!age) missing.push("Age");
    if (!country) missing.push("Country");
    if (!sleepHours) missing.push("Hours of Sleep");
    if (!occupationSelected) missing.push("Occupation");
    if (topicsSelected.length === 0) missing.push("Enquiry Topic (at least one checkbox)");
    if (!message) missing.push("Message");

    if (missing.length > 0) {
        alert("Please fill in the following fields:\n\n- " + missing.join("\n- "));
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (age < 1 || age > 120) {
        alert("Please enter a valid age between 1 and 120.");
        return;
    }

    result.innerHTML = "<p style='color:green;'>Message sent successfully!</p>";
    document.getElementById("contactForm").reset();
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("country").value = "";
    document.getElementById("sleep-hours").selectedIndex = -1;
    document.getElementById("message").value = "";

    const radios = document.querySelectorAll('input[name="occupation"]');
    radios.forEach(r => r.checked = false);

    const checkboxes = document.querySelectorAll('input[name="enquiry-topic"]');
    checkboxes.forEach(c => c.checked = false);

    document.getElementById("formResult").innerHTML = "";

    alert("All fields have been cleared.");
}