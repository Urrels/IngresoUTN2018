/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var nuevosueldo; 

sueldo = parseInt(document.getElementById("sueldo").value);

nuevosueldo = sueldo * 1.1;

document.getElementById("resultado").value = nuevosueldo.toFixed(2);
}
