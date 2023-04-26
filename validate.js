const registerMain = document.querySelector('.register-main');
const registerSecondary = document.querySelector('.register-secondary');
const registerBtn0 = document.querySelector('.btn-0');
const registerBtn1 = document.querySelector('.btn-1');
const error_0 = document.querySelector('.error-msg-0');
const error_1 = document.querySelector('.error-msg-1');

function validate(input, error) {
    if(!validateEmail(input.value)) {
        input.setAttribute('data-error', true)
        error.style.display = "block";
    } else {
        input.setAttribute('data-error', false)
        error.style.display = "none";
    }
}

registerBtn0.addEventListener('click', () => {
    validate(registerMain, error_0);
})

registerBtn1.addEventListener('click', () => {
    validate(registerSecondary, error_1);
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};