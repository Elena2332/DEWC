let diaD,diaU, mesD,mesU, anioM,anioC,anioD,anioU;
let horaD,horaU, minD,minU ,segD,segU;

const IMGS = ["../images/0.jpg", "../images/1.jpg",
                "../images/2.jpg", "../images/3.jpg",
                "../images/4.jpg", "../images/5.jpg",
                "../images/6.jpg", "../images/7.jpg",
                "../images/8.jpg", "../images/9.jpg"];

window.onload = function() 
{
    diaD = document.getElementById("diaD");
    diaU = document.getElementById("diaU");
    mesD = document.getElementById("mesD");
    mesU = document.getElementById("mesU");
    anioM = document.getElementById("anioM");
    anioC = document.getElementById("anioC");
    anioD = document.getElementById("anioD");
    anioU = document.getElementById("anioU");
    horaD = document.getElementById("horaD");
    horaU = document.getElementById("horaU");
    minD = document.getElementById("minD");
    minU = document.getElementById("minU");
    segD = document.getElementById("segD");
    segU = document.getElementById("segU");

    colocar();
    setInterval(colocar,1000);
}

function colocar()
{
    let date = new Date();
    //colocar anio
    let anio = date.getFullYear();
    anioM.src = IMGS[Math.floor( anio/1000 )];
    anioC.src = IMGS[Math.floor( anio/100 %10 )];
    anioD.src = IMGS[Math.floor( anio%100 /10 )];
    anioU.src = IMGS[ anio%10 ];

    //colocar mes
    let mes = 1+date.getMonth();
    mesD.src = IMGS[Math.floor( mes/10 )];
    mesU.src = IMGS[mes%10];

    //colocar dia
    let dia = date.getDate();
    diaD.src = IMGS[Math.floor( dia/10 )];
    diaU.src = IMGS[ dia%10 ];

    //colocar hora
    let hora = date.getHours();
    horaD.src = IMGS[Math.floor( hora/10 )];
    horaU.src = IMGS[ hora%10 ];

    //colocar minutos
    let min = date.getMinutes();
    minD.src = IMGS[Math.floor( min/10 )];
    minU.src = IMGS[ min%10 ];

    //colocar segundos
    let seg = date.getSeconds();
    segD.src = IMGS[Math.floor( seg/10 )];
    segU.src = IMGS[ seg%10 ];

}
