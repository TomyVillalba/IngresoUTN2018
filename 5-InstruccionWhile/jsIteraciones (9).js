function Mostrar()
{

	var contador=0;
	var max;
	var min;
	var numero;
	// declarar variables
	
	var respuesta= "si";

	do
	{

		numero = parseInt(prompt("Ingrese un numero: "));
		contador ++;

		if (contador == 1)
		{
			max = numero;
			min = numero;
             
		}
		if (numero > max)
		    max = numero;
		{
			if (numero < min)
			min = numero;
			
		}
	     respuesta = prompt("Desea continuar?: ");
	}
        while (respuesta == "si");

		document.getElementById("maximo").value = max;
		document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN