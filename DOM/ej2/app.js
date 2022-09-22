let enlace; 
let txtEscondido;

window.onload = function() 
{
    enlace = document.getElementById("enlace");
    txtEscondido = document.getElementById("adicional");
}


function muestra()
{
    enlace.setAttribute("class", "oculto");
    adicional.setAttribute("class","visible");
}