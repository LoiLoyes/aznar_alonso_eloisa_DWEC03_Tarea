/* 4. Utiliza el método setTimeout para realizar una redirección de la página a otra que tu elijas, 
pasados 3 segundos desde la carga de la página. */

// Hacemos una función que redirija a la página que hemos elegido usando el método location.href.
function redireccion() {
location.href = "https://makeameme.org/meme/felicitaciones-hiciste";
};

// Usamos el método setTimeout para llamar a la función redireccion y ponemos 3000 ya que está en milisegundos, así serían 3 segundos.
setTimeout(redireccion, 3000);