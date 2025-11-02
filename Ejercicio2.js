/*2. Vamos utilizar nuestros conocimientos de manipulación de cadenas en javascript, para crear un algoritmo de compresión de cadenas. 
El algoritmo consiste en sustituir rachas de caracteres repetidos por el número de repeticiones seguido del carácter. 
El algoritmo sólo actúa con cadenas de caracteres del alfabeto, por lo que arrojará un mensaje de error en caso de que la cadena contenga números. 
Si admite espacios, en cuyo caso se sustituirá el espacio por una interrogación "?". */

// FUNCIÓN DE COMPRESIÓN.
// a). Crea una función de compresión que recibe la cadena y devuelve la cadena comprimida.

// Hacemos las variables que recogerán lo que necesitemos del DOM.
let botonComprimir = document.getElementById('botonComprimir');
let campoComprimir = document.getElementById('comprimir');
let contenidoComprimido = document.getElementById('contenidoComprimido');

// Creamos el evento del botón de compresión de cadenas.
botonComprimir.addEventListener('click', () => {
    // Convierte la cadena que introduce el usuario en el campo a comprimir, en un array.
    let cadena = campoComprimir.value;

    /* Validamos si contiene números con una expresión regular ya que isNaN solo valoraría si es un número en su totalidad
    y no verificaría bien que cada carácter no sea un número. Para ello usamos \d que es cualquier dígito entre el 0 y el 9. 
    Se pone entre las barras "/ /" ya que así se indica que es una expresión regular, si no, no funcionaría.
    Usamos .test para testear la cadena y devuelve true si encuentra al menos un número*/
    if (/\d/.test(cadena)) {
        contenidoComprimido.textContent = 'Error: la cadena no puede contener números.';  // Nos da el mensaje de error si encuentra un número.
        return; // Retorna para que podamos introducir otra cadena válida.
    }

    // Volvemos a utilizar expresiones regulares para indicar un espacio y así con .replace poder cambiarlo por "?".
    cadena = cadena.replace(/ /g, '?'); // Se pone esa g que significa "global" para que tenga en cuenta todos los espacios que aparezcan.

    // Procedemos a comprimir la cadena, hacemos una variable que alojará el resultado y otra que cuente los carácteres repetidos.
    let resultado = '';
    let contadorCaracteres = 1; // Iniciamos en 1 ya que siempre va a haber 1 carácter a la hora de recorrer el array.

    // Con el bucle for recorremos el array de la cadena limitando el bucle hasta la longitud del propio array para que no dé fallo.
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === cadena[i + 1]) {     // Si el primer carácter es igual al segundo carácter.
            contadorCaracteres++;              // Contabiliza ese carácter.
        } else {                               // Si no son iguales.
            if (contadorCaracteres > 1) {      // Comprobamos que el contador sea mayor a 1. 
                resultado += contadorCaracteres + cadena[i];  //Si es así almacena el número del contador más el carácter en cuestión.
            } else {
                resultado += cadena[i];        // Si no es mayor a 1 quiere decir que solo hay un carácter, así que almacenamos dicho carácter.
            }
            contadorCaracteres = 1; // Reiniciamos el contador para el siguiente carácter.
        }
    }   // Una vez terminado el bucle alojamos el resultado en la parte del DOM que hemos destinado a ello.
        contenidoComprimido.textContent = `${resultado}`; 
});
        

//FUNCIÓN DE DESCOMPRESIÓN.
// b). Crea una función de descompresión que recibe una cadena en formato comprimido y devuelve la cadena original.
// Creamos las variables necesarias para manejar el DOM como antes.
let botonDescomprimir = document.getElementById('botonDescomprimir');
let campoDescomprimir = document.getElementById('descomprimir');
let contenidoDescomprimido = document.getElementById('contenidoDescomprimido');

// Creamos el evento del botón.
botonDescomprimir.addEventListener('click', () => {
    // Hacemos el array de la cadena y la variable que alojará el resultado.
    let cadena2 = campoDescomprimir.value;
    let resultado2 = '';

    // Hacemos el bucle for que recorrerá el array de la cadena.
    for (let i = 0; i < cadena2.length; i++) {
        let caracter = cadena2[i];  // Hacemos una variable que aloje el carácter que se está tratando en ese momento para poder manejarlo mejor.
        // Si ese carácter es un número (usamos el is Not a Number con la "!" delante, ya que lo pone en false, para comprobar que es un número).
        if (!isNaN(caracter)) {
            let repeticiones = parseInt(caracter); // Hacemos una variable que aloje dicho número, el cual son las repeticiones del carácter.
            let letra = cadena2[i+1];              /* Hacemos otra variable para recoger la letra que sigue al número, 
                                                    usando la siguiente posición del array de la cadena "[i+1]" */
            /* teniendo las variables anteriores, queremos que la letra se escriba tantas veces como el número de repeticiones, para ello hacemos
            un bucle for que itere tantas veces como repeticiones hay.*/
            for (let j = 0; j < repeticiones; j++) {
                resultado2 += letra;              // Se irá alojando en el resultado2 la letra en cuestión tantas veces como repeticiones haya.
            };

            i++ // La letra que sigue al número ya la hemos cogido así que usamos esto para pasar a analizar el siguiente carácter.
        
        } else if (caracter === '?') {  // Si el carácter es una "?" lo convertimos en un espacio. y se aloja ese espacio en la variable resultado.         
            resultado2 += ' ';
        } else {                        // Si el carácter no es un número ni una "?" se aloja dicho carácter en la variable resultado.
            resultado2 += caracter;
        }; 
    };
        // Una vez terminado el bucle alojamos el resultado en la parte del DOM que hemos destinado a ello.
        contenidoDescomprimido.textContent = `${resultado2}`; 
});