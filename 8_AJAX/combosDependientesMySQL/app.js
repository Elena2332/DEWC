let prov,muni,mensaje;

window.onload
{
    prov = document.getElementById("provincia");
    muni = document.getElementById("municipio").onchange = mostrarMensaje;
    mensaje = document.getElementById("mensaje");
    prov.onchange = ()=> cargarMunicipios(prov.options[prov.selectedIndex].value);

    cargarProvincias();
}

function cargarProvincias ()
{
    let options = {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body : "tipo=provincia"
    };

    fetch("cargaProvinciasJSON.php", options) 
        .then(data => data.json())
        .then(json => {
            console.log(json);
            prov.innerHTML = '';

            let provincia = document.createElement('option');
            provincia.value = "0";
            provincia.innerText = "- Elige Opcion -";
            prov.appendChild(provincia);

            for (const key in json) 
            {
                let provincia = document.createElement('option');
                provincia.value = key;
                provincia.innerText = json[key];
                prov.appendChild(provincia);
            }
        });
}


function cargarMunicipios(codigo_provincia)
{
    let options = {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body : "tipo=municipio&provincia=" + codigo_provincia
    };

    fetch("cargaMunicipiosJSON.php", options)
        .then(data => data.json())
        .then(json => {
            console.log(json);
            muni.innerHTML = '';
            for (const key in json) 
            {
                let municipio = document.createElement('option');
                municipio.value = key;
                municipio.innerText = json[key];
                muni.appendChild(municipio);
            }
        });
}

function mostrarMensaje ()
{
    let provincia = prov.options[prov.selectedIndex].text;
    let municipio = muni.options[muni.selectedIndex].text;
    mensaje.innerText = "Ha seleccionado la provincia "+ provincia + " y el municipio " + municipio+".";
}   