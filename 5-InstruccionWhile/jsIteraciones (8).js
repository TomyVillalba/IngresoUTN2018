function Mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
    
	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		if(numero >= 0)
		{
			negativo = negativo * numero;
			flag = 1;
		}
		else
		{
			positivo = positivo + numero;
		}
	    respuesta = prompt("Desea continuar?: ");
	}
	while (respuesta == "s");


}
document.getElementById('suma').value=positivo;

if (flag == 0)
{
	negativo = 0;

}

document.getElementById('producto').value=negativo;

//FIN DE LA FUNCIÓN