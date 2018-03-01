//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var venta;
    var ventaMayor;
    var ventaMenor;
    var flag = 0;

    for(var i = 1; i <= 7; i ++)
    {
        venta = parseFloat(prompt("Ingrese importe de venta "));
    }
    while(venta <= 0)
    {
        venta = parseFloat(prompt("Error. El importe debe ser mayor a 0. Reingrese importe"));
    }
    if(venta > ventaMayor || flag == 0)
    {
        ventaMayor = venta;
    }
    if(venta < ventaMenor || flag == 0)
    {
        ventaMenor = venta;
        flag = 1;
    }
    alert("La mayor venta fue $ " + ventaMayor + " y la menor venta $ " + ventaMenor);
}

