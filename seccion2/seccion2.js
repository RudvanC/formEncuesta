

function mostrarValor(valor) {
    // Actualiza el valor numérico
    document.getElementById("valorRango").textContent = valor;

    // Muestra un mensaje descriptivo según el valor
    const mensaje = document.getElementById("mensajeCalificacion");
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
}
    
    