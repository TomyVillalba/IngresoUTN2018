function Mostrar()
{
var contDivisores=0;
   var i;
   var num;
   var esDivisor;

   numero = parseInt(prompt("Ingrese un numero"));
   for(i = 2; i <= numero; i ++)
   {
       if(i % 2 == 0)
       {
           contPares ++;
           console.log(i)
       }
   }
console.log("Se encontraron " + contDivisores + " divisores")



}//FIN DE LA FUNCIÓN