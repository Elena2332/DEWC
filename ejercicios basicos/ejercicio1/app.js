window.onload
{
    let nom = prompt("Introduce un nombre");
    let ape1 = prompt("Introduce primer apellido");
    let ape2 = prompt("Introduce segundo apellido");

    let texto=document.createElement("p");
    texto.innerHTML="Nombre: "+nom+" <br> Primer apellido: "+ape1+" <br> Segundo apellido: "+ape2+"<br><strong>"+ nom+" "+ape1+" "+ape2+"</strong>";
    document.body.appendChild(texto);
}

   