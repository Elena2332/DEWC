let prov,muni;

window.onload
{
    prov = document.getElementById("provincia");
    muni = document.getElementById("municipio");
    prov.addEventListener("change",llenarMunicipio);
    muni.addEventListener("change",mostrarMensaje);

    llenarProvincia();
}


function llenarProvincia()
{
    
}



function mostrarMensaje()
{
    
}