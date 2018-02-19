function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
    case "Febrero":
        alert ("Este mes tiene 28 días")
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        alert ("Este mes tiene 30 días")
        break;

default:
{
    alert ("Este mes tiene 31 días")
}

}


}//FIN DE LA FUNCIÓN
