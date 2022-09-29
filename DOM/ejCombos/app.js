let continentes = ["Seleccione continente","Europa","Asia","Africa","America","Oceania"];
let pEuropa = ["0","1","2","3","4","5","6","7","8","9"];
// let pEuropa = ["España","Francia","Italia","Alemania","Belgica"];
let pAsia = ["China","Japon","Iran","Iraq","Afganistan","Paquistan"];
let pAfrica = ["Marruecos","Nigeria","Zambia","Lesoto","Argelia","Somalia"];
let pAmerica = ["Canada","Estados Unidos","Mexico","Argentina","Chile"];
let pOceania = ["Australia","Nueva Zelanda","Tonga","Samoa","Isla Marshall","Isla Salomon"];
let selecContinente, selecPais;
let anterior = 0;

window.onload
{
    selecContinente = document.getElementById("continente");
    selecPais = document.getElementById("pais");

    for(var i=0; i<continentes.length ;i++)
        selecContinente.options[i] = new Option(continentes[i], i);
    
    selecContinente.addEventListener("change",llenarPaises);
    llenarPaises();
}


function llenarPaises()
{
    vaciar();

    let seleccionado = selecContinente.value;
    switch(seleccionado)
    {
        case "0":     //seleccione continente
            selecPais.options[0] = new Option("Seleccione pais", 0);
            anterior = 0;
            break;
        case "1":     //Europa
            for(var i=0; i<pEuropa.length ;i++)
                selecPais.options[i] = new Option(pEuropa[i], i);
            anterior = 1;
            break;
        case "2":     //Asia
            for(var i=0; i<pAsia.length ;i++)
                selecPais.options[i] = new Option(pAsia[i], i);
            anterior = 2;
            break;
        case "3":     //Africa
            for(var i=0; i<pAfrica.length ;i++) 
                selecPais.options[i] = new Option(pAfrica[i], i);
            anterior = 3;
            break;
        case "4":     //America
            for(var i=0; i<pAmerica.length ;i++)
                selecPais.options[i] = new Option(pAmerica[i], i);
            anterior = 4;
            break;
        default:     //Oceania
            for(var i=0; i<pOceania.length ;i++)
                selecPais.options[i] = new Option(pOceania[i], i);
            anterior = 5;
            break;
    }
}

function vaciar()
{
    for(var j=0; j<=selecPais.options.length ;j++)
    {
        console.log(selecPais.options[j]);
        selecPais.remove(j);
    }
        
    // switch(anterior)
    // {
    //     case "1":     //anterior: Europa
    //         for(var i=0; i<=pEuropa.length ;i++)
    //             selecPais.remove(i);
    //         break;
    //     case "2":     //anterior: Asia
    //         for(var i=0; i<=pAsia.length ;i++)
    //             selecPais.remove(i);
    //         anterior = 1;
    //         break;
    //     case "3":     //anterior: Africa
    //         for(var i=0; i<=pAfrica.length ;i++) 
    //             selecPais.remove(i);
    //         break;
    //     case "4":     //anterior: America
    //         for(var i=0; i<=pAmerica.length ;i++)
    //             selecPais.remove(i);
    //         break;
    //     default:     //anterior: Oceania
    //         for(var i=0; i<=pOceania.length ;i++)
    //             selecPais.remove(i);
    //         break;
    // }
}
