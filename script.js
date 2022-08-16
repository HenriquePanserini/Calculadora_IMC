var calcular = document.getElementById('calcular');

function imc() {
    var nome = document.getElementById('nome').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        var valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificado = '';

        if (valorIMC < 18.5) {
            classificado = "Abaixo do peso."
        } else if (valorIMC < 25) {
            classificado = "Peso ideal"
        } else if (valorIMC < 30) {
            classificado = "Um pouco acima do peso"
        } else if (valorIMC < 35) {
            classificado = "Grau de obesidade I"
        } else if (valorIMC < 40) {
            classificado = "Grau de obesidade II"
        } else {
            classificado = "Grau de obesidade III. Cuidado!"
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificado}`;
    } else {
        resultado.textContent = "Campos não preenchidos";
    }
}

calcular.addEventListener("click", imc);