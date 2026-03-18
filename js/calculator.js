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
