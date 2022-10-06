/* Debemos obtener el resto de la división entera del número del DNI y el número 23. Con el resto de esa división obtenemos 
la letra seleccionándola del Array de letras siguiente:

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

Si el resto de la división es 0, la letra del DNI es la ‘T’ y si el resto es 4 la letra es la ‘G’.

Sabiendo esto, vamos a realizar un pequeño script que:

Vamos a guardar en una variable el número de DNI y en otra variable la letra del DNI que dará el usuario.
Lo primero comprobaremos si el número está comprendido entre 0 y 99999999. Eso significará que el usuario ha introducido mal el número y se lo mostraremos con un mensaje.
Si el número es válido, calcularemos la letra del Array que hemos dado antes.
Cuando ya esté calculada, la compararemos con la que hemos almacenado en el primer punto. Si coinciden, mostraremos un mensaje como que son correctos los campos introducidos, y si no lo es, mostraremos un mensaje como que la letra introducida es incorrecta.
 */
let inpDNI, inpLetra;
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

window.onload
{
    inpDNI = document.getElementById("inpDNI");
    inpLetra = document.getElementById("inpLetra");
    btnValidar = document.getElementById("btnVal");
    btnValidar.addEventListener("click",validar);
    inpDNI.addEventListener("input",comprobarLen);
    console.log(letras.length);
}

function validar()
{
    if(inpLetra.value.length!=1)
    {
        let lblErr = document.createElement("p");
        lblErr.innerHTML = "Introduce <strong>UNA</strong> letra melón"; 
        document.appendChild(lblErr);        
    }
    else
    {
        let len = comprobarLen();
        if(len != 8)
        {
            let lblErr = document.createElement("p");
            lblErr.innerHTML = "Solo <strong>8</strong> numeros"; 
            document.appendChild(lblErr); 
        }
        else
        {
            let num = inpDNI.value+"";  //numero en string 
            let res = 0;
            for(let i=0; i<len ;i++)
                res = res + parseInt(num.charAt(i));
            res = res%23;   // suma/23 = posicion del caracter
            console.log("resto "+res);
            let letraCorrecta = letras[res];
            console.log("letra del array "+letraCorrecta);
            console.log("letra input "+(inpLetra.value).toUpperCase());
            if(letraCorrecta == (inpLetra.value).toUpperCase())
            {
                let lblCorr = document.createElement("p");
                lblCorr.innerHTML = "<strong>Es VALIDO</strong>"; 
                lblCorr.style = "color: green;"; 
                document.body.appendChild(lblCorr); 
            }
            else
            {
                let lblErr = document.createElement("p");
                lblErr.innerHTML = "<strong>Es INVALIDO</strong>"; 
                lblErr.style = "color: red;"; 
                document.body.appendChild(lblErr); 
            }
        }
    }
}

function comprobarLen()
{
    inpDNI.style = "color: black;";  
    inpLetra.style = "color: black;";  
    let len = inpDNI.value.length;
    if(len != 8)
        inpDNI.style = "color: red;";   
    console.log(len);
    return len;
}

