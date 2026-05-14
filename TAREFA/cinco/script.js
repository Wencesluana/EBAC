let numeroSecreto;
let tentativaMaxima = 10;
let tentativaRestatntes;

window.onload = function() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativaRestatntes = tentativaMaxima;

    this.document.getElementById("tentativas").textContext = "Tentativas restantes: " + tentativaRestatntes;

}

function adivinhar() {
    const input = document.getElementById("palpite");
    const palpite = parseInt(input.value);
    const mensagem = document.getElementById("mensagem");


}
