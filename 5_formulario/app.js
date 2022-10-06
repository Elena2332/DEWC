let inpNom,inpEm,inpMsg,inpCurso,selAsun,divCurso;
window.onload
{
    inpNom = document.getElementById("inpNom");
    inpEm = document.getElementById("inpEmail");
    inpMsg = document.getElementById("inpMsg");
    inpCurso = document.getElementById("inpCurso");
    selAsun = document.getElementById("selAsun");
    divCurso = document.getElementById("divCurso");
    llenarSelect();
    comprobar();
    selAsun.addEventListener("change",comprobar);
}

function llenarSelect()
{
    let ops = ["Seleccione informacion","Apuntarse a un curso","Otro motivo"];
    let txtHTML = "";
    for(let i=0; i<3 ;i++)
        txtHTML = txtHTML+"<option value="+i+">"+ops[i]+"</option>";
    selAsun.innerHTML = txtHTML;
}

function comprobar()
{
    if(selAsun.value == 1)  //apuntarse a un curso
        divCurso.style = "display: block;";
    else  // selec info u otro motivo
        divCurso.style = "display: none;";
}