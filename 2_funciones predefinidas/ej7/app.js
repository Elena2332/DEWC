let ahora = new Date();
let anio = ahora.getFullYear();
ahora = ahora.getTime();  // milisegundos desde 
let comienzo = new Date(anio,1,1).getTime();  // milisegundos del 1/1/este anio  al  1/1/1970

let diasPasados = (ahora-comienzo)/(1000*3600*24); // dias
let horas = (diasPasados-Math.floor(diasPasados)) * 24; // decimales de los dias a horas
let mins = (horas-Math.floor(horas)) * 60;  // decimales de los horas a minutos
let segs = Math.floor((mins-Math.floor(mins)) * 60); // decimales de los minutos a segundos

let texto=document.createElement("p");
texto.innerHTML="Desde: "+anio+" han pasado "+ Math.floor(diasPasados)+"dias "+Math.floor(horas)+"h "+Math.floor(mins)+"min "+segs+"s";
document.body.appendChild(texto);
