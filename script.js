const teclas = document.querySelectorAll('.oitava > div'); //Pegando todas as teclas dentro da clase 'oitava', no caso as "div's".

function desmarcar(tecla) {
    tecla.classList.remove("selecionada") //Remorando a classe, no momento em que solto o click do mouse.
}

teclas.forEach(function(tecla) { //Percorrendo todas as teclas do teclado
    tecla.onmousedown = function() {
        tecla.classList.add("selecionada") //Adicionando uma classe no momento em que o botão é clicado
    };

    tecla.onmouseup =  () => desmarcar(tecla);

    tecla.onmouseleave = () => desmarcar(tecla);
})
