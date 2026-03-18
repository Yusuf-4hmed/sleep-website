function checkQuiz() {
    let score = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');

    if (!q1 && !q2 && !q3 && !q4) {
        document.getElementById("quizResult").innerHTML =
            "<p>Please answer at least one question.</p>";
        return;
    }

    if (q1?.value === "c") score++;
    if (q2?.value === "b") score++;
    if (q3?.value === "a") score++;
    if (q4?.value === "c") score++;

    document.getElementById("quizResult").innerHTML =
        "<h2>Your Score: " + score + "/4</h2>";
}

function restartQuiz() {
    const form = document.getElementById("quizForm");
    if (form) {
        form.reset(); // clears selected answers
    }

    const result = document.getElementById("quizResult");
    if (result) {
        result.innerHTML = ""; // clears score output
    }
}

