let enlace; 

window.onload = function() 
{
    enlace = document.getElementById("enlace");
}


function muestra()
{
    enlace.setAttribute("class", "oculto");
    let pNuevo=document.createElement("p");
    pNuevo.innerHTML= "Este es el parrafo oculto que acaba de aparecer :)";
    document.body.appendChild(pNuevo);
}