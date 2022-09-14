window.onload
{
    let texto="";
    let num=0, cont=0;
    for(let i=1; true ; i++)
    {
        num=0;
        for(let j=0; j<=i ; j++)
        {
            num = num+j;
        }
        if(num<1000)
        {
            if(num%2 == 1) // si impar
            {
                texto = texto+num+",";
                cont++;
                if(cont == 5)
                {
                    texto = texto+"<br>";
                    cont=0;
                }   
            }
        }
        else
            break;          
    }
    let contenido=document.createElement("p");
    contenido.innerHTML=texto;
    document.body.appendChild(contenido);
}