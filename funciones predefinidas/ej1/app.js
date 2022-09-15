window.onload
{
    let str = prompt('Introduce texto');
    let texto=document.createElement("p");
    texto.innerHTML=length(str);
    document.body.appendChild(texto);
}