function Mostrar()
{
//tomo la edad  
var edad;
edad=parseInt(edad =document.getElementById("edad").value);
estadocivil=document.getElementById("estadoCivil").value;

    if (edad<18 && estadocivil != document.getElementById("Soltero"))
    {
        alert ("Es muy pequeño para NO ser soltero");
    }
        


}//FIN DE LA FUNCIÓN