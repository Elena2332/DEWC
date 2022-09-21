window.onload = function() 
{
    // Numero de enlaces de la pagina
    let enlaces=document.getElementsByTagName("a");
    let numEnlaces = enlaces.length;
    let txt = "Numero de enlaces en la pagina: "+ numEnlaces+"<br>";

    // Direccion del penultimo enlace
    let txtPenulEnlace = enlaces[numEnlaces-2].href;  //penultimo enlace
    txt = txt+"Direccion del penultimo enlace: '"+txtPenulEnlace+"'<br>";
    
    // Numero de enlaces que apuntan a http://prueba
    let numEnlacePrueba=0;
    for(let i=0; i<enlaces.length ;i++)
        if(enlaces[i].href == 'http://prueba')
            numEnlacePrueba++;
    txt = txt+"Enlaces a 'http://prueba': "+numEnlacePrueba+"<br>";

    // Numero de enlaces del tercer p�rrafo
    let numEnlacesParrafo3 = document.getElementsByTagName("p")[2].getElementsByTagName("a").length;
    txt = txt+"Numero de enlaces en el tercer parrafo: "+numEnlacesParrafo3+"<br>";

    // mostrar resultado
    let pResultado=document.createElement("p");
    pResultado.innerHTML= txt;
    document.body.appendChild(pResultado);
}