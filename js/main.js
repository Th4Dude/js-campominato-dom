'Use strict'

/* queryselectors */

const container = document.querySelector(".board");
const button = document.querySelector(".btn");

/*cell creation  */

function appendiCella(container, element){
    container.append(element);
}

/* functions */

function creaCella(elemento, classe1, classe2, valore){
    const elementoCreato = document.createElement(elemento);
    elementoCreato.classList.add(classe1);
    elementoCreato.classList.add(classe2);
    elementoCreato.innerText = valore;
    elementoCreato.addEventListener('click', function(){
        elementoCreato.classList.add('color-blue');
    })

    return elementoCreato;
}

/* choose diff */

function start(){
    const difficult = document.querySelector(".difficult").value;
    const scelta = difficult;
    container.innerHTML = '';

    if(scelta === 'normal'){
        for(let i = 1; i <= 81; i++){
            const cella = creaCella('div', 'cella', 'normal', i);
            appendiCella(container, cella);
        }
    } else if (scelta === 'hard'){
        for(let i = 1; i <= 49; i++){
            const cella = creaCella('div', 'cella', 'hard', i);
            appendiCella(container, cella);
        }
    } else {
        for(let i = 1; i <= 100; i++){
            const cella = creaCella('div', 'cella', 'easy', i);
            appendiCella(container, cella);
        }
    }

}

/* btn */
button.addEventListener('click', start);