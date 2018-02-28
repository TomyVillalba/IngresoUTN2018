function Mostrar()
{

   var i;
   var numero;
   var esPrimo = true;

   numero = parseInt(prompt("Ingrese un numero"));
   for(i = 2; i < numero; i ++)
   {
       if(numero % i == 0)
       {
           esPrimo = false
           break;
       }
   }
   if(esPrimo == true)
   {
        alert(numero + " es primo")
   }
   else
    {
        alert(numero + " no es primo")
    }
}//FIN DE LA FUNCIÓN