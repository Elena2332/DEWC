let inpDNI, inpLetra, pRes;
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

window.onload
{
    inpDNI = document.getElementById("inpDNI");
    inpLetra = document.getElementById("inpLetra");
    pRes = document.getElementById("res");
    btnValidar = document.getElementById("btnVal");
    
    //eventos
    btnValidar.addEventListener("click",validar);
    inpDNI.addEventListener("input",comprobarLen);
    inpLetra.addEventListener("input",estilizarLetra);
}

function validar()
{
    if(inpLetra.value.length!=1)
    {
        res.innerHTML = "Introduce <strong>UNA</strong> letra melón"; 
        res.style = "visibility: visible; color: red;"; 
    }
    else
    {
        let len = comprobarLen();
        if(len != 8)
        {
            res.innerHTML = "Son <strong>8</strong> numeros"; 
            res.style = "visibility: visible; color: red;"; 
        }
        else
        {
            let num = inpDNI.value+"";  //numero en string 
            let letraCorrecta = letras[num%23];   // num/23 = posicion del caracter
            if(letraCorrecta == (inpLetra.value).toUpperCase())
            {
                res.innerHTML = "<strong>Es VALIDO</strong>"; 
                res.style = "visibility: visible; color: green;"; 
                inpDNI.style = "color: green;";  
                inpLetra.style = "color: green;";
            }
            else
            {
                res.innerHTML = "<strong>Es INVALIDO</strong>"; 
                res.style = "visibility: visible; color: red;"; 
            }
        }
    }
}

function comprobarLen()
{
    res.style = "visibility: hidden;"; 
    inpDNI.style = "color: black;";  
    inpLetra.style = "color: black;";  
    let len = inpDNI.value.length;
    if(len != 8)
        inpDNI.style = "color: red;";   
    return len;
}

function estilizarLetra()
{
    inpLetra.style = "color: black;";  
    inpDNI.style = "color: black;";  
    inpLetra.value = inpLetra.value.toUpperCase();
}