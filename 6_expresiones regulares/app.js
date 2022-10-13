let inpDni,inpNom,inpNac,inpNH,inpEmail,inpPag,inpPass;
let btnComprobar;

window.onload
{
    btnComprobar = document.getElementById("btnComprobar"); 
    btnComprobar.addEventListener("click",comprobar);
    let arrInps = document.getElementsByTagName('input');
    for(let i=0; i<arrInps.length; i++)
        arrInps[i].addEventListener("focusout",validar);   // "focusout" y "blur" evento cuanto pierde el foco
        //validarCasilla(arrayInputs[i].id, arrayInputs[i].value);
    
}
function validar()
{
    let id = this.id;
    let texto = this.value;
    if(texto.length > 0)
    {
        switch (id) 
        {
            case 'inpDNI':
                if (!(/^\d{8}[a-zA-Z]$/.test(texto)))
                    document.getElementById(id).value = "";
                break;
            case 'inpNom':
                if (!(/^[a-zA-Z ]*$/.test(texto)))
                    document.getElementById(id).value = "";
                break;
            case 'inpNH':
                if (texto<0 || texto>10)
                    document.getElementById(id).value = "";
                break;
            case 'inpFecha':
                if (!(/^$/.test(texto)))
                    document.getElementById(id).value = "";
                break;
            case 'inpEmail':
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(texto)))
                    document.getElementById(id).value = "";
                break;
            case 'inpPag':
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(texto)))
                    document.getElementById(id).texto = "";
                break;
            case 'inpPass':
                if (!(/(^[0-9\s\+\-])+$/.test(texto)))
                    document.getElementById(id).value = "";
                break;
        }
    }
    
}


function comprobar()
{
    console.log('aaaaaaa');
    validar();
}

