//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precio;
    var precioFinal;

    precio = parseFloat(prompt("Ingrese precio"));

    precioFinal = precio * 1.21;

    document.getElementById("importe").value = precioFinal
}

