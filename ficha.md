Nombre:<br>
Fecha de nacimiento:<br>
Lugar:<br>
Archivo localizado <!-- Rounded switch -->
<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label> 
Permiso concedido SI/ NO

| COLUMNA 1                                                                                                                                           | COLUMNA 2                                                                                 | COLUMNA 3                                                                                                                                                      |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Entidad negativa anclada<br>Entidad acechante<br>Influencia de vida simultánea<br>Coraza-Fachada<br>Espejo de luz<br>Calcificación física - toxinas | Maldición<br>Pacto<br>Atadura<br>Hechizo<br>Enganche<br>Cuerda<br>Programación mental     | Forma de pensamiento negativa<br>Rayo rojo - ataque psíquico<br>Promesa<br>Contrato kármico<br>Conexión compasiva<br>Taponamiento energético<br>Karma residual |
| Trauma - Fobia<br>Problema subconsciente<br>Firewall<br>Guías negativos<br>Enganche red negativa<br>Otros<br><br><br>Basta de momento               | Desencarnado<br>Fantasma<br>Poltergeist<br>Implante<br>Portal dimensional<br>Problema ADN | Chakra desbalanceado<br>Fuga energética<br>Impresión<br>Creencia<br>Ilusión<br>Patrón de conducta<br>Cordón dorado dañado                                      |                                   |


Lista de bloqueos:


/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
