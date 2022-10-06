let buttons;
let operadores = ["+","-","*","/","%"]; 
let numeros = ["1","2","3","4","5","6","7","8","9","0"];
let inpTxt;
let btnAnterior = "";

window.onload
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
            let num;
            switch(txtBtn)
            {
                case "C":
                    inpTxt.value = "";   // vaciar input
                    break;
                case "CE":
                    // borra un numero entero
                    inpTxt.value = inpTxt.value.substring(0,ultimoNumero());
                    break;
                case "R":
                    // borra un caracter
                    inpTxt.value = inpTxt.value.substring(0,inpTxt.value.length-1);
                    break;
                case "Raiz":
                    num = inpTxt.value.substring(ultimoNumero(),inpTxt.value.length);
                    num = Math.sqrt(num);
                    inpTxt.value = inpTxt.value.substring(0,ultimoNumero()-1)+num; 
                    break;
                case "1/x":
                    num = inpTxt.value.substring(ultimoNumero(),inpTxt.value.length);
                    num = Function("return 1/("+num+")")();
                    inpTxt.value = inpTxt.value.substring(0,ultimoNumero()-1)+num; 
                    break;
                case "+/-":
                    num = inpTxt.value.substring(ultimoNumero(),inpTxt.value.length);
                    num = parseInt(num)*(-1);
                    inpTxt.value = inpTxt.value.substring(0,ultimoNumero())+num;
                    break;
                case ".":
                    if(numeros.includes(btnAnterior))
                        inpTxt.value = inpTxt.value+txtBtn;
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


function ultimoNumero()  // devuelve donde empieza el ultimo numero
{
    for(let i=inpTxt.value.length-1; i>=0 ; i--)
    {
        if(operadores.includes(inpTxt.value.charAt(i)))
        {
            if(i > 0)
            {
                if(operadores.includes(inpTxt.value.charAt(i-1)))
                    return i;
                else
                    return i+1;
            }
        }
    }
    return 0;
}