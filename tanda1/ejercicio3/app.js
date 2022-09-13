window.onload
{
    let texto="";
    let num=1, i=0;
    while( num<=100 )
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
        num++;
    }
    let contenido=document.createElement("p");
    contenido.innerHTML=texto;
    document.body.appendChild(contenido);
}