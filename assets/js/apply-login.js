const card1 = document.getElementById('login-card');
const card2 = document.getElementById('thank-you-card');
const form = document.getElementById('login-form');
const submitButton1 = document.querySelector('#loginBtn');
const loginForm = document.querySelector('#login-form');
const requiredFields1 = loginForm.querySelectorAll('[required]');
const checkboxes1 = loginForm.querySelectorAll('input[type="checkbox"]');

function checkFormValidity1() {
  let isValid = true;

  requiredFields1.forEach((field) => {
    if (!field.value) {
      isValid = false;
    }
  });

  checkboxes1.forEach((checkbox) => {
    if (!checkbox.checked) {
      isValid = false;
    }
   });

  return isValid;
}

loginForm.addEventListener('input', () => {
  if (checkFormValidity1()) {
    submitButton1.disabled = false;
  } else {
    submitButton1.disabled = true;
  }
});

loginBtn.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the form from actually submitting
  
  card1.style.display = 'none'; // hide the first card
  card2.classList.remove('thank-you'); // show the second card
});