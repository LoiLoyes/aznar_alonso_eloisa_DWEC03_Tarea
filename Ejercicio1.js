/*1. Crea la siguiente aplicación JavaScript: Una página con un botón que al hacer click abre una ventana de tamaño 600 X 400, 
en la ventana se escribirá la frase "Hoy es dia/mes/año y faltan XX días para fin de año", siendo día, mes, y año , 
los actuales obtenidos a partir del objeto Date.*/

// Hacemos una variable que "capture" el botón del html usando su ID:
let boton = document.getElementById('boton');

// Creamos el evento que al hacer click en el botón suceda todo lo que vamos a hacer a continuación dentro.
boton.addEventListener ('click', () => {
    // Haremos contantes (const) ya que son elementos que no van ha cambiar su valor.
    // Creamos un objeto Date en una constante para recoger la fecha actual.
    const fechaActual = new Date();

    // Hacemos las constantes para capturar el día, mes y año usando la fechaActual, ya que lo necesitaremos para imprimir la fecha como se nos pide en el ejercicio.
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;  // Aquí se suma 1 ya que "getMonth()" cuenta el mes de enero como 0 y queremos que se muestre bien el mes de forma correcta al imprimir la fecha.
    const anio = fechaActual.getFullYear();

    /* Hacemos la constante fechaFinAnio para poder hacer el cálculo de cuantos días quedan para que sea fin de año.
    Dentro de la constante hacemos un nuevo objeto Date y utilizamos el "const anio" para sacar el año y que el programa sirva para cualquier año. 
    Si pusieramos un año concreto los proximos años no serviría de nada el programa.*/
    const fechaFinDeAnio = new Date(anio,11,31); //Ponemos 11 ya que el mes va de 0 (enero) a 11 (diciembre).

    /* Hacemos una constante que recoja la resta de la fecha de fin de año y la fecha actual.
    En clase dimos que el objeto Date funciona en milisegundos, así que esta constante recogerá el resultado en milisengundos*/
    const resultadoMilisegundos = fechaFinDeAnio - fechaActual;

    /* Dicho lo anterior ahora transformaremos ese resultado a días, ya que se nos pide cuantos días faltan para fin de año.
    Dividimos el resultadoMilisegundos entre la operación que vamos a realizar para pasar los milisegundos a días.
    1000 milisegundos es un segundo, así que lo ponemos, multiplicamos por 60 ya que 60 segundos es un minuto, 
    multiplicamos de nuevo por 60 porque una hora son 60 minutos y finalmente multiplicamos por 24 ya que 24 horas es un día*/
    const resultadoDias = Math.ceil(resultadoMilisegundos / (1000 * 60 * 60 * 24)); // Usamos Math.ceil para que redondée hacia arriba el día, y evitar decimales.
    
    /* Creamos una nueva ventana usando window.open y escribimos las especificaciones que se nos piden respecto al tamaño 600x400, 
    el nombre de la ventana que se creará .html e indicando que es nueva. */
    const nuevaVentana = window.open("NuevaVentana.html","nueva","height=600,width=400");

    // Utilizamos la constante de la nuevaVentana para hacerle un document.write y dentro hacerle el html para que nos de la frase con los cáculos realizados.
    // Usamos la frase que se nos pide y ponemos la fecha actual con las constantes que hemos realizado y usamos resultadoDias para que muestre cuantos días faltan para fin de año.
    nuevaVentana.document.write(`
        <html>
            <head><title>Nueva Ventana</title></head>
            <style>
                body {
                    background-color: rgb(247, 149, 146);
                }

                p {
                    width: auto;
                    height: auto;
                    border-radius: 10px;
                    padding: 10px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    font-size: x-large;
                    color: white;
                    text-align: center;
                    background-color: rgb(64, 133, 251);
                }
            </style>
            <body>
                <p>Hoy es <strong>${dia}/${mes}/${anio}</strong> y faltan <strong>${resultadoDias}</strong> días para fin de año</p>
            </body>
        </html>
    `);
});