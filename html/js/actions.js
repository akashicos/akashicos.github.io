// Puedes agregar validaciones adicionales o enviar los datos del formulario a una base de datos.

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Aquí puedes agregar la lógica para enviar los datos del formulario a una base de datos o hacer cualquier otra acción necesaria.
});

function cambiarPronombres() {
    const genero = document.getElementById('genero').value;
    const pronombre1 = (genero === 'masculino') ? 'él' : 'ella';
    const pronombre2 = (genero === 'masculino') ? 'su' : 'su';
  
    document.querySelectorAll('.pronombre-1').forEach((elemento) => {
      elemento.innerText = pronombre1;
    });
  
    document.querySelectorAll('.pronombre-2').forEach((elemento) => {
      elemento.innerText = pronombre2;
    });
  }

  function guardarDatos() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var sexo = document.getElementById("sexo").value;
    var problema = document.getElementById("problema").value;
    
    // Crear un objeto con los valores del formulario
    var datos = {
      "nombre": nombre,
      "email": email,
      "sexo": sexo,
      "problema": problema
    };
    
    // Convertir el objeto a una cadena de texto JSON
    var datosJSON = JSON.stringify(datos);
    
    // Almacenar la cadena JSON en una cookie
    document.cookie = "datos=" + datosJSON;
  }

  function readCookie(){
    // Obtener el valor de la cookie "datos"
var datosCookie = document.cookie.replace(/(?:(?:^|.*;\s*)datos\s*\=\s*([^;]*).*$)|^.*$/, "$1");

// Convertir la cadena JSON a un objeto
var datos = JSON.parse(datosCookie);

// Mostrar los valores en la página
document.getElementById("nombre").innerHTML = datos.nombre;
document.getElementById("email").innerHTML = datos.email;
document.getElementById("sexo").innerHTML = datos.sexo;
document.getElementById("problema").innerHTML = datos.problema;
  }

  function eliminarProblema(problema) {
    // Obtener el valor actual de la cookie
    var datosCookie = document.cookie.replace(/(?:(?:^|.*;\s*)datos\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  
    // Convertir la cadena JSON a un objeto
    var datos = JSON.parse(datosCookie);
  
    // Eliminar el problema especificado de los datos
    delete datos.problema[problema];
  
    // Convertir el objeto a una cadena de texto JSON
    var datosJSON = JSON.stringify(datos);
  
    // Almacenar la cadena JSON en la cookie nuevamente
    document.cookie = "datos=" + datosJSON;
  }