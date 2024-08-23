const windowInformation = document.querySelector('.window-information-photo')
const modal = document.querySelector('.modal--login');
const body = document.querySelector('body')
// const loginUser = document.querySelector('#input-login');
// const loginPassword = document.getElementById('input-password');
// const userError = document.getElementById('user-error');
// const passwordError = document.getElementById('password-error');

function openModal(){
    modal.classList.add('active')
    body.classList.add('active')
};

function closeModal(){
    modal.classList.remove('active')
    body.classList.remove('active')
};
function openWindow(){
    windowInformation.classList.add('active')
    body.classList.add('active')
};
function closeWindow(){
    windowInformation.classList.remove('active')
    body.classList.remove('active')
};
