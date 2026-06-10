document.write("<h2>Welcome to the Sleep Calculator!</h2>");

let position = 0;

function moveMoon() {
    position += 50;
    document.getElementById("moon").style.left = position + "px";
}

function toggleTip() {
    const tip = document.getElementById("sleepTip");
    if (tip.style.display === "none") {
        tip.style.display = "block";
    } else {
        tip.style.display = "none";
    }
}

function toggleLight() {
    document.body.classList.toggle("dark");
}

function handleLoad() {
    alert("Welcome to the Sleep Calculator!");
}

function handleMouseOver() {
    document.getElementById("wakeTime").style.border = "2px solid navy";
}

function handleMouseOut() {
    document.getElementById("wakeTime").style.border = "";
}

function handleSelect() {
    alert("Text selected!");
}

function calculateSleep() {
    const input = document.getElementById("wakeTime").value;
    const resultsDiv = document.getElementById("results");

    if (!input) {
        resultsDiv.innerHTML = "Please enter a time.";
        return;
    }

    const [hours, minutes] = input.split(":").map(Number);

    let wakeTime = new Date();
    wakeTime.setHours(hours);
    wakeTime.setMinutes(minutes);

    let results = "<h2>Recommended sleep times:</h2><ul>";

    for (let i = 4; i <= 6; i++) {
        let sleepTime = new Date(wakeTime.getTime() - i * 90 * 60000);

        let h = sleepTime.getHours().toString().padStart(2, '0');
        let m = sleepTime.getMinutes().toString().padStart(2, '0');

        results += `<li>${h}:${m} (${i} cycles)</li>`;
    }

    results += "</ul>";
    resultsDiv.innerHTML = results;
}