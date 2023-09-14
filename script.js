console.log("Hola Mundo");
let intentos = 6;
window.addEventListener('load', init);

function init() {
    console.log('Esto se ejecuta solo cuando se carga la página web');
}

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function intentar() {
    console.log("Intento!");
    const INTENTO = leerIntento();
    console.log(INTENTO);

    if (INTENTO === palabra) {
        console.log("GANASTE!");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        if (INTENTO[i] === palabra[i]) {
            console.log(INTENTO[i], "VERDE");
        } else if (palabra.includes(INTENTO[i])) {
            console.log(INTENTO[i], "AMARILLO");
        } else {
            console.log(INTENTO[i], "GRIS");
        }
    }

    intentos--;

    if (intentos === 0) {
        console.log("PERDISTE!");
    }
}

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}

if (INTENTO === palabra) {
    terminar("<h1>GANASTE!😀</h1>");
    return;
}

if (intentos === 0) {
    terminar("<h1>PERDISTE!😖</h1>");
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    const BOTON = document.getElementById("guess-button");
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

const GRID = document.getElementById("grid");
const ROW = document.createElement('div');
ROW.className = 'row';
for (let i = 0; i < palabra.length; i++) {
    const SPAN = document.createElement('span');
    SPAN.className = 'letter';
    if (INTENTO[i] === palabra[i]) { //VERDE
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = 'green';
    } else if (palabra.includes(INTENTO[i])) { //AMARILLO
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = 'yellow';
    } else { //GRIS
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = 'grey';
    }
    ROW.appendChild(SPAN);
}
GRID.appendChild(ROW);

let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
const min = 0;
const max = diccionario.length - 1;
const palabra = diccionario[Math.floor(Math.random() * (max - min + 1)) + min];
