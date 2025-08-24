document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submitButton").addEventListener("click", checkGrade);
  document.getElementById("backButton").addEventListener("click", resetForm);

  document.getElementById("score").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      checkGrade();
    }
  });
});

function checkGrade() {
  const scoreInput = document.getElementById("score");
  const result = document.getElementById("result");
  const score = parseInt(scoreInput.value);

  if (isNaN(score) || score < 0) {
    result.textContent = "Please enter a positive number (0 or higher).";
    result.style.color = "#8f0b28";
    return;
  }

  if (score > 100) {
    result.textContent = "Score cannot be greater than 100.";
    result.style.color = "#8f0b28";
    return;
  }

  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  result.textContent = `You got "${grade}" grade.`;
  result.style.color = "#2c3e50";
}

function resetForm() {
  document.getElementById("score").value = "";
  document.getElementById("result").textContent = "";
}