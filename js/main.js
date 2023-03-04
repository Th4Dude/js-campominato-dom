'Use strict'


function creaCella(elemento, classe1, classe2, valore, arrayBomb){
    const elementoCreato = document.createElement(elemento);
    elementoCreato.classList.add(classe1);
    elementoCreato.classList.add(classe2);
    elementoCreato.innerText = valore;



    elementoCreato.addEventListener('click', function(){
        elementoCreato.classList.add('blue');
        if (arrayBomb.includes(valore)) {

            elementoCreato.classList.add('red');
            console.log("BOOM! Hai calpestato una bomba.");

        } else {
            elementoCreato.classList.add('blue');
            console.log("Non hai calpestato una bomba.");
        }
    })

    return elementoCreato;
}

function appendiCella(container, element){
    container.append(element);
}

function randomArray(max) {
    let array = [];
    while (array.length < 16) {
      let numeroRandom = Math.floor(Math.random() * max) + 1;
      if (!array.includes(numeroRandom)) {
        array.push(numeroRandom);
      }
    }
    return array;
  }



/* choose diff */

function start(){
    const difficult = document.querySelector(".difficult").value;
    const scelta = difficult;
    container.innerHTML = '';

    let max = 0

    if(scelta === 'normal'){
        for(let i = 1; i <= 81; i++){
            max = 81
            const cella = creaCella('div', 'cella', 'normal', i);
            appendiCella(container, cella);
        }
    } else if (scelta === 'hard'){
        for(let i = 1; i <= 49; i++){
            max = 49
            const cella = creaCella('div', 'cella', 'hard', i);
            appendiCella(container, cella);
        }
    } else {
        for(let i = 1; i <= 100; i++){

             max = 100
            const cella = creaCella('div', 'cella', 'easy', i);
            appendiCella(container, cella);
        }
    }

}

const container = document.querySelector(".board");
const button = document.querySelector(".btn");

  let arrayBomb = randomArray(100)
  console.log(arrayBomb)

/* btn */

button.addEventListener('click', start);