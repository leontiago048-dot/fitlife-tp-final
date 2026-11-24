function cambiarSeccion(idSeccion) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));

  document.getElementById(idSeccion).classList.add('active');
  if (typeof event !== 'undefined' && event.target) {
    event.target.classList.add('active');
  }
}

// Función pura aislada para la lógica de validación (ideal para tests unitarios)
function validarEntrenamiento(entrenamiento) {
  if (!entrenamiento.nombre || entrenamiento.nombre.trim() === '') {
    return { valido: false, mensaje: 'El nombre es obligatorio.' };
  }
  if (entrenamiento.duracion <= 0 || isNaN(entrenamiento.duracion)) {
    return { valido: false, mensaje: 'La duración debe ser mayor a 0.' };
  }
  if (entrenamiento.calorias < 0 || isNaN(entrenamiento.calorias)) {
    return { valido: false, mensaje: 'Las calorías no pueden ser negativas.' };
  }
  return { valido: true, mensaje: 'Entrenamiento válido.' };
}

// Lógica de Entrenamientos
function agregarEntrenamiento() {
  const datos = {
    nombre: document.getElementById('nombre-entreno').value,
    tipo: document.getElementById('tipo-ejercicio').value,
    duracion: Number(document.getElementById('duracion').value),
    calorias: Number(document.getElementById('calorias').value)
  };

  const resultado = validarEntrenamiento(datos);
  if (!resultado.valido) {
    alert(resultado.mensaje);
    return;
  }

  const contenedor = document.getElementById('lista-entrenamientos');
  const item = document.createElement('div');
  item.className = 'list-item';
  item.innerHTML = `<div><strong>${datos.nombre}</strong> (${datos.tipo})<br><small>${datos.duracion} min - ${datos.calorias} kcal</small></div><span>Completado ☑</span>`;
  contenedor.prepend(item);

  document.getElementById('nombre-entreno').value = '';
  document.getElementById('duracion').value = '';
  document.getElementById('calorias').value = '';
}

// Lógica de Alimentación
function agregarComida() {
  const comida = document.getElementById('comida').value;
  const calorias = document.getElementById('calorias-comida').value;

  if (!comida || !calorias) {
    alert('Complete los datos de la comida.');
    return;
  }

  const contenedor = document.getElementById('lista-comidas');
  const item = document.createElement('div');
  item.className = 'list-item';
  item.innerHTML = `<div><strong>${comida}</strong><br><small>${calorias} kcal</small></div>`;
  contenedor.prepend(item);

  document.getElementById('comida').value = '';
  document.getElementById('calorias-comida').value = '';
}

// Lógica de Progreso
function guardarProgreso() {
  const peso = document.getElementById('peso-actual').value;
  const objetivo = document.getElementById('objetivo-usuario').value;

  if (!peso) {
    alert('Ingrese su peso actual.');
    return;
  }

  document.getElementById('val-peso').innerText = peso;
  document.getElementById('val-objetivo').innerText = objetivo;
  alert('Progreso actualizado con éxito.');
}

// Lógica de Rutinas
function crearRutina() {
  const nombre = document.getElementById('nombre-rutina').value;
  const detalle = document.getElementById('detalle-rutina').value;

  if (!nombre || !detalle) {
    alert('Complete los datos de la rutina.');
    return;
  }

  const contenedor = document.getElementById('lista-rutinas');
  const item = document.createElement('div');
  item.className = 'list-item';
  item.innerHTML = `<div><strong>${nombre}</strong><br><small>${detalle}</small></div>`;
  contenedor.prepend(item);

  document.getElementById('nombre-rutina').value = '';
  document.getElementById('detalle-rutina').value = '';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { validarEntrenamiento };
}
