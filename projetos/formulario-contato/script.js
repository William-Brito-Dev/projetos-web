const h1principal = document.querySelectorAll('.titulo-alternado');
const mqmobile = window.matchMedia('(max-width: 768px)');

function alterConteudo(e) {
    let novoTexto;
    
    if (e.matches) {
        novoTexto = 'Entre em contato conosco preenchendo o formulário abaixo';
    } else {
        novoTexto = 'Entre em contato conosco preenchendo o formulário ao lado';
    }
    
    h1principal.forEach(elemento => {
        elemento.textContent = novoTexto;
    });
}

mqmobile.addEventListener('change', alterConteudo);
alterConteudo(mqmobile);