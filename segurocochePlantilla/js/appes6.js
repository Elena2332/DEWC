let selMarca, selAnio, inpTipo, btnCotizar;
const BASICO = 2000, TOPE = 1000;
window.onload
{
    selMarca = document.getElementById("marca");
    selAnio = document.getElementById("anio");
    inpTipo = document.getElementById("tipo");
    btnCotizar = document.getElementsByTagName("button")[0];
    btnCotizar.addEventListener("click",calcular);
}
/*
Importe base = 2000 €

Procedencia: americano, asiático y europeo.
 Si es americano, lo incrementamos un 15%.
 Si es asiático, lo incrementamos un 5%.
 Si es europeo, lo incrementamos un 35%.

Tipo: básico y completo.
 Si es básico lo incrementamos un 30%.
 Si es avanzado, lo incrementamos un 50%.

Leemos el año: cada año de diferencia hay que reducir 3% el valor del seguro
*/
function calcular()
{
    let marca = selMarca.value;
    let anio = selAnio.value;
    let tipo = inpTipo.value;
    console.log("M: "+marca+" - "+anio+": "+tipo)
    let res = 0; 
    //Procedencia
    switch(marca)
    {
        case 1:
            res = BASICO + (BASICO*0.15);
            break;
        case 2:
            res = BASICO + (BASICO*0.05);
            break;
        case 3:
            res = BASICO + (BASICO*0.35);
            break;
        default:
            return -1;
    }
    //Tipo
    if(tipo == "basico")
        res = res + (BASICO*0.3);
    else
        res = res + (BASICO*0.5);
    //Anio
    

}


