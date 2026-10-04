const mostrarSenha = document.getElementById("ShowHide");

const senha = document.getElementById("pass");

mostrarSenha.addEventListener("change", function() {

    if (mostrarSenha.checked) {
        senha.type = "text";
    } 
    else {
        senha.type = "password";
    }

});


document.addEventListener("keydown", function(event) {
    if (event.key === "F11") {
        event.preventDefault();
    }
});