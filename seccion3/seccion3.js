document.addEventListener('DOMContentLoaded', function() {
    reiniciarSeccion3();

    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const zodiacoSelect = document.getElementById('zodiaco');
    const colorFavoritoInput = document.getElementById('colorFavorito');

    if (fechaNacimientoInput && zodiacoSelect && colorFavoritoInput) {
        zodiacoSelect.disabled = true;

        fechaNacimientoInput.addEventListener('input', function(event) {
            this.value = formatearFecha(this.value);
        });

        fechaNacimientoInput.addEventListener('change', function() {
            const fechaIngresada = this.value;
            const fechaValida = validarFecha(fechaIngresada);

            if (fechaValida) {
                const [dia, mes] = fechaIngresada.split('/').map(Number);

                let zodiaco = '';

                if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) { zodiaco = 'aries'; }
                else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) { zodiaco = 'tauro'; }
                else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) { zodiaco = 'geminis'; }
                else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) { zodiaco = 'cancer'; }
                else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) { zodiaco = 'leo'; }
                else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) { zodiaco = 'virgo'; }
                else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) { zodiaco = 'libra'; }
                else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) { zodiaco = 'escorpio'; }
                else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) { zodiaco = 'sagitario'; }
                else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) { zodiaco = 'capricornio'; }
                else if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) { zodiaco = 'acuario'; }
                else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) { zodiaco = 'piscis'; }

                zodiacoSelect.value = zodiaco;
                colorFavoritoInput.focus(); // Mueve el foco al color
            } else {
                alert('Por favor, ingresa una fecha válida en formato DD/MM/AAAA');
                zodiacoSelect.value = '';
                fechaNacimientoInput.value = '';
            }
        });
    }
});

function reiniciarSeccion3() {
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('zodiaco').value = '';
    document.getElementById('colorFavorito').value = '#000000'; // Restablece el color a negro (o cualquier otro valor predeterminado)
    document.querySelector('select[name="servicioCliente"]').value = 'excelente'; // Restablece a la primera opción
    document.querySelectorAll('input[name="recomendar"]').forEach(radio => radio.checked = false);
    document.getElementById('mejoras').value = '';
    document.querySelectorAll('input[name="caracteristicas"]').forEach(checkbox => checkbox.checked = false);
}

function validarFecha(fecha) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(fecha)) return false;
    
    const [dia, mes, anio] = fecha.split('/').map(Number);
    const diasPorMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Corregido: febrero tiene 28 días por defecto
    
    if (anio < 1000 || anio > 3000 || mes < 1 || mes > 12 || dia < 1 || dia > 31) return false;
    
        // Ajuste para años bisiestos
    if (mes === 2 && ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0)) {
        diasPorMes[2] = 29; // Febrero tiene 29 días en años bisiestos
    }
    
    if (dia > diasPorMes[mes]) return false;
    
    return true;
    
}

function formatearFecha(fecha) {
    let numeros = fecha.replace(/\D/g, ''); // Elimina caracteres no numéricos
    let formateada = '';

    if (numeros.length > 0) {
        formateada += numeros.substring(0, 2);
    }
    if (numeros.length > 2) {
        formateada += '/' + numeros.substring(2, 4);
    }
    if (numeros.length > 4) {
        formateada += '/' + numeros.substring(4, 8);
    }

    return formateada;
}



document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formSeccion3');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

            // Recopilar datos del formulario
            const formData = new FormData(form);
            const datos = {};
            formData.forEach((value, key) => {
                datos[`seccion3_${key}`] = value; // Agregar prefijo "seccion3_"
            });

            // Guardar datos en localStorage
            localStorage.setItem('datosSeccion3', JSON.stringify(datos));

            // Redirigir a la siguiente sección
            window.location.href = '/seccion4/seccion4.html'; // Ruta corregida
        });
    } else {
        console.error('El formulario con ID "formSeccion3" no fue encontrado.');
    }
});