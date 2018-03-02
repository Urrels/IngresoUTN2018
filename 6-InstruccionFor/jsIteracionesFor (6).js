function Mostrar()
{
var contadornumerospares=0;
var numero;
numero = parseInt(prompt("Ingrese un número: "));

for (var i=1; i<=numero; i++)
{

    if (i % 2 == 1)
    {
        continue;    
    }
    contadornumerospares ++;
    console.log(i);

    }
    console.log("Los números pares encontrados fueron: " + contadornumerospares);
}


}//FIN DE LA FUNCIÓN

