document.getElementById('areaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const r = parseFloat(document.getElementById('radiusInput').value);
  const result = document.getElementById('result');

  if (!isNaN(r) && r >= 0) {
    const area = Math.PI * r * r;
    result.textContent = `The area of the circle is ${area.toFixed(2)} cm²`;
  } else {
    result.textContent = 'Please enter a valid, non-negative radius.';
  }
});

document.getElementById('backButton').addEventListener('click', function () {
  document.getElementById('radiusInput').value = '';
  document.getElementById('result').textContent = '';
});