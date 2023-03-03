'use strict'

const containerCells = document.querySelector('.container-cells')

/*-------event bottone------- */

let bottone = document.querySelector(".button-01");

bottone.addEventListener("click", function() {
    let container = document.querySelector('.container-cells');
    container.classList.toggle("mostra");
    console.log(container)
});

/*-------event bottone------- */

/* -------functions------- */


function createCell(elemento, nomeClass, valore){
    const cellElement = document.createElement(elemento);
    cellElement.classList.add(nomeClass);
    cellElement.innerText = valore;
    cellElement.addEventListener('click', function(){
        console.log(valore);
        cellElement.classList.toggle('color-blue')
    })
    return cellElement;
}

function containerCellsAppend(container, elemento){
    container.append(elemento);
}

/* -------functions------- */

/* Ciclo for */

let cellNumber = 100

for( let i = 1 ; i <= cellNumber; i++){
    const elementoCreato = createCell('div' , 'cell' , i );
    containerCellsAppend(containerCells,elementoCreato);
}

/* Ciclo for */

