function Mostrar()
{
    var cantdiv=0;
    var numero;
    numero = parseInt(prompt("Ingrese un número: "));
    
    for (var i=1; i<=numero; i++)
    {
    
        if (numero % i == 0)
        {
            cantdiv ++;
            console.log(i);   
            
        }
        
        console.log("Los números divisores encontrados fueron: " + cantdiv);
    }
    



}//FIN DE LA FUNCIÓN