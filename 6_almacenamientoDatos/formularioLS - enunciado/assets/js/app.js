let inpMsg, btnAgregar, divLista;
let twets = [];

window.onload
{
    inpMsg = document.getElementById("tweet");
    btnAgregar = document.getElementsByTagName("input")[0];
    divLista = document.getElementById("lista-tweets");
    btnAgregar.addEventListener("click",agregar);
    dibujar();
}

function dibujar()
{
    if(localStorage.getItem('twets'))
    {
        console.log('a')
    }
    else
        console.log('localstorage vacio');
}

function agregar()
{
    let txtMsg = inpMsg.value;
    if((txtMsg.trim()).length>0)
    {
        lista = document.getElementById("lista");
        if(lista == undefined)
        {
            
        }
        else
        {

        }
    }
    else
        console.log('no hay mensaje');
}

