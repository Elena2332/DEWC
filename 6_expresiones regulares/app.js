let inpDni,inpNom,inpNac,inpNH,inpEmail,inpPag,inpPass;
let btnComprobar

window.onload
{
    //elementos
    inpDni = document.getElementById("inpDNI");
    inpNom = document.getElementById("inpNom");
    inpNac = document.getElementById("inpFecha");
    inpNH = document.getElementById("inpNH");
    inpEmail = document.getElementById("inpEmail");
    inpPag = document.getElementById("inpPag");
    inpPass = document.getElementById("inpPass");
    btnComprobar = document.getElementById("btnComprobar");
    
    //eventos
    // inpDni = document.addEventListener("blur",validarDni);   // cuando pierde el focous
    inpNom = document.addEventListener("blur",validarNom);
    inpNac = document.addEventListener("blur",validarNac);
    inpNH = document.addEventListener("blur",validarNH);
    inpEmail = document.addEventListener("blur",validarEmail);
    inpPag = document.addEventListener("blur",validarPag);
    inpPass = document.addEventListener("blur",validarPass);
    inpDni = document.addEventListener("focusout",validarDni)
    btnComprobar.addEventListener("click",comprobar);
}

function validarDni()
{
    console.log('patata');
    console.log(this.id);
    let txtinp = this.value;
}

function comprobar()
{

}

