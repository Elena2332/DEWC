let btnAbrir;
let ventanasCreadas = [];
window.onload
{
    btnAbrir = document.getElementById("btnAbrir");
    btnAbrir.addEventListener("click", abrirVentanas);
}

function abrirVentanas()
{
    for(let i=0; i<5 ; i++)
    {
        let ventana = window.open('','_blank','width=200','height=200'); //crear ventana
        let btnCerrar = document.createElement("button"); //crear boton
        btnCerrar.innerHTML = "Cerrar";        
        btnCerrar.addEventListener('click', cerrarVentana);
        ventana.document.body.appendChild(btnCerrar);   //aniadir el boton a la ventana
        ventanasCreadas[btnCerrar] = ventana;
    }
    
}

function cerrarVentana(e)
{
    let btn = e.currentTarget;
    let ventana = ventanasCreadas[btn];
    ventana.close();
}


/* Funciona ""   cierra solo una ventana
function abrirVentanas()
{
    for(let i=0; i<5 ; i++)
    {
        let ventana = window.open('','_blank','width=200','height=200'); //crear ventana
        let btnCerrar = document.createElement("button"); //crear boton
        btnCerrar.innerHTML = "Cerrar";        
        btnCerrar.addEventListener('click', cerrarVentana);
        ventana.document.body.appendChild(btnCerrar);   //aniadir el boton a la ventana
        ventanasCreadas[btnCerrar] = ventana;
    }        
}  */