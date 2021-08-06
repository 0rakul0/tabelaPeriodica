//constante do darkmode
const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

//constantes do botão de busca
const icon = document.querySelector('.input-icon');
const containerInput =document.querySelector(".containerInput");
const clear = document.getElementById('clear');
const procura = document.getElementById('procura');

//função para darkmode
toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}

//função para caixa de procura
icon.onclick = function() {
    containerInput.classList.toggle('active');
}

//função de limpar o imput
clear.onclick = function() {
    document.getElementById('procura').value = '';
}