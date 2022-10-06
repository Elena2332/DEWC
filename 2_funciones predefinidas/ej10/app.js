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
        btnCerrar.id = i;       
        btnCerrar.addEventListener('click', cerrarVentana);
        ventana.document.body.appendChild(btnCerrar);   //aniadir el boton a la ventana
        ventanasCreadas[i] = ventana;
    }
}

function cerrarVentana()
{
    let ventana = ventanasCreadas[this.id];
    ventana.close();
}

