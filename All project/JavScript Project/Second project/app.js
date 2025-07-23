const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height.`;
    return;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight.`;
    return;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    if (BMI < 18.6) {
      results.innerHTML = `<span>Your BMI is ${BMI}, you are underweight.</span>`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      results.innerHTML = `<span>Your BMI is ${BMI}, you have a normal weight.</span>`;
    } else {
      results.innerHTML = `<span>Your BMI is ${BMI}, you are overweight.</span>`;
    }
  }
});
