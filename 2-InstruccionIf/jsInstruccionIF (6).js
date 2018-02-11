function Mostrar()
{
//tomo la edad  
var edad;
edad =document.getElementById("edad").value;
if (edad<12 || edad>17)
{
    if(edad<12)
    {
        alert ("¡Usté es un niño!");
    }
    if (edad>17)
    {
        alert ("¡Usté es mayor de edad!");
    }
}
else
{
    alert ("¡Usté es adolescente!");
}
}//FIN DE LA FUNCIÓN