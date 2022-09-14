window.onload
{
    let texto="";
    let num=0;
    let i=1; 
    while(i<=100 )
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
        i++;
    }
    let contenido=document.createElement("p");
    contenido.innerHTML=texto;
    document.body.appendChild(contenido);
}