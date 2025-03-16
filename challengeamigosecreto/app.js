//Funciones de la aplicacción 

let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(nombre)) {
        nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
        
        if (!listaAmigos.includes(nombre)) {
            listaAmigos.push(nombre);
            actualizarListaAmigos();
            input.value = "";
        } else {
            alert("El nombre ya está en la lista.");
        }
    } else {
        alert("Ingrese un nombre válido que contenga solo letras.");
    }
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 1) {
        alert("Agrega al menos un amigo para realizar el sorteo.");
        return;
    }
    
    let elegido = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    mostrarResultado(`El amigo secreto es: ${elegido}`);
}

function mostrarResultado(mensaje) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = mensaje;
    listaResultado.appendChild(li);
}
