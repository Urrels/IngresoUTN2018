function Mostrar()
{

var sexo = prompt("ingrese f ó m .");


//while (sexo!="f" && sexo!="m")
while (!(sexo=='m'|| sexo=="f"))
{
 sexo= prompt("Error, reingrese");
}

if (sexo=="f")
{
    sexo= "Femenino";

}
else
{
    sexo="Masculino";
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN