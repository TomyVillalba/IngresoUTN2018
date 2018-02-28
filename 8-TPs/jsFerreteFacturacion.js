/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
}
function Promedio () 
{
var precio1;
var precio2;
var precio3;
var total;
var promedio;

precio1 = parseFloat(document.getElementById("PrecioUno").value);
precio2 = parseFloat(document.getElementById("PecioDos")).value;
precio3 = parseFloat(document.getElementById("PrecioTres")).value;

total = precio1 + precio2 + precio3;

promedio = total / 3

alert("El promedio de los precios es $ " + promedio);

}
function PrecioFinal () 
{
var precio1;
var precio2;
var precio3;
var total;
var precioIva;

precio1 = parseFloat(document.getElementById("PrecioUno").value);
precio2 = parseFloat(document.getElementById("PecioDos")).value;
precio3 = parseFloat(document.getElementById("PrecioTres")).value;

total = precio1 + precio2 + precio3;

precioMasIva = 
}