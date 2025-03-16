# Desafío Amigo Secreto de Oracle ONE

Este proyecto es una aplicación web sencilla para realizar un sorteo de "Amigo Secreto". Permite a los usuarios ingresar nombres de amigos y al darle clic al botón "Sortear Amigos" de manera aleatoria muestra quien es el amigo secreto.

## Características
- Agregar nombres de amigos a una lista.
- Validar que los nombres ingresados contengan solo letras y comiencen con mayúscula.
- Seleccionar un amigo secreto de manera aleatoria.
- Mostrar el resultado en la pantalla.

## Tecnologías Utilizadas
- **HTML**: Estructura de la página.
- **CSS**: Estilos y diseño de la interfaz.
- **JavaScript**: Lógica para manejar la lista de amigos y el sorteo.

## Uso
1. Ingresar el nombre de un amigo en el campo de texto.
2. Presionar el botón "Añadir" para agregarlo a la lista.
3. Cuando ya este la lista de los nombre de los amigos, presionar "Sortear amigo" para obtener un amigo secreto.
4. El resultado se mostrará en la pantalla, donde indica el amigo secreto en color verde.

## Funciones principales
- `agregarAmigo()`: Añade un nombre a la lista asegurando que solo contenga letras y que la primera letra sea mayúscula.
- `actualizarListaAmigos()`: Refresca la lista en la interfaz para mostrar los nombres ingresados.
- `sortearAmigo()`: Selecciona un amigo de manera aleatoria y muestra el resultado en pantalla.
- `mostrarResultado(mensaje)`: Muestra el mensaje del resultado del sorteo en la interfaz, resaltado en color verde.

## Archivos Principales
- `index.html`: Contiene la estructura principal de la aplicación.
- `style.css`: Define los estilos de la página.
- `app.js`: Contiene la lógica del programación

## Requisitos
Navegador web compatible con JavaScript y el archivo fuente del código

