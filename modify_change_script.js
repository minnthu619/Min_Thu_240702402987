document.getElementById("changeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const amountInput = document.getElementById("amount");
  const amount = parseInt(amountInput.value);
  const resultDiv = document.getElementById("result");
  
  //validation
  if (isNaN(amount) || amount <= 0) {
    resultDiv.innerHTML = "<p style='color: red;'>Please enter a positive whole number</p>";
    return;
  }
  
  const denominations = [500, 100, 50, 20, 10, 5, 1];
  let remaining = amount;
  let result = "";

  denominations.forEach(baht => {
    const count = Math.floor(remaining / baht);
    if (count > 0) {
      result += `<p>${count} of ฿${baht}</p>`;
      remaining %= baht;
    }
  });

  resultDiv.innerHTML = result;
});

document.getElementById("backButton").addEventListener("click", function() {
  document.getElementById("amount").value = "";
  document.getElementById("result").innerHTML = "";
});