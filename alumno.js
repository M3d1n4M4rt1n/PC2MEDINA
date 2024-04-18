// Aquí puedes poner tu código JavaScript para el dashboard del alumno
document.getElementById('encuesta').addEventListener('submit', function(e) {
    e.preventDefault();
    const opcionSeleccionada = document.querySelector('input[name="profesor"]:checked');
    if (opcionSeleccionada) {
      const profesorSeleccionado = opcionSeleccionada.value;
      if (profesorSeleccionado === 'Franccesco De La Rosa') {
        document.getElementById('mensaje').style.display = 'block';
        document.getElementById('cursos').style.display = 'block';
      } else {
        alert('¿Estás seguro? Por favor selecciona al profe favorito correcto...');
      }
    } else {
      alert('Por favor selecciona a tu profe favorito.');
    }
  });
// Aquí puedes poner tu código JavaScript para el dashboard del alumno
document.getElementById('encuesta').addEventListener('submit', function(e) {
    e.preventDefault();
    const opcionSeleccionada = document.querySelector('input[name="profesor"]:checked');
    const nombre = document.getElementById('nombre').value;
    if (opcionSeleccionada && nombre) {
      const profesorSeleccionado = opcionSeleccionada.value;
      if (profesorSeleccionado === 'Franccesco De La Rosa') {
        document.getElementById('mensaje').style.display = 'block';
        document.getElementById('nombreSpan').innerText = nombre;
        document.getElementById('cursos').style.display = 'block';
        document.getElementById('encuesta').style.display = 'none'; // Oculta el formulario
      } else {
        alert('¿Estás seguro? Por favor selecciona al profe favorito correcto...');
      }
    } else {
      alert('Por favor completa tu nombre y selecciona a tu profe favorito.');
    }
  });
  
    