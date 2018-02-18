function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroaleatorio;
	numeroaleatorio = Math.floor(Math.random()*10)+1;

	if (numeroaleatorio==9 || numeroaleatorio==10)
	{
		alert ("EXCELENTE " + numeroaleatorio);
	}
	else if (numeroaleatorio>3)
	{
		alert("APROBÓ " + numeroaleatorio);

	}

	else
	{
		alert("Vamos, la próxima se puede " + numeroaleatorio);
	}

}//FIN DE LA FUNCIÓN




