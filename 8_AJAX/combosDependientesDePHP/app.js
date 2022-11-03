let prov,muni;

window.onload
{
    prov = document.getElementById("provincia").onchange = cargarMunicipios;
    muni = document.getElementById("municipio").onchange = mostrarMensaje;
    // prov.addEventListener("change",cargarMunicipios);
    // muni.addEventListener("change",mostrarMensaje);

    llenarProvincia();
}



function inicializa_xhr()
{
    if(window.XMLHttpRequest)
        return new XMLHttpRequest;
    else if(window.ActiveXObject)
        return ActiveXObject("Microsoft.XMLHTTP");
}

function llenarProvincia()
{
    console.log("Cargando provincias");

    peticion = inicializa_xhr();
    if(peticion)
    {
        peticion.onreadystatechange = muestraProvincias;
        peticion.open("GET","php/cargaProvinciasJSON.php",true);
        peticion.send(null);
    }
    muestraProvincias;
}

function muestraProvincias()
{
    if(peticion.readyState == 4)
        if(peticion.status == 200)
            console.log(peticion.responseText);
}

function mostrarProvincias()
{
    if(peticion.readyState == 4)
        if(peticion.status == 200)
        {
            console.log(peticion.responseText);
        }    
}

function cargarMunicipios()
{
    
}

function mostrarMensaje()
{
    
}