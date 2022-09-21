let ventana;
let nom;
let btnEntrar;
window.onload
{
    nom = document.getElementById("txtNom");
    btnEntrar = document.getElementById("btnEntrar");
    btnEntrar.addEventListener("click", abrirVentana);
}

function abrirVentana()
{
    let ancho= screen.width;
    let alto= screen.height;

    if(nom.value.length<1)
        alert('Introduce el nombre :)');
    else
    {
        ventana = window.open('','_blank','width=200','height=200','menubar=yes','resizable=no','scrollbars=no','toolbar=no','location=no','status=no','top='+altura/4,'left='+ancho/2);
        let texto = document.createElement("p");
        texto.innerHTML = "Bienvenido "+ nom.value;
        ventana.document.body.appendChild(texto);
    }
         
}




