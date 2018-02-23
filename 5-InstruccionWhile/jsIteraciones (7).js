function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;

	do
	{
		numero = parseInt (prompt("Ingrese un número"));
		contador = contador + 1;
		acumulador = acumulador + numero;
		respuesta = prompt("¿Desea continuar?");
	} while (respuesta=='s');




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN