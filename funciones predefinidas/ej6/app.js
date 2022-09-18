let nac = prompt("Introduce fecha de nacimiento (yyyy/mm/dd)");
nac = nac.split("/");
let ahora = new Date();  

let edad = ahora.getFullYear()-nac[0];
if(ahora.getMonth()>= nac[1]  &&  ahora.getDate()>= nac[2])
        edad--;

let texto=document.createElement("p");
texto.innerHTML="Nació en: "+nac[2]+"/"+nac[1]+"/"+nac[0]+"<br> Tiene "+edad+" años";
document.body.appendChild(texto);
