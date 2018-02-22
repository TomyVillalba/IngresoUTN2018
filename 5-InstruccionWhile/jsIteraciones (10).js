function Mostrar()
{
    var numero;
    var sumaPos=0;
	var sumaNeg=0;
	var cantPos=0;
	var cantNeg=0;
	var cantCeros=0;
	var cantPares=0;
	var promPos;
	var promNeg;
	var diferencia; 
	var respuesta="si";
do
{
	numero = parseInt(prompt("Ingrese un numero: "));
	
	if (numero > 0)
	{
		sumaPos = sumaPos + numero;
		cantPos ++;
		
	}
	else if (numero < 0)
		{
			sumaNeg = sumaNeg + numero;
			cantNeg ++;
		}
		else if (numero == 0)
			{
                 cantCeros++;
		
		    }
			
				if(numero % 2 == 0)
				{
					cantPares ++;
				}
				
	respuesta = prompt("Desea continuar?: ");
}while(respuesta!="no");
	
		
	promPos = sumaPos / cantPos;
	promNeg = sumaNeg / cantNeg;
	diferencia = sumaPos - sumaNeg;




    
	document.write("Suma de los positivos" + sumaPos + "<br/>");
	document.write("Suma de los negativos" + sumaNeg + "<br/>");
	document.write("Cantidad de positivos" + cantPos + "<br/>");
	document.write("Cantidad de negativos" + cantNeg + "<br/>");
	document.write("Cantidad de ceros" + cantCeros + "<br/>");
	document.write("Cantidad de pares" + cantPares + "<br/>");
	document.write("Promedio de positivos" + promPos + "<br/>");
	document.write("Promedio de negativos" + promNeg + "<br/>");
	document.write("Diferencia de positivos" + diferencia + "<br/>");
	

		

}//FIN DE LA FUNCIÓN