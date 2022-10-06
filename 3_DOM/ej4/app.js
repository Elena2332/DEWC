let inpIni, inpFin;
let btn;
window.onload = function() 
{
    inpIni = document.getElementById("inpIni");
    inpFin = document.getElementById("inpFin");
    btn = document.getElementById("btn");
    btn.addEventListener("click", anade);
}


function anade() 
{
    if(inpIni.value.length>0)
    {
        inpFin.value = inpIni.value;
        inpIni.value = "";
    }
    else
        alert("Introduce texto a la izquierda");
}