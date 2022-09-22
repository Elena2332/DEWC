//eval("str");     calcular funcion
let buttons; 
let inpTxt;

window.onload = function() 
{
    inpTxt.getElementById("inpNums");
    buttons = document.getElementsByTagName("button");
    for(let i=0; i<buttons.length; i++)
        buttons[i].addEventListener("click", pulsar);
}

function pulsar()
{
    let txtBtn= this.textContent;
    
}