document.addEventListener('DOMContentLoaded', (event) => {
    const newPasswordInput = document.querySelector('input[type="password"][placeholder="输入新的密码"]');
    const confirmPasswordInput = document.querySelector('input[type="password"][placeholder="再次输入新的密码"]');
    const alertDiv = document.createElement('div');
    alertDiv.style.display = 'none';
    alertDiv.style.color = 'red';
    alertDiv.textContent = '密码不一致';

    confirmPasswordInput.parentNode.insertBefore(alertDiv, confirmPasswordInput.nextSibling);

    confirmPasswordInput.addEventListener('input', function() {
        if (newPasswordInput.value !== confirmPasswordInput.value) {
            alertDiv.style.display = 'block';
        } else {
            alertDiv.style.display = 'none';
        }
    });
});
