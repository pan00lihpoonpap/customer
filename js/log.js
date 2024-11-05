const signInBtn = document.querySelector('#signin');
const signUpBtn = document.querySelector('#signup');
const container = document.querySelector('.container');

signInBtn.addEventListener("click", () => { 
    container.classList.remove("panel-active"); 
});

signUpBtn.addEventListener("click", () => { 
    container.classList.add("panel-active"); 
});

//登录
//忘记密码+验证码
//注册+验证码

document.addEventListener('DOMContentLoaded', (event) => {
    const registerButton = document.querySelector('.register-btn');
    registerButton.addEventListener('click', function(e) {
        const passwordInput = document.querySelector('#form1 .input[type="password"]');
        const password = passwordInput.value;
        const hasLetter = /[a-zA-Z]/.test(password);
        const isValidLength = password.length >= 8;

        if (!hasLetter || !isValidLength) {
            e.preventDefault(); // 阻止表单提交
            alert('密码必须至少为8位，并且包含至少一个英文字母。');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const sendVerificationCodeBtn = document.getElementById('send-verification-code-btn');
    sendVerificationCodeBtn.addEventListener('click', function(e) {
        const passwordInput = document.querySelector('#form1 .input[type="password"]');
        const verificationCodeInput = document.getElementById('verification-code-input');
        const password = passwordInput.value;
        const verificationCode = verificationCodeInput.value.trim();

        const hasLetter = /[a-zA-Z]/.test(password);
        const isValidLength = password.length >= 8;
        const isVerificationCodeEmpty = verificationCode === '';

        if (!hasLetter || !isValidLength) {
            e.preventDefault(); // 阻止任何默认操作
            alert('密码必须至少为8位，并且包含至少一个英文字母。');
        } else if (isVerificationCodeEmpty) {
            e.preventDefault(); // 阻止任何默认操作
            alert('请输入验证码。');
        }
    });
});

