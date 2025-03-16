/ El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const ingresarNombre = document.getElementById('amigo');
    const nombreDeAmigo = ingresarNombre.value.trim(); 

    if (!nombreDeAmigo) {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    amigos.push(nombreDeAmigo);
    ingresarNombre.value = '';
    ingresarNombre.focus();
    mostrarAmigos();
}

function mostrarAmigos() {
    const listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaDeAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indice, 1)[0];

    document.getElementById("resultado").textContent = `El amigo sorteado es: ${amigoSorteado}`;
    mostrarAmigos();

    if (amigos.length === 0) {
        setTimeout(() => alert("Ya se sortearon todos los amigos de la lista"), 600);
    }
}
