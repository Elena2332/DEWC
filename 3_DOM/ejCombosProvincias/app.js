let provincias = ["Seleccione Provincia","Araba","Bizkaia","Gipuzkoa","Nafarroa","Lapurdi","Zuberoa","Nafarroa Beherea"];
let municipios = [  ["Seleccione Municipio"],
                    ["Seleccione Municipio","Vitoria-Gasteiz", "Amurrio", "El Ciego", "La Guardia"],
                    ["Seleccione Municipio","Bilbao", "Barakaldo", "Durango", "Elorrio", "Muzkiz"],
                    ["Seleccione Municipio","Donostia-San Sebastián", "Arrasate-Mondragón", "Eibar"],
                    ["Seleccione Municipio","Iruña", "Burlada", "Estella-Lizarra", "Tafalla"],
                    ["Seleccione Municipio","Baiona", "Bastida", "Hendaya", "Miarritze"],
                    ["Seleccione Municipio","Maule", "Barkoxe", "Sohüta"],
                    ["Seleccione Municipio","Baigorri", "Garazi", "Oztibarre"] ];
let selecProv, selecMuni;
let pRespuesta;

window.onload
{
    selecProv = document.getElementById("provincia");
    selecMuni = document.getElementById("municipio");
    pRespuesta = document.getElementById("respuesta");
    pRespuesta.setAttribute("class","oculto");

    for(var i=0; i<provincias.length ;i++)
        selecProv.options[i] = new Option(provincias[i], i);
    
    selecProv.addEventListener("change",llenarMunis);
    selecMuni.addEventListener("change",mostrar);
    llenarMunis();
}


function llenarMunis()
{
    selecMuni.innerHTML="";  //vaciar antes de llenar

    let seleccionado = selecProv.value;
    for(var i=0; i<municipios[seleccionado].length ;i++)
        selecMuni.options[i] = new Option(municipios[seleccionado][i], i);
    mostrar();
}

function mostrar()
{
    if(selecProv.value == 0 || selecMuni.value == 0)  //esta seleccionando
        pRespuesta.setAttribute("class","oculto");
    else
    {
        let prov = provincias[selecProv.value];
        let muni = municipios[selecProv.value][selecMuni.value];
        pRespuesta.innerHTML = "Ha seleccionado <strong>"+muni+"</strong> en <strong>"+prov+"</strong>";
        document.body.appendChild(pRespuesta);
        pRespuesta.setAttribute("class","visible");
    }
}
