window.onload
{
    let texto="";
    let num=0;
    for(let i=1; i<=100 ; i++)
    {
        num=0;
        for(let j=0; j<=i ; j++)
        {
            num = num+j;
        }
        texto = texto+num+",";
        
        if(i%10 == 0)
        {
            texto = texto+"<br>";
        }    
    }
    let contenido=document.createElement("p");
    contenido.innerHTML=texto;
    document.body.appendChild(contenido);
}