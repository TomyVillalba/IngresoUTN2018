function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "F" && sexo != "M" && sexo != "f" && sexo != "m")
{
    sexo = prompt("Error. Reingrese sexo");
}


document.getElementById('Sexo').value=sexo;
}
//FIN DE LA FUNCIÓN