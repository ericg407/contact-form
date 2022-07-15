import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


// Submit function
function myFunction() {
    document.getElementById("frm1").submit();
}
// reset function
function myFunctionReset() {
    document.getElementById("frm1").reset();
}

const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');



// Constrainst Validation API function
const nameInput = document.querySelector('input');

nameInput.addEventListener('input', () => {
    nameInput.setCustomValidity('');
    nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
    if (nameInput.value === '') {
        nameInput.setCustomValidity('Enter your username!');
    } else {
        nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
    }
});