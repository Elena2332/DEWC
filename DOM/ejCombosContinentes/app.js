let continentes = ["Seleccione continente","Europa","Asia","Africa","America","Oceania"];
let pEuropa = ["Seleccione continente","España","Francia","Italia","Alemania","Belgica"];
let pAsia = ["Seleccione continente","China","Japon","Iran","Iraq","Afganistan","Paquistan"];
let pAfrica = ["Seleccione continente","Marruecos","Nigeria","Zambia","Lesoto","Argelia","Somalia"];
let pAmerica = ["Seleccione continente","Canada","Estados Unidos","Mexico","Argentina","Chile"];
let pOceania = ["Seleccione continente","Australia","Nueva Zelanda","Tonga","Samoa","Isla Marshall","Isla Salomon"];
let selecContinente, selecPais;

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
    selecPais.innerHTML="";  //vaciar antes de llenar

    let seleccionado = selecContinente.value;
    switch(seleccionado)
    {
        case "0":     //seleccione continente
            selecPais.options[0] = new Option("Seleccione pais", 0);
            break;
        case "1":     //Europa
            for(var i=0; i<pEuropa.length ;i++)
                selecPais.options[i] = new Option(pEuropa[i], i);
            break;
        case "2":     //Asia
            for(var i=0; i<pAsia.length ;i++)
                selecPais.options[i] = new Option(pAsia[i], i);
            break;
        case "3":     //Africa
            for(var i=0; i<pAfrica.length ;i++) 
                selecPais.options[i] = new Option(pAfrica[i], i);
            break;
        case "4":     //America
            for(var i=0; i<pAmerica.length ;i++)
                selecPais.options[i] = new Option(pAmerica[i], i);
            break;
        default:     //Oceania
            for(var i=0; i<pOceania.length ;i++)
                selecPais.options[i] = new Option(pOceania[i], i);
            break;
    }
}
