const botao = document.querySelector('.botao');
const contadorElement = document.querySelector('.score');

let score = 0;
let multiplicador = 2;

function incrementar() {
    score+=10;
    contadorElement.innerText = score;
}
botao.addEventListener('click', incrementar);

