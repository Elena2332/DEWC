let ahora = new Date();
let anio = ahora.getFullYear();
ahora = ahora.getTime();  // milisegundos desde 
let comienzo = new Date(anio,1,1).getTime();  // milisegundos del 1/1/este anio  al  1/1/1970

let diasPasados = (ahora-comienzo)/(1000*3600*24);


let texto=document.createElement("p");
texto.innerHTML="Desde: "+anio+" han pasado"+ "";
document.body.appendChild(texto);
