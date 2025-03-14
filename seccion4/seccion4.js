document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formSeccion4');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

            // Recopilar datos de localStorage
            const datosSeccion1 = JSON.parse(localStorage.getItem('datosSeccion1'));
            const datosSeccion2 = JSON.parse(localStorage.getItem('datosSeccion2'));
            const datosSeccion3 = JSON.parse(localStorage.getItem('datosSeccion3'));

            // Recopilar datos del formulario de la sección 4
            const formData = new FormData(form);
            const datosSeccion4 = {};
            formData.forEach((value, key) => {
                datosSeccion4[`seccion4_${key}`] = value; // Agregar prefijo "seccion4_"
            });

            // Combinar todos los datos en un solo objeto 
            const datosCompletos = {
                ...datosSeccion1,
                ...datosSeccion2,
                ...datosSeccion3,
                ...datosSeccion4,
            };


            if (!datosSeccion2) {
                console.error('No se encontraron datos de la Sección 2 en localStorage');
            }
            
            console.log('Datos completos:', datosCompletos); // Verifica los datos recopilados

            // Crear un formulario dinámico para enviar los datos a httpbin.org/post
            const formDinamico = document.createElement('form');
            formDinamico.method = 'POST'; // Método POST
            formDinamico.action = 'https://httpbin.org/post'; // URL de httpbin
            formDinamico.target = '_blank'; // Abrir en una nueva pestaña

            // Agregar los datos al formulario dinámico
            for (const key in datosCompletos) {
                if (datosCompletos.hasOwnProperty(key)) {
                    const input = document.createElement('input');
                    input.type = 'hidden'; // Campo oculto
                    input.name = key; // Nombre del campo
                    input.value = datosCompletos[key]; // Valor del campo
                    formDinamico.appendChild(input);
                }
            }

            // Agregar el formulario al cuerpo del documento y enviarlo
            document.body.appendChild(formDinamico);
            formDinamico.submit(); // Enviar el formulario

            // Limpiar el formulario dinámico después de enviarlo
            document.body.removeChild(formDinamico);
        });
    } else {
        console.error('El formulario con ID "formSeccion4" no fue encontrado.');
    }
});