const Texto = document.getElementById("Texto");
const Contar = document.getElementById("Contar");

Texto.addEventListener("keyup", function () {

    Contar.innerText = Texto.value.length;
});