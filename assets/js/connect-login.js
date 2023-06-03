const card3 = document.getElementById('connect-card');
const card4 = document.getElementById('thank-you-login-card');
const form3 = document.getElementById('connect-form');
const submitButton6 = document.querySelector('#connectBtn');
const connectForm = document.querySelector('#connect-form');
const requiredFields5 = connectForm.querySelectorAll('[required]');
const checkboxes5 = connectForm.querySelectorAll('input[type="checkbox"]');

function checkFormValidity() {
  let isValid = true;

  requiredFields5.forEach((field) => {
    if (!field.value) {
      isValid = false;
    }
  });

  checkboxes5.forEach((checkbox) => {
    if (!checkbox.checked) {
      isValid = false;
    }
   });

  return isValid;
}

connectForm.addEventListener('input', () => {
  if (checkFormValidity()) {
    submitButton6.disabled = false;
  } else {
    submitButton6.disabled = true;
  }
});

connectBtn.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the form from actually submitting
  
  card3.style.display = 'none'; // hide the first card
  card4.classList.remove('thank-you-login'); // show the second card
});
