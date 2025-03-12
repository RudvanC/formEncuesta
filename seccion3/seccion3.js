document.addEventListener('DOMContentLoaded', function() {
    localStorage.removeItem('datosEncuesta');

    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const zodiacoSelect = document.getElementById('zodiaco');
    const colorFavoritoInput = document.getElementById('colorFavorito'); // Obtener el campo de color

    if (fechaNacimientoInput && zodiacoSelect && colorFavoritoInput) {
        zodiacoSelect.disabled = true; // Deshabilitar el campo de selección del zodíaco

        fechaNacimientoInput.addEventListener('change', function() {
            const fechaNacimiento = new Date(this.value);
            const dia = fechaNacimiento.getDate() + 1;
            const mes = fechaNacimiento.getMonth() + 1;

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
            colorFavoritoInput.focus(); // Mover el cursor al campo de color
        });
    }
});