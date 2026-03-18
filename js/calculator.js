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

function checkQuiz() {
    let score = 0;

    if (document.querySelector('input[name="q1"]:checked')?.value === "c") score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "b") score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "a") score++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "c") score++;

    document.getElementById("quizResult").innerHTML =
        "<h2>Your Score: " + score + "/4</h2>";
}
