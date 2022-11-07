let prov,muni;

window.onload
{
    prov = document.getElementById("provincia")//.onchange = cargarMunicipios;
    muni = document.getElementById("municipio")//.onchange = mostrarMensaje;
    prov.addEventListener("change",cargarMunicipios);
    muni.addEventListener("change",mostrarMensaje);

    cargarProvincia();
}



function inicializa_xhr()
{
    if(window.XMLHttpRequest)
        return new XMLHttpRequest;
    else if(window.ActiveXObject)
        return ActiveXObject("Microsoft.XMLHTTP");
}

function cargarProvincia()
{
    console.log("Cargando provincias");

    peticion = inicializa_xhr();
    if(peticion)
    {
        peticion.onreadystatechange = muestraProvincias;
        peticion.open("GET","cargaProvinciasJSON.php",true);
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
            let provincias = eval('('+peticion.responseText+')');
            provinciasArray = provincias;

            console.log(provinciasArray);

            prov.options[0] = new Option("- selecciona -");
            let i = 1;
            for(let codigo in provincias)
            {
                prov.options[i] = new Option(provincias[codigo],codigo);
                i++;    
            }
        }    
}

function cargarMunicipios()
{
    console.log("cargando municipios");   
    let provincia = prov.options[prov.selectedIndex].value;

    console.log(provincia);

    if(!isNaN(provincia))
    {
        peticion = inicializa_xhr();
        if(peticion)
        {
            peticion.onreadystatechange = muestraMunicipios;
            peticion.open("POST","cargarMunicipiosJSON.php?nocache="+Math.random(),true);
            peticion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            peticion.send("provincia="+provincia);
        }
    }
}

function muestraMunicipios()
{
    if(peticion.readyState == 4)
    {
        if(peticion.status == 200)
        {
            let municipios = eval('('+peticion.responseText+')');
            municipiosArray = municipios;
            console.log(municipiosArray);

            muni.options.length = 0;
            let i = 0;
            for(let codigo in municipios)
            {
                muni.options[i] = new Option(municipios[codigo],codigo);
                i++;
            }
        }
    }    
}



function mostrarMensaje()
{
    
}