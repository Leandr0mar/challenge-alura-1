// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosGuardados = [];

function colocarTexto(selector, contenido) {
    let elemento = document.querySelector(selector);
    elemento.innerHTML = contenido;
    return;
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre === '') {
        alert('Ingresa un nombre válido, por favor');
    } else {
        amigosGuardados.push(nombre);
        mostrarLista();
        borrarEntrada();
    }
    return;
}

function borrarEntrada() {
    document.getElementById('amigo').value = '';
}

function mostrarLista() {
    let zonaLista = document.getElementById('listaAmigos');
    zonaLista.innerHTML = '';
    for (let i = 0; i < amigosGuardados.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.innerHTML = amigosGuardados[i];
        zonaLista.appendChild(elementoLista);
    }
}

function sortearAmigo() {
    if (amigosGuardados.length === 0) {
        colocarTexto('#resultado', 'No hay amigos para elegir');
    } else {
        let posicionAleatoria = Math.floor(Math.random() * amigosGuardados.length);
        let amigoElegido = amigosGuardados[posicionAleatoria];
        colocarTexto('#resultado', `Tu amigo secreto es: ${amigoElegido}`);
    }
    return;
}

function Inicio() {
    colocarTexto('#resultado', '');
    amigosGuardados = [];
    mostrarLista();
    borrarEntrada();
}

Inicio();