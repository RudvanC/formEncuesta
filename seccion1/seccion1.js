document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formSeccion1');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

            // Recopilar datos del formulario
            const formData = new FormData(form);
            const datos = {};
            formData.forEach((value, key) => {
                datos[`seccion1_${key}`] = value; // Agregar prefijo "seccion1_"
            });

            // Guardar datos en localStorage
            localStorage.setItem('datosSeccion1', JSON.stringify(datos));

            // Redirigir a la siguiente sección
            window.location.href = '/seccion2/seccion2.html'; // Ruta corregida
        });
    } else {
        console.error('El formulario con ID "formSeccion1" no fue encontrado.');
    }
});