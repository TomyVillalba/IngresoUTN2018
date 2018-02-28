function Mostrar()
{
var contDivisores=0;
   var i;
   var num;
   var esDivisor;

   numero = parseInt(prompt("Ingrese un numero"));
   for(i = 1; i <= numero; i ++)
   {
       if(numero % i == 0)
       {
           contDivisores ++;
           console.log(i)
       }
   }
console.log("Se encontraron " + contDivisores + " divisores")



}//FIN DE LA FUNCIÓN