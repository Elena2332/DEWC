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
    if(nom.value.length<1)
        alert('Introduce el nombre :)');
    else
    {
        ventana = window.open('','_blank','width=200','height=200','menubar=yes','resizable=no','scrollbars=no','toolbar=no','location=no','status=no','top=50','left=150');
        let texto = document.createElement("p");
        texto.innerHTML = "Bienvenido "+ nom.value;
        ventana.document.body.appendChild(texto);
    }
         
}




