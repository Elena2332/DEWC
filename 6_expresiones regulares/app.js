let btnComprobar;
let arrInps;

window.onload
{
    btnComprobar = document.getElementById("btnComprobar"); 
    btnComprobar.addEventListener("click",comprobar);
    arrInps = document.getElementsByTagName('input');
    for(let i=0; i<arrInps.length; i++)
        arrInps[i].addEventListener("focusout",validar);   // "focusout" y "blur" evento cuanto pierde el foco    
}
function validar(aux)
{
    // let id;
    // if(!esInp(this.id))
    //     id = this.id;
    // else
    //     id = aux;
    // let inp = document.getElementById(id);    
    if(inp.value != undefined)
    {
        let texto = inp.value;
        switch(id) 
        {
            case 'inpDNI':
                if (!(/^\d{8}[a-zA-Z]$/.test(texto)))
                    inp.value = "";
                break;
            case 'inpNom':
                if (!(/^[a-zA-Z ]*$/.test(texto)))
                    inp.value = "";
                break;
            case 'inpNH':
                if (texto<0 || texto>10)
                    inp.value = "";
                break;
            case 'inpEmail':
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(texto)))
                    inp.value = "";
                break;
            case 'inpPass':
                if (!(/(^[0-9\s\+\-])+$/.test(texto)))
                    inp.value = "";
                break;
        }
    }    
}

function comprobar()
{
    for(let i=0; i<arrInps.length; i++)
        validar(arrInps[i]);
}

function esInp(str)
{
    for(let i=0; i<arrInps.length; i++)
        if(arrInps[i]==str)
            return true;
    return false;
}
