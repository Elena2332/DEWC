let p1,p2,btn;
window.onload
{
    p1 = document.getElementById("p1");
    p2 = document.getElementById("p2");
    btn = document.getElementById("btnEnviar");
    btn.addEventListener("click",leerJson);
}


function leerJson()
{
    fetch('cuento.JSON') 
        .then((resolve) => resolve.json()) 
            .then((data) => {
                p1.innerHTML = data.nombre;
                p2.innerHTML = data.apellido;
            });
}
