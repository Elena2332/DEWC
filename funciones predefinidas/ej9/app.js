let newWindow;

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
        newWindow=window.open('','_blank','width=200','height=200','menubar=yes','resizable=no','scrollbars=no','toolbar=no','location=no','status=no','top=50','left=150');
        let eleP_texto=document.createElement("p");
        eleP_texto.innerHTML="Bienvenido "+nom.value;
        newWindow.document.body.appendChild(eleP_texto);
        // text.innerHTML = "Bienvenido "+nom;
    }
         
}




