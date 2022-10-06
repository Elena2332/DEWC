let buttons;
let operadores = ["+","-","*","/","Raiz","%"]; 
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
function elenanito()
{
    let mierda="2+4*3";
    console.log(Function("return "+mierda)());
    //  1/x:= Function("return 1/("+mierda+")")();
    //  raiz:= Function("return sqrt("+mierda+")")();
}


function pulsar()
{
    let txtBtn= this.value;
    if(operadores.includes(txtBtn))  // si es un operador
    {
        if(numeros.includes(btnAnterior) || btnAnterior=="+/-" || btnAnterior=="=" || btnAnterior=="1/x")   // si ya hay un numero 
            inpTxt.value = inpTxt.value+txtBtn;     
    }
    else
    {
        if(numeros.includes(txtBtn))   // si es un numero
            inpTxt.value = inpTxt.value+txtBtn;
        else
        {
            switch(txtBtn)
            {
                case "C":
                    inpTxt.value = "";   // vaciar input
                    break;
                case "CE":
                    // borra un numero entero
                    break;
                case "R":
                    // borra un caracter
                    break;
                case "1/x":
                    break;
                case "+/-":
                    break;
                case ".":
                    if(btnAnterior)
                    {
                        inpTxt.value = inpTxt.value+txtBtn;
                    }
                    break;
                case "=":
                    if(operadores.includes(btnAnterior) || btnAnterior==".")  // si lo ultimo es un operador o .
                        inpTxt.value = inpTxt.value.substring(0, inpTxt.value.length-1);
                    else
                    {
                        if(inpTxt.value.length>0) //si no esta vacio
                        {
                            let res = eval(inpTxt.value);  // calcular resultado
                            inpTxt.value = res;
                        }
                    }
                    break;
            }                      
        }        
    }
    btnAnterior = txtBtn;
}