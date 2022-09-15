window.onload
{
    let ancho= screen.width;
    let alto= screen.height;
    let diagonal= Math.sqrt(ancho*ancho + alto*alto);  // Math.hypot(ancho,alto);
    

    let contenido=document.createElement("p");
    contenido.innerHTML="diagonal de la pantalla: "+Math.round(diagonal);
    document.body.appendChild(contenido);
}