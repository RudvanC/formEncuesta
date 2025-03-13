function mostrarValor(valor) {
    // Actualiza el valor numérico
    document.getElementById("valorRango").textContent = valor;

    // Muestra un mensaje descriptivo según el valor
    const mensaje = document.getElementById("mensajeCalificacion");
    if (mensaje) {
        switch (valor) {
            case "1":
                mensaje.textContent = " - Muy Malo";
                break;
            case "2":
            case "3":
                mensaje.textContent = " - Malo";
                break;
            case "5":
            case "6":
            case "7":
                mensaje.textContent = " - Bueno";
                break;
            case "8":
            case "9":
                mensaje.textContent = " - Muy Bueno";
                break;
            case "10":
                mensaje.textContent = " - Excelente";
                break;
            default:
                mensaje.textContent = "";
        }
    } else {
        console.error("Elemento 'mensajeCalificacion' no encontrado");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formSeccion2');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

            // Obtén los valores de los campos
            const producto = document.getElementById('producto').value.trim();
            const fechaCompra = document.getElementById('fechaCompra').value;
            const recibo = document.getElementById('recibo').files[0];
            const comentarios = document.getElementById('comentarios').value.trim();
            const calificacion = document.getElementById('calificacion').value;

            // Validar que todos los campos estén llenos
            let valido = true;

            if (producto === "") {
                alert("Por favor, ingresa el nombre del producto.");
                valido = false;
            }

            if (fechaCompra === "") {
                alert("Por favor, selecciona la fecha de compra.");
                valido = false;
            }

            if (!recibo) {
                alert("Por favor, sube un archivo de recibo.");
                valido = false;
            }

            if (comentarios === "") {
                alert("Por favor, escribe tus comentarios.");
                valido = false;
            }

            if (!valido) {
                return; // Detener el envío si la validación falla
            }

            // Guardar datos en localStorage
            const datosSeccion2 = {
                producto,
                fechaCompra,
                calificacion,
                comentarios,
                reciboNombre: recibo.name, // Guardar solo el nombre del archivo
            };
            localStorage.setItem('datosSeccion2', JSON.stringify(datosSeccion2));

            // Redirigir a la siguiente sección
            window.location.href = '/seccion3/seccion3.html';
        });
    } else {
        console.error('El formulario con ID "formSeccion2" no fue encontrado.');
    }
});