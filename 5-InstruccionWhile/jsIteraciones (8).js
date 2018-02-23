function Mostrar()
{

	var contadornegativo=0;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var numero;

	
	do
	{
		numero = parseInt(prompt("Ingrese un número"));
		
	if (numero>0)
	{
		positivo = positivo + numero;
	}
	else 
	{
		negativo = negativo *numero;
		contadornegativo= contadornegativo + 1;
	}
	

		respuesta = prompt("¿Desea continuar?");

	} while (respuesta == 's');


		
document.getElementById('suma').value=positivo;

if (contadornegativo==0)
{
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
