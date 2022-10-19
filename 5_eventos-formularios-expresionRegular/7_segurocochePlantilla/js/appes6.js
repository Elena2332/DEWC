let selMarca, selAnio, inpTipo, btnCotizar, divRes;
const BASICO = 2000;
window.onload
{
    selMarca = document.getElementById("marca");
    selAnio = document.getElementById("anio");
    inpTipo = document.getElementsByName("tipo");
    divRes = document.getElementById("resultado");
    llenarAnios();
    btnCotizar = document.getElementsByTagName("button")[0];
    btnCotizar.addEventListener("click",calcular);
}


function calcular()
{
    let marca = selMarca.value;
    let anio = selAnio.value;
    let tipo = inpTipo.value;
    let anioActual = new Date().getFullYear();
    let res = 0; 
    let bien = true;
    //Procedencia
    switch(marca)
    {
        case "1":
            res = BASICO + (BASICO*0.15);
            console.log('a');
            break;
        case "2":
            res = BASICO + (BASICO*0.05);
            console.log('b');
            break;
        case "3":
            res = BASICO + (BASICO*0.35);
            console.log('c');
            break;
        default:
            console.log('d');
            bien = false;
            break;
    }
    if(!bien)
        divRes.innerHTML = '<p class="error">INTRODUCE MARCA</p>';
    else
    {
        //Tipo
        if(tipo == "basico")
            res = res + (res*0.3);
        else
            res = res + (res*0.5);
        console.log(res);
        //Anio
        if(anioActual-anio >= 10)    // descuento maximo = 30%
            res = res - (res*(0.3));
        else
            res = res - (res*(anio*3/100)); 
        console.log(res);
        divRes.innerHTML= '<p class="correcto">Total: '+res+'</p>';
    }
}

function llenarAnios()
{
    let anioActual = new Date().getFullYear();
    for(let i=0,anio=anioActual; anio>=1930 ;i++,anio--)
        selAnio.options[i] = new Option(anio, i);
}
