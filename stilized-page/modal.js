const windowInformation = document.querySelector('.window-information-photo')
const modal = document.querySelector('.modal--login');
const loginUser = document.querySelector('.login');
const loginPassword = document.getElementById('input-password');
const userError = document.getElementById('user-error')
const passwordError = document.getElementById('password-error')

function openModal(){
    modal.classList.add('active')
};

function closeModal(){
    modal.classList.remove('active')
};

function openWindow(){
    windowInformation.classList.add('active')
};

function closeWindow(){
    windowInformation.classList.remove('active')
};

function loginConfirm(){
    if (loginUser.length === 0 && loginPassword.length === 0 ){
        userError.innerText = "Você não digitou nada"
    }
}