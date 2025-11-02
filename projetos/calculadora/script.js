const resultadoInput = document.getElementById('resultado');
const botoes = document.querySelectorAll('.btn');

let expressaoAtual = '';
let resultadoFinal = 0;
let operacaoPendente = null;

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valorBotao = botao.textContent;

        if (botao.classList.contains('numero') || valorBotao === '.') {
            expressaoAtual += valorBotao;
            resultadoInput.value = expressaoAtual;
        } else if (botao.classList.contains('operacao')) {
            if (expressaoAtual !== '') {
                // Se já tem um número e uma operação pendente, calcula primeiro
                if (operacaoPendente) {
                    resultadoFinal = calcular(resultadoFinal, parseFloat(expressaoAtual), operacaoPendente);
                    resultadoInput.value = resultadoFinal;
                    expressaoAtual = ''; // Limpa a expressão atual
                } else {
                    resultadoFinal = parseFloat(expressaoAtual);
                    expressaoAtual = '';
                }
                operacaoPendente = valorBotao;
            }
        } else if (botao.classList.contains('clear')) {
            expressaoAtual = '';
            resultadoFinal = 0;
            operacaoPendente = null;
            resultadoInput.value = '';
        } else if (botao.classList.contains('igual')) {
            if (expressaoAtual !== '' && operacaoPendente) {
                resultadoFinal = calcular(resultadoFinal, parseFloat(expressaoAtual), operacaoPendente);
                resultadoInput.value = resultadoFinal;
                expressaoAtual = String(resultadoFinal); // Guarda o resultado para futuras operações
                operacaoPendente = null; // Reseta a operação pendente
            }
        }
    });
});

function calcular(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Erro'; // Evita divisão por zero
        default:
            return num2;
    }
}

// Uma "falha" comum de iniciante: não lidar bem com múltiplas operações seguidas ou bugs de input