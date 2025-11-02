// 3. Crea una pequeña interfaz con un botón que cada vez que el usuario hace click haya un contador en pantalla con el número de clicks acumulado. 

// Creamos las variables necesarias para manejar el DOM.
let boton = document.getElementById('boton');
let numero = document.getElementById('numero');

// Creamos la variable contadorClicks para recuperar el valor del contador almacenado en localStorage haciendo uso de getItem.
// Así cuando volvamos a cargar la página el contador no se reinicia a 0 sino que continúa desde el valor almacenado.
let contadorClicks = parseInt(localStorage.getItem('contadorClicks'));

/* Validamos si el valor recuperado no es un número, es decir, si no se ha hecho ningún click no hay ningún número, y por ende indicamos que
la variable contadorClick debe inicializarse 0, para que aparezca el 0 al entrar por primera vez en la página.*/
if (isNaN(contadorClicks)) {
  contadorClicks = 0;
}

// Mostramos el valor inicial del contador en el DOM, así aparece el valor correcto al cargar la página, ya sea 0 o el valor almacenado.
numero.textContent = contadorClicks;

// Creamos el evento del botón.
boton.addEventListener('click', () => {
    /* b) Si utilizamos una variable de tipo number para manipular el contador, llegará un momento en el que alcancemos el mayor entero con el que 
    javascript es capaz de realizar operaciones de forma segura, alcanzado este número ya no aumentará el contador 
    y aparecerá un mensaje de alerta "Ya no se pueden realizar más clicks".*/
    if (contadorClicks >= Number.MAX_SAFE_INTEGER) {  // Usamos el Number.MAX_SAFE_INTEGER para comprobar si hemos alcanzado el mayor entero seguro.
        alert("Ya no se pueden realizar más clicks"); // Mostramos la alerta.
        return; // Salimos de la función para evitar que siga aumentando
    }
    
    contadorClicks++;                                        // Cada vez que se clicka el botón se incrementa el contador en 1.
    numero.textContent = contadorClicks;                     // Se muestra el valor actualizado del contador en el DOM con cada click. 
    
    /* Por último almacenamos el valor actualizado del contador usando el setItem en localStorage para que no se pierda al recargar la página.
    Para ello se usa la clave 'contadorClicks' y el valor de la variable contadorClicks.*/
    localStorage.setItem('contadorClicks', contadorClicks);  
});