let p1, p2, p3, p4, texto;
window.onload
{
    p1=document.getElementById("p1");
    p2=document.getElementById("p2");
    p3=document.getElementById("p3");
    p4=document.getElementById("p4");
}

//parrafo 1
texto = "La resolucion de la pantalla es: "+ screen.width+"x"+ screen.height;
p1.innerHTML= texto;


//parrafo2
texto = "El nombre del navegador que usas es: "+ navigator.appName ;
texto = "<br> Usas el siguiente sistema operativo: "+ navigator.platform;
texto = "<br> La version del navegador que usas es: "+ navigator.appVersion  ;
p2.innerHTML= texto;
// ayudita de omar:   https://didesweb.com/javascript/datos-navegador-javascript/


//parrafo3
texto = "La URL del documento es: "+ document.baseURI ;
p3.innerHTML= texto;

//parrafo4
texto= "El protocolo usado para acceder a esta pagina es: "+ location.protocol ;
p4.innerHTML= texto;
