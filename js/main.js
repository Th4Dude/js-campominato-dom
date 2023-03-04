'Use strict'

function creaCella(elemento, classe1, classe2, valore, arrayBomb) {
    const elementoCreato = document.createElement(elemento);
    elementoCreato.classList.add(classe1);
    elementoCreato.classList.add(classe2);
    elementoCreato.innerText = valore;
    elementoCreato.addEventListener('click', function () {
        elementoCreato.classList.add('blue');
        if (arrayBomb.includes(valore)) {
            elementoCreato.classList.add('red');
            console.log("Hai perso.");
        } else {
            elementoCreato.classList.add('blue');
            console.log("hai vinto.");
        }
    })
    
    return elementoCreato;
}

function appendiCella(container, element) {
    container.append(element);
}

function randomArray(max, bombe) {
    let array = [];
    while (array.length < bombe) {
        let numeroRandom = Math.floor(Math.random() * max) + 1;
        if (!array.includes(numeroRandom)) {
            array.push(numeroRandom);
        }
    }
    return array;
}

/* choose diff */

function start() {

    const difficult = document.querySelector(".difficult").value;
    const scelta = difficult;
    container.innerHTML = '';

    let max = 0
    let bombe = 0

    if (scelta === 'normal') {
        for (let i = 1; i <= 81; i++) {
            max = 81
            bombe = 16
        }
    } else if (scelta === 'hard') {
        for (let i = 1; i <= 49; i++) {
            max = 49
            bombe = 16
        }
    } else {
        for (let i = 1; i <= 100; i++) {
            max = 100
            bombe = 16
        }
    }

    let arrayBomb = randomArray(max, bombe)
    console.log(arrayBomb)

    for (let i = 1; i <= max; i++) {
        const cella = creaCella('div', 'cella', scelta, i, arrayBomb);
        appendiCella(container, cella);
    }
}

const container = document.querySelector(".board");
const button = document.querySelector(".btn");

/* btn */

button.addEventListener('click', start);