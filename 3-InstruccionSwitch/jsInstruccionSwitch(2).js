function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);


switch (mesDelAño)

{
    
   default: alert( "Falta para el invierno." );
            break;
    case "Julio":

    case "Agosto": alert( "Abrigate que hace frio." );
                   break;
    case "Septiembre": 

    case "Octubre": 

    case "Noviembre":

    case "Diciembre": alert("Ya pasamos el frio, ahora calor!!!." );
                        break;
}
} //FIN DE LA FUNCIÓN