'use strict'

const containerCells = document.querySelector('.container-cells')

/*-------event bottone------- */

let bottone = document.querySelector(".button-01");

let easy = document.querySelector('.easy')

let cellNumber;

let level;

bottone.addEventListener("click", function () {
    let level = document.querySelector('.difficult').value;
    let container = document.querySelector('.container-cells');
    container.classList.toggle("mostra");
    console.log(container)
    switch (level) {
        case 'normal':
            cellNumber = 81;
            break;

        case 'hard':
            cellNumber = 49;
            break;

        case 'easy':
        default:
            cellNumber = 100;
    }
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].remove()
    }
    for (let i = 1; i <= cellNumber; i++) {
        const elementoCreato = createCell('div', 'cell', i);
        containerCellsAppend(containerCells, elementoCreato);
        console.log()
    }
});

/*-------event bottone------- */

/* -------functions------- */


function createCell(elemento, nomeClass, valore) {
    const cellElement = document.createElement(elemento);
    cellElement.classList.add(nomeClass);
    cellElement.innerText = valore;
    cellElement.addEventListener('click', function () {
        console.log(valore);
        cellElement.classList.toggle('color-blue')
    })
    return cellElement;
}

function containerCellsAppend(container, elemento) {
    container.append(elemento);
}


/* -------functions------- */

/* Ciclo for */

/* function campoMinato() {


} */







/* Ciclo for */





