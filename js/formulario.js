//FORMULARIO DE CONFIRMACION


const cantidadSelect = document.getElementById("cantidad");
const contenedor = document.getElementById("formularios");

function crearFormulario(index) {
  return `
    <div class="card">
      <h4>Invitado ${index + 1}</h4>

      <input type="text" placeholder="Nombre *" required>
      <input type="text" placeholder="Apellido *" required>

      <label>¿Confirmas tu asistencia? *</label>
      <div>
        <label>
          <input type="radio" name="asistencia_${index}" value="si" required> ¡Confirmo!
        </label><br>
        <label>
          <input type="radio" name="asistencia_${index}" value="no"> No podré asistir
        </label>
      </div>

      <label>¿Algún requerimiento en la alimentación?</label>
      <select>
        <option>Ninguno</option>
        <option>Vegetariano</option>
        <option>Vegano</option>
        <option>Sin TACC</option>
      </select>

      <input type="text" placeholder="¿Qué canción no puede faltar?">
    </div>
  `;
}

function generarFormularios() {
  const cantidad = parseInt(cantidadSelect.value);
  contenedor.innerHTML = "";

  for (let i = 0; i < cantidad; i++) {
    contenedor.innerHTML += crearFormulario(i);
  }
}

// Evento cuando cambia la cantidad
cantidadSelect.addEventListener("change", generarFormularios);

// Inicial
generarFormularios();
