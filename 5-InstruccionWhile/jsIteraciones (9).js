function Mostrar()
{
	var maximo=0;
	var minimo=0;
	var respuesta;
	
	do
	{
		numero = parseInt(prompt("Ingrese un número"));
		
	if (maximo < numero)
	{
	
		maximo=numero;
	}
		else 
		{
			minimo=numero;

		} 
	
		respuesta = prompt("¿Desea continuar?");

	} while (respuesta == 's');

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN
