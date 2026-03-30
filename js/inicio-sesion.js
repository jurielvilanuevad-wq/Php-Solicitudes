// Ocultar la contraseña en el login al presionar el ojo
document.getElementById('togglePass').addEventListener('click', function () {
    var input = document.getElementById('password');
    var isPass = input.type === 'password';
    input.type = isPass ? 'text' : 'password';
    this.textContent = isPass ? '>.<' : '👁';
});
