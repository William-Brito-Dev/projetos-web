let contador = 0;

const valorElemento = document.getElementById('valor');
const botoes = document.querySelectorAll('.botao');

botoes.forEach(function (botao) {
    botao.addEventListener('click', function (e) {
        const classes = e.currentTarget.classList;

        if (classes.contains('diminuir')) {
            contador--;
        } else if (classes.contains('aumentar')) {
            contador++;
        } else {
            contador = 0;
        }

        if (contador > 0) {
            valorElemento.style.color = 'lightgreen';
        } else if (contador < 0) {
            valorElemento.style.color = 'salmon';
        } else {
            valorElemento.style.color = 'white';
        }

        valorElemento.textContent = contador;
    });
});