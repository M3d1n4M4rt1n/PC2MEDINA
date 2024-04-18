const profesorBtn = document.getElementById('profesorBtn');
const alumnoBtn = document.getElementById('alumnoBtn');
const loginForm = document.getElementById('loginForm');

profesorBtn.addEventListener('click', () => {
    loginForm.style.display = 'block';
    loginForm.dataset.role = 'profesor';
});

alumnoBtn.addEventListener('click', () => {
    loginForm.style.display = 'block';
    loginForm.dataset.role = 'alumno';
});

document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const role = loginForm.dataset.role;

    // Verificar las credenciales según el rol seleccionado
    if (role === 'profesor') {
        if (username === 'Profesor1' && password === '123456') {
            // Credenciales correctas para el profesor
            window.location.href = 'dashboard_profe.html';
        } else {
            // Credenciales incorrectas para el profesor
            alert('Usuario o contraseña incorrectos para profesor.');
        }
    } else if (role === 'alumno') {
        if (username === 'Martin' && password === 'estudianteuch2024') {
            // Credenciales correctas para el alumno
            window.location.href = 'dashboard_alumno.html';
        } else {
            // Credenciales incorrectas para el alumno
            alert('Usuario o contraseña incorrectos para alumno.');
        }
    }
});
