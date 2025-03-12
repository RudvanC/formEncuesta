document.addEventListener('DOMContentLoaded', function() {
    cargarSeccion('seccion1.html, seccion2.html, seccion3.html');
});

function cargarSeccion(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const containerId = url.split('.')[0];
            document.getElementById(containerId).innerHTML = data;

            // Ejecutar el script específico de la sección
            const script = document.createElement('script');
            script.src = url.split('.')[0] + '.js';
            document.body.appendChild(script);
        });
}

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Encuesta enviada con éxito');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar la encuesta');
    });
});

