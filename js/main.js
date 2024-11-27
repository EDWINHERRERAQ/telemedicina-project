document.getElementById('registroPaciente').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    let nombre = document.getElementById('nombre').value.trim();
    let edad = document.getElementById('edad').value.trim();
    let email = document.getElementById('email').value.trim();

    // Validar campos (simple)
    if (!nombre || !edad || !email) {
        document.getElementById('mensaje').innerText = "Todos los campos son obligatorios.";
        return;
    }

    // Enviar datos al servidor (simulación)
    fetch('/api/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, edad, email })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('mensaje').innerText = data.mensaje;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
