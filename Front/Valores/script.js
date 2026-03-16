class Estacionamento {

    calcularTempo(valor) {

        if (valor < 1) {
            return "Valor insuficiente.";
        }

        let tempo = 0;
        let troco = 0;

        if (valor >= 3) {
            tempo = 120;
            troco = valor - 3;
        }
        else if (valor >= 1.75) {
            tempo = 60;
            troco = valor - 1.75;
        }
        else if (valor >= 1) {
            tempo = 30;
            troco = valor - 1;
        }

        let trocoFormatado = troco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        return `Tempo: ${tempo} minutos | Troco: ${trocoFormatado}`;
    }

}

const estacionamento = new Estacionamento();

function calcular() {

    let valor = parseFloat(document.getElementById("valor").value);

    let resultado = estacionamento.calcularTempo(valor);

    document.getElementById("resultado").innerText = resultado;

}