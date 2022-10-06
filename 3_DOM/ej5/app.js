//eval("str");     calcular funcion
let buttons;
let operadores = ["+","-","*","/"]; 
let numeros = ["1","2","3","4","5","6","7","8","9","0"];
let inpTxt;
let btnAnterior = "";

window.onload = function() 
{
    inpTxt = document.getElementById("inpNums");
    buttons = document.getElementsByTagName("button");
    for(let i=0; i<buttons.length; i++)
        buttons[i].addEventListener("click", pulsar);
}

function pulsar()
{
    let txtBtn= this.value;
    if(operadores.includes(txtBtn))  // si es un operador
    {
        if(numeros.includes(btnAnterior) || btnAnterior == '=')   // si ya hay un numero 
            inpTxt.value = inpTxt.value+txtBtn;     
    }
    else
    {
        if(numeros.includes(txtBtn))   // si es un numero
            inpTxt.value = inpTxt.value+txtBtn;
        else
        {
            if(txtBtn == 'C')   // si es C 
                inpTxt.value = "";   // vaciar input
            else  
            {   // si es '='
                if(operadores.includes(btnAnterior))  // si lo ultimo es un operador
                    inpTxt.value = inpTxt.value.substring(0, inpTxt.value.length-1);
                else
                {
                    if(btnAnterior != 'C')
                    {
                        let res = eval(inpTxt.value);  // calcular resultado
                        console.log(res);
                        inpTxt.value = res;
                    }
                }
            }            
        }        
    }
    btnAnterior = txtBtn;
}