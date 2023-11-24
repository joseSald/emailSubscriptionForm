const scriptURL =
  'https://script.google.com/macros/s/AKfycbzGLBjG_G6vuCEixAySoT9l9Iszh_hzNTpq5CGPkBdlui7vqvjM1zTlMl8orlOuWmzC/exec';
const form = document.forms['submit-to-google-sheet'];
let successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      successMsg.innerHTML = 'Email registered, Thank you for subscribing!';

      setTimeout(function () {
        successMsg.innerHTML = '';
      }, 3500);
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
