// Gera número secreto entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Número máximo de tentativas
let maxTentativas = 10;

// Contador de tentativas restantes
let tentativasRestantes = maxTentativas;

// Atualiza tentativas na tela
document.getElementById("tentativas").innerText =
    "Tentativas restantes: " + tentativasRestantes;

function chutar() {

    let input = document.getElementById("palpite");
    let palpite = parseInt(input.value);
    let mensagem = document.getElementById("mensagem");

    // Validação
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.innerText = "Digite um número válido entre 1 e 100.";
        return;
    }

    tentativasRestantes--;

    if (palpite === numeroSecreto) {
        mensagem.innerText = "Você acertou";
        desativarJogo();
    }
    else if (palpite < numeroSecreto) {
        mensagem.innerText = "O número secreto é MAIOR.";
    }
    else {
        mensagem.innerText = "O número secreto é MENOR.";
    }

    document.getElementById("tentativas").innerText =
        "Tentativas restantes: " + tentativasRestantes;

    // Verifica derrota
    if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
        mensagem.innerText =
            "Você perdeu. O número secreto era " + numeroSecreto;
        desativarJogo();
    }

    input.value = "";
}

function desativarJogo() {
    document.getElementById("palpite").disabled = true;
}