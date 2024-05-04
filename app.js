const cero = document.getElementById('cero');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const flotante = document.getElementById('flotante');
const clear = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const masMenos = document.getElementById('mas-menos');
const division = document.getElementById('division');
const multiplicacion = document.getElementById('multiplicacion');
const resta = document.getElementById('resta');
const suma = document.getElementById('suma');
const igual = document.getElementById('igual');
const pantalla = document.getElementById('pantalla')


const botonPresionado = (boton) => {
    if(boton.id === 'clear'){
        pantalla.innerText='';
    }else if(boton.id === 'delete'){
        pantalla.innerText = pantalla.innerText.slice(0,pantalla.innerText.length-1);
    }else{
        const valor = boton.innerText;
        const pantallaActual= pantalla.innerText;
        pantalla.innerText = `${pantallaActual}${valor}`;
    }

};

cero.addEventListener('click',() => {
    botonPresionado(cero);
});
uno.addEventListener('click',() => {
    botonPresionado(uno);
});
dos.addEventListener('click',() => {
    botonPresionado(dos);
});
tres.addEventListener('click',() => {
    botonPresionado(tres);
});
cuatro.addEventListener('click',() => {
    botonPresionado(cuatro);
});
cinco.addEventListener('click',() => {
    botonPresionado(cinco);
});
seis.addEventListener('click',() => {
    botonPresionado(seis);
});
siete.addEventListener('click',() => {
    botonPresionado(siete);
});
ocho.addEventListener('click',() => {
    botonPresionado(ocho);
});
nueve.addEventListener('click',() => {
    botonPresionado(nueve);
});
clear.addEventListener('click', () => {
    botonPresionado(clear);
});
deleteButton.addEventListener('click', () =>{
    botonPresionado(deleteButton);
});
