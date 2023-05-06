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

  function crearBotonesPerfil() {
    var perfiles = obtenerPerfiles(); // leer los datos de la cookie
    var perfilList = document.getElementById("perfil-list");
  
    // borrar botones existentes antes de volver a crearlos
    while (perfilList.firstChild) {
      perfilList.removeChild(perfilList.firstChild);
    }
  
    // crear botones para cada perfil
    for (var i = 0; i < perfiles.length; i++) {
      var perfil = perfiles[i];
      var button = document.createElement("button");
      button.textContent = perfil.nombre + " (" + perfil.genero + ", " + perfil.fechaNacimiento + ")";
      button.setAttribute("data-nombre", perfil.nombre);
      button.setAttribute("data-genero", perfil.genero);
      button.setAttribute("data-fechaNacimiento", perfil.fechaNacimiento);
  
      // añadir evento click al botón
      button.addEventListener("click", function() {
        var nombre = this.getAttribute("data-nombre");
        var genero = this.getAttribute("data-genero");
        var fechaNacimiento = this.getAttribute("data-fechaNacimiento");
        
        // rellenar los campos del formulario con la información del perfil seleccionado
        document.getElementById("nombre").value = nombre;
        document.getElementById("genero").value = genero;
        document.getElementById("fechaNacimiento").value = fechaNacimiento;
      });
  
      perfilList.appendChild(button);
    }
  }function obtenerPerfiles() {
    const perfilesCookie = document.cookie.split('; ').find(row => row.startsWith('perfiles='));
    if (!perfilesCookie) {
      return {};
    }
  
    const perfilesString = decodeURIComponent(perfilesCookie.split('=')[1]);
    const perfiles = JSON.parse(perfilesString);
    return perfiles;
  }

  function realizarPeticiones(problemas) {
    let index = 0;
  
    function cargarPagina() {
      if (index >= problemas.length) {
        console.log("Se han resuelto todos los problemas.");
        return;
      }
  
      const problema = problemas[index];
      const pagina = obtenerPagina(problema); // función que devuelve la URL de la página correspondiente al problema
      // cargar la página en una ventana nueva o en un iframe
      // ...
  
      // mostrar los botones de "sanado" y "omitir"
      const sanadoButton = document.createElement('button');
      sanadoButton.textContent = "Sanado";
      sanadoButton.addEventListener('click', function() {
        eliminarProblema(problema);
        cargarPagina();
      });
  
      const omitirButton = document.createElement('button');
      omitirButton.textContent = "Omitir";
      omitirButton.addEventListener('click', function() {
        // guardar el problema en una lista de problemas omitidos para realizar en otro momento
        // ...
        cargarPagina();
      });
  
      const moverAlFinalButton = document.createElement('button');
      moverAlFinalButton.textContent = "Mover al final";
      moverAlFinalButton.addEventListener('click', function() {
        problemas.push(problema);
        eliminarProblema(problema);
        cargarPagina();
      });
  
      // agregar los botones al DOM
      const botonesContainer = document.createElement('div');
      botonesContainer.appendChild(sanadoButton);
      botonesContainer.appendChild(omitirButton);
      botonesContainer.appendChild(moverAlFinalButton);
      document.body.appendChild(botonesContainer);
    }
  
    cargarPagina();
  }

  // Definir la lista de páginas de petición
const listaPaginas = ['pagina1.html', 'pagina2.html', 'pagina3.html', ...];

// Definir el array de problemas
let problemas = ['Entidades negativas ancladas o acechantes', 'Maldición', 'Trauma/Fobia', ...];

// Función para cargar la siguiente página
function cargarPagina(pagina) {
  // Aquí se cargaría la página en el contenido principal del sitio
  console.log('Cargando página:', pagina);
}

// Función para manejar la resolución del problema
function resolverProblema(problema, resuelto) {
  if (resuelto) {
    // Eliminar el problema del array
    problemas = problemas.filter(item => item !== problema);
  } else {
    // Agregar el problema a la lista de pendientes
    pendientes.push(problema);
  }

  // Cargar la siguiente página, a menos que este sea el último problema
  if (problemas.length > 0) {
    const siguientePagina = listaPaginas.shift();
    cargarPagina(siguientePagina);
  }
}

// Cargar la primera página
const primeraPagina = listaPaginas.shift();
cargarPagina(primeraPagina);