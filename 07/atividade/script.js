// o meu
function calcular(a, b,) {
    return a + b;
}
let resultado = calcular(14, 55);
console.log(resultado);

function subtrair(a, b,) {
    return a - b;
}
let resultado1 = subtrair(77, 55);
console.log(resultado1);

function multiplicar(a, b,) {
    return a * b;
}
let resultado2 = multiplicar(14, 14);
console.log(resultado2);

function dividir(a, b,) {
    return a / b;
}
let resultado3 = dividir(14, 20);
console.log(resultado3);

function porcentagem(a, b,) {
    return a % b;
}
let resultado4 = porcentagem(14, 20);
console.log(resultado4);

// do professor

function calculadora(num1, num2, operador) { 
    if(operador === "+") {
        return  num1 + num2;
    } else if(operador === "-") {
        return num1 - num2;
    } else if (operador === "*") {
        return num1 * num2;
    } else if (operador === "/") {
        if(num2 === 0) {
            return 0;
        }
        return num1 / num2;
    } else {
        return "Operação inválida";
    }
}

function exibirResultados() {
    // Pega os dados em tela
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;

    // Manda para a calculadora
    let resultado = calculadora(numero1, numero2, operacao);

    // Exibe o resultado em tela
    document.getElementById("resultado").innerText = resultado;
}