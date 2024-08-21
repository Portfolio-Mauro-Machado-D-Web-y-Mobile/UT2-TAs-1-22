
const nombre = document.getElementById("nombre");
const contrasenia = document.getElementById("contrasenia");
const email = document.getElementById("email");

const mensajeNombre = document.getElementById("mensajeNombre");
const mensajeContrasenia = document.getElementById("mensajeContrasenia");
const mensajeEmail = document.getElementById("mensajeEmail");
const formResult = document.getElementById("formResult");

let flag = [false, false, false];

mensajeNombre.textContent = "Este parámetro es obligatorio";
mensajeContrasenia.textContent = "Este parámetro es obligatorio";
mensajeEmail.textContent = "Este parámetro es obligatorio";

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

nombre.addEventListener("input", () => {
    const value = nombre.value;
    switch (value) {
        case "":
            mensajeNombre.textContent = "Este parámetro es obligatorio";
            flag[0] = false;
            break;
        default:
            mensajeNombre.textContent = "";
            flag[0] = true;
            break;
    }   
})

contrasenia.addEventListener("input", () => {
    const value = contrasenia.value;
    if (value === "") {
        mensajeContrasenia.textContent = "Este parámetro es obligatorio";
        flag[1] = false;
    } else if (value.length < 8) {
        mensajeContrasenia.textContent = "La contraseña debe contener al menos 8 caracteres";
        flag[1] = false;
    } else {
        mensajeContrasenia.textContent = "";
        flag[1] = true;
    }
})

email.addEventListener("input", () => {
    const value = email.value;
    if (value === "") {
        mensajeEmail.textContent = "Este parámetro es obligatorio";
        flag[2] = false;
    } else if (!isValidEmail(value)) {
        mensajeEmail.textContent = "El email debe ser válido";
        flag[2] = false;
    } else {
        mensajeEmail.textContent = "";
        flag[2] = true;
    }
})

function onButtonClick() {
    if (flag.every(Boolean)){
        formResult.textContent = "Formulario enviado con éxito";
        nombre.value = "";
        contrasenia.value = "";
        email.value = "";
        formResult.style.color = "green";
    } else {
        formResult.textContent = "Revise el formulario antes de enviarlo nuevamente";
        formResult.style.color = "red";
    }
}