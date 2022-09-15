window.onload
{
    let num=prompt("Introduce numero");
    let factorial=num;
    for(; num!=1 ;num--)
    {
        factorial = factorial*(num-1);        
    }
    alert("Resultado: "+factorial);
}