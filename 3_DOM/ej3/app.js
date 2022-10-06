let lista;
window.onload = function() 
{
    lista = document.getElementById("lista");
}


function anade() 
{
    let liNuevo = document.createElement("li");
    liNuevo.textContent="Texto por defocto :)";
    lista.appendChild(liNuevo);
}