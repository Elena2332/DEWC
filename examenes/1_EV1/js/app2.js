let btnVolver;
window.onload
{
    btnVolver = document.getElementById("volver");
    btnVolver.addEventListener("click",cerrar);
} 


function cerrar()
{
    // cierra el formulario.  Se ejecuta cuando al pulsar volver de thankyou.html
    console.log("cerrar")
}