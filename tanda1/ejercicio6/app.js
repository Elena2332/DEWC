window.onload
{
    let texto="";
    let num=0,salto=0;
    let contenido=document.createElement("p");
    let seguir;
    do
    {
        for(let cont=0; cont<25 ;cont++)
        {                
            num=num+2;
            texto=texto+num+',';
            salto++;
            if(salto == 5)
            {
                texto = texto+"<br>"
                salto = 1;
            }
        }

        contenido.innerHTML=texto;
        document.body.appendChild(contenido);

        seguir = confirm();
    }while(seguir)
}