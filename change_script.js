document.getElementById("changeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const amount = parseInt(document.getElementById("amount").value);
  const denominations = [500, 100, 50, 20, 10, 5, 1];
  const resultDiv = document.getElementById("result");
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
