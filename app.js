// Declaramos el array vacío para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Captura el valor del input
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Valida que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agrega el nombre al array de amigos
    amigos.push(nombre);

    // Limpia el campo de entrada
    input.value = '';

    // Actualiza la lista en pantalla
    mostrarLista();
}

// Función para mostrar la lista actualizada de amigos
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');

    // Limpia el contenido actual de la lista
    lista.innerHTML = '';

    // Recorre el array y crea los elementos <li>
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Valida que haya amigos en la lista
    if (amigos.length === 0) {
        alert('Debe agregar al menos un amigo antes de sortear.');
        return;
    }

    // Genera un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtiene el nombre correspondiente al índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Muestra el resultado en pantalla
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

