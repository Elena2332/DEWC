let inpDni,inpNom,inpApe,inpDir,selTer,selProv,selMun,inpNac,inpEmail,inpTelf,chPermiso,btnEnviar;
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let territorios = ["Seleciona Territorio","Euskadi","Nafarroa", "Iparralde"];
let provincias = [["Araba", "Bizkaia", "Gipuzkoa"],
                  ["Navarra"],
                  ["Lapurdi", "Behe Nafarroa", "Zuberoa"]
                ]; 
let municipios = [["Gasteiz", "Laguardia", "Salvatierra"],
                  ["Bilbo", "Barakaldo", "Durango"],
                  ["Donosti", "Arrasate","Bergara"],
                  ["Iruña", "Lizarra", "Ujue"],
                  ["Baiona", "Biarritz", "Hendaya"],
                  ["Bidarray","St-Palais"],
                  ["Maule","Etxarri"]
                ];
let edad = -1;

window.onload
{
    inpDni = document.getElementById("dni");
    inpNom = document.getElementById("firstname");
    inpApe = document.getElementById("lastname");
    inpDir = document.getElementById("address");
    selTer = document.getElementById("territorio");
    selProv = document.getElementById("provincia");
    selMun = document.getElementById("municipio");
    inpNac = document.getElementById("birthday");
    inpEmail = document.getElementById("email");
    inpTelf = document.getElementById("phone");
    chPermiso = document.getElementById("politicas");
    btnEnviar = document.getElementById("enviar");

    eventos();
    llenarTer();
}


function eventos()
{
    inpDni.addEventListener("blur",validarDni);
    inpNom.addEventListener("blur",validarNom);
    inpApe.addEventListener("blur",validarApe);
    inpDir.addEventListener("blur",validarDir);
    selTer.addEventListener("change",llenarProv);
    selProv.addEventListener("change",llenarMun);
    // selMun.addEventListener("",);
    inpNac.addEventListener("focusout",calcularEdad);
    inpEmail.addEventListener("focusout",validarEmail);
    inpTelf.addEventListener("focusout",validarTelf);
    chPermiso.addEventListener("click",comprobarCheck);
    btnEnviar.addEventListener("click",enviar);
}

// validaciones
function validarDni()
{
    txt = inpDni.value;
    if(txt.trim().length>0) 
    {
        if(/^\d{8}[A-Z]{1}$/.test(txt))
        {
            let num = txt.substring(0,txt.length-1); 
            let letraCorrecta = letras[num%23];
            if(letraCorrecta != (txt.substring(txt.length-1,txt.length)).toUpperCase())
                alert("dni in valido (letra incorrecta)");
        }
        else
        {
            inpDni.value = "";
            alert("formato del dni incorrecto");
        }
    }
}

function validarNom()
{
    txt = inpNom.value;
    if(txt.trim().length>0) 
    {
        if(!/^[a-z A-Z ª]{1,50}$/.test(txt))
        {
            inpNom.value = "";
            alert("el nombre solo puede tener un maximo de 50 letras");
        }
    }
}
function validarApe()
{
    txt = inpApe.value;
    if(txt.trim().length>0) 
    {
        txt = inpApe.value;
        if(!/^[a-z A-Z]{1,50}$/.test(txt))
        {
            inpApe.value = "";
            alert("el apellido solo puede tener un maximo de 50 letras");
        }
    }
}

function validarDir()
{
    txt = inpDir.value;
    if(txt.trim().length>0) 
    {
        if(!/^[a-z A-Z 0-9 º]{5,50}$/.test(txt))
        {
            inpDir.value = "";
            alert("direccion incorrecta");
        }
    }
}

function validarEmail()
{
    txt = inpEmail.value;
    if(txt.trim().length>0) 
    {
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(txt))
        {
            inpEmail.value = "";
            alert("email incorrecto (me@example.com)");
        }
    }
}

function validarTelf()
{
    txt = inpTelf.value;
    if(txt.trim().length>0) 
    {
        if(!/^(\+\d{2})?[0-9]{9}$/.test(txt))  
        {
            inpTelf.value = "";
            alert("telefono incorrecto");
        }
    }
}


function hayDatosVacios()
{
    // si hay inputs vacios
    if(inpDni.value.trim().length==0) 
        return true;
    if(inpNom.value.trim().length==0) 
        return true;
    if(inpApe.value.trim().length==0) 
        return true;
    if(inpDir.value.trim().length==0) 
        return true;
    if(inpEmail.value.trim().length==0) 
        return true;
    if(inpTelf.value.trim().length==0) 
        return true;
    if(inpNac.value.trim().length==0) 
        return true;
    if(edad<0)
        return true;

    // todos los select tienen seleccionados
    if(selTer.value<1)  // 0:= selecciona territorio
        return true;
        
    return false;
}

//calcular edad
function calcularEdad()
{
    txt = inpNac.value;
    let fechaActual = new Date();
    let fechaNac = new Date(txt);
    
    let anios = fechaActual.getFullYear()-fechaNac.getFullYear();
    if(fechaActual.getMonth() < fechaNac.getMonth())
        anios--;
    else
    {
        if(fechaActual.getMonth() == fechaNac.getMonth())
            if(fechaActual.getDay < fechaNac.getDay())
                anios--;
    }
    
    if(anios<0)
        alert("fecha incorrecta");
    else
        edad = anios;
}

// selects
function llenarTer()
{
    // llena el select
    for(let i=0; i<territorios.length ;i++)
        selTer.options[i] = new Option(territorios[i],i);
}

function llenarProv()
{
    //vacia los municipios
    selMun.innerHTML = "";
    selProv.innerHTML = "";
    let sel = selTer.value-1;  // selecciona territorio  es value -1
    console.log(sel)
    if(sel>=0)  // hay un territorio seleccionado
    {
        selProv.innerHTML = "";
        for(let i=0; i<provincias[sel].length ;i++)
            selProv.options[i] = new Option(provincias[sel][i],i);
        llenarMun();
    }
    
}

function llenarMun()
{
    selMun.innerHTML = "";
    let sel, ter = parseInt(selTer.value)-1;
    if(ter<1)
        sel = parseInt(selProv.value);
    else
    {
        if(ter == 1)
            sel = parseInt(selProv.value)+3;
        else
            sel = parseInt(selProv.value)+4;
    }
    for(let i=0; i<municipios[sel].length ;i++)
        selMun.options[i] = new Option(municipios[sel][i],municipios[sel][i]);
}

// envios
function comprobarCheck()
{
    if(chPermiso.checked)
        btnEnviar.disabled = false;
    else
        btnEnviar.disabled = true;
}

function enviar()   // gurdar datos localStorage
{
    console.log('a')
    if(hayDatosVacios())
        alert("rellena todos los datos para continuar");
    else
    {
        let datos = {
            'address': inpDir.value,
            'dni': inpDni.value,
            'email': inpEmail.value,
            'fnaci': inpNac.value,
            'fname': inpNom.value,
            'lname': inpApe.value,
            'municipality': provincias[selTer.value][selProv.value],
            'phone': inpTelf.value,
            'province': selMun.value,
            'years': edad
        };
        
        // Guardar datos como un string
        localStorage.setItem('datos', JSON.stringify(datos));

        // ir a  thankyou.html
        window.location.href="thankyou.html";    
    }
    
}
