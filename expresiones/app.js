let inpDni, inpNom, inpNac, inpDir, inpEmail, selTer, selProv, selMun, chekPermisos;
let territorios = ["Euskadi", "Nafarroa", "Iparralde"];
let provincias = [
    ["Araba", "Bizkaia", "Gipuzkoa"],
    ["Navarra"],
    ["Lapurdi", "Behe Nafarroa", "Zuberoa"]
];
let municipios = [
    ["Gasteiz", "Laguardia", "Salvatierra"],
    ["Bilbo", "Barakaldo", "Durango"],
    ["Donosti", "Arrasate","Bergara"],
    ["Iruña", "Lizarra", "Ujue"],
    ["Baiona", "Biarritz", "Hendaya"],
    ["Bidarray","St-Palais"],
    ["Maule","Etxarri"]
];


window.onload
{
    //elementos
    inpDni = document.getElementById("inpDni");
    inpNom = document.getElementById("inpNom");
    inpNac = document.getElementById("inpNac");
    inpDir = document.getElementById("inpDir");
    inpEmail = document.getElementById("inpEmail");
    inpTelf = document.getElementById("inpTelf");
    selTer = document.getElementById("selTer");
    selProv = document.getElementById("selProv");
    selMun = document.getElementById("selMun");
    chekPermisos = document.getElementById("chekPermiso");
    

    //llenar selects
    for(let i=0; i<territorios.length ;i++)
        selTer.options[i] = new Option(territorios[i],i);
    cargarProv();
    

    // prepara los eventos
    eventos();
}

function eventos()
{
    selTer.addEventListener("change",cargarProv);
    selProv.addEventListener("change",cargarMun);
    btnValidar.addEventListener("click",validar);
}

function validar()
{
    // DNI
    txt = inpDni.value;
    if(txt.trim().length>0) 
    {
        if(/^\d{8}[A-Z]{1}$/.test(txt))
            console.log('dni correcto')
        else
            console.log('dni incorrecto')
    }
    // NOMBRE
    txt = inpNom.value;
    if(txt.trim().length>0)
    {
        if(/^[a-z A-Z]{1,50}$/.test(txt))
            console.log('nombre correcto')
        else
            console.log('nombre incorrecto')
    }
    // DIRECCION
    txt = inpDir.value;
    if(txt.trim().length>0)
    {
        if(/^[a-z A-Z 0-9]{1,50}$/.test(txt))
            console.log('direccion correcto')
        else
            console.log('direccion incorrecto')
    }
    // NACIMIENTO
    txt = inpNac.value;
    if(txt.trim().length>0)
    {
        if(/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(txt))
        {
            let edad = calcularEdad(txt);
        }
        else
            console.log('formato nacimiento incorrecto')
    }
    // EMAIL
    txt = inpEmail.value;
    if(txt.trim().length>0)
    {
        if(/^\w+([\.-]?\w+)+\.\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(txt))
            console.log('email correcto')
        else
            console.log('email incorrecto')
    }
    // TELEFONO
    txt = inpTelf.value;
    if(txt.trim().length>0)
    {
        /*
            /^\d{9}$/ o también /^[0-9]{9}$/
            /^\(\+\d{2,3}\)\d{9}$/
        */
        if(/^\d{9}$/.test(txt))
            console.log('telefono correcto')
        else
            console.log('telefono incorrecto')
    } 
    if(chekPermisos.checked)
       guardarDatos();
}


function cargarProv()
{
    selProv.innerHTML = "";
    let sel = selTer.value;
    for(let i=0; i<provincias[sel].length ;i++)
        selProv.options[i] = new Option(provincias[sel][i],i);
    cargarMun();
}

function cargarMun()
{
    selMun.innerHTML = "";
    let sel, ter = parseInt(selTer.value);
    if(ter.value<1)
        sel = parseInt(selProv.value);
    else
    {
        if(ter == 1)
        {
            sel = parseInt(selProv.value)+3;
        }
        else
            sel = parseInt(selProv.value)+4;
    }
    for(let i=0; i<municipios[sel].length ;i++)
        selMun.options[i] = new Option(municipios[sel][i],i);
}

function obtenerMuni()
{
    // municipios[selProv][selMun.value] ;
    return "Araba";
}

function calcularEdad(txt)
{
    let fechaActual = new Date();
    let aux = txt.split("/");
    let fechaNac = new Date(aux[2]+"-"+aux[1]+"-"+aux[0]);
    
    let anios = fechaActual.getFullYear()-fechaNac.getFullYear();
    if(fechaActual.getMonth() < fechaNac.getMonth())
        return --anios;
    else
    {
        if(fechaActual.getMonth() == fechaNac.getMonth())
            if(fechaActual.getDay < fechaNac.getDay())
                return --anios;
    }
    return anios;
}


function guardarDatos()
{
    let datos = {
        'dni': inpDni.value,
        'nombre': inpNom.value,
        'direccion': inpDir.value,
        'nacimiento': inpNac.value,
        'edad': calcularEdad(inpNac.value),
        'email': inpEmail.value,
        'telefono': inpTelf.value,
        'territorio': territorios[selTer.value],
        'provincia': provincias[selTer.value][selProv.value],
        'municipio': obtenerMuni()
    };

    // Guardo el objeto como un string
    localStorage.setItem('datos', JSON.stringify(datos));

    // function mostrar(){
    //     // Obtengo el string previamente salvado y luego
    //     var guardado = localStorage.getItem('datos');
    //     var datos =  JSON.parse(guardado);
    //     console.log(datos);
    //     document.getElementById("mensaje").innerHTML = datos.marcado;
    // }
}

