window.onload
{
    let texto="";
    for(let num=1, i=0; num<=100 ; num++)
    {
        if(num%2 == 0)
        {
            texto = texto+num+",";
            i++;
        }      
        if(i== 5)
        {
            texto = texto+"<br>";
            i=0;
        }            
    }
    let contenido=document.createElement("p");
    contenido.innerHTML=texto;
    document.body.appendChild(contenido);
}