function Mostrar()
{

var numero;
var esPrimo = true;
numero=parent(prompt("Ingrese un número"));    

for (var i=2; i<numero; i++)
{
    if (numero % i == 0)
    {
        esPrimo = false;
        break;
    }
        
}

if (esPrimo==true)
{
     alert (numero + "es primo");
}
else
{
    alert (numero + "No es primo");
}
}//FIN DE LA FUNCIÓN

//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.