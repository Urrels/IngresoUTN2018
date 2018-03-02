function Mostrar()
{
var numero;

for ( ; ; )
{
    numero=parseInt(prompt("Ingrese un número"));

    if (numero==9)
    {
        break;
    }

    console.log(numero);
}
alert ("Salió porque ingreso un 9")

}//FIN DE LA FUNCIÓN