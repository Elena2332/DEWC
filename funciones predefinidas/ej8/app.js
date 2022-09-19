let cadena = "¡HOLA!";
document.getElementById("text").innerHTML="La variable contiene: "+cadena+"<br>Su longitud es de "+cadena.length+"segun la tabla";

let filaNum=document.createElement("tr");
let txt="<td>Posicion</td>";
for (let i=0; i< cadena.length; i++)
    txt += "<td>"+ i +"</td>";
filaNum.innerHTML = txt;


let filaLetra=document.createElement("tr");
txt = "<td>Contenido</td>";
for (let i=0; i< cadena.length; i++){
    txt += "<td>" + cadena.substring(i, i+1) + "</td>";
}
filaLetra.innerHTML = txt;

let tabla = document.getElementById("tabla");
tabla.appendChild(filaNum);
tabla.appendChild(filaLetra);
document.body.appendChild(tabla);



