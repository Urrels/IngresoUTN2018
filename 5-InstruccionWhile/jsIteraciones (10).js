function Mostrar()
{

	var negativos;  
	var positivos;
	var promedionegativos;
	var promediopositivos;
	var contadorceros;
	var contadornegarivos=0;
	var contadorpositivos;
	var contadornumerospar;
	var numero=0;
	var respuesta;
	var diferencia;
	var acumuladorpos;
	var acumuladorneg;
do
	{
	numero= parseInt(prompt("Ingrese un número"));
	if (numero>0)
	{
		contador= contador + 1;
		acumuladorpos= acumuladorpos + 1;
	}
		else if (numero<0)
		{
			
		}

		else
		{
			contadorceros= contadorceros + 1;
		}

		if (numero/2==0)
		{
			contadornumerospar = contadornumerospar + 1;
		}

	respuesta=prompt("¿Desea continuar?");
	
	} while (respuesta == 's');

promediopositivos=acumuladorpos/promediopositivos;
promedionegativos=acumuladorneg/promedionegativos;
diferencia=contadorpositivos/contadornegativos;

document.write("1-suma de los negativos:_" + acumuladorneg + "<br/>");
document.write("2-Suma de los positivos:_" + acumuladorpos + "<br/>"); 

if (contadorpositivos != 0)
{
	promediopositivos=acumuladorpos/promediopositivos;

}
 
if (contadornegativos!=0)
{
	promedionegativos= acumuladorneg/promedionegativos
}

}//FIN DE LA FUNCIÓN
