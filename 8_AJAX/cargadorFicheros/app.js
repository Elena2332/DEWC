let tabla, btn;
window.onload
{
    tabla = document.getElementById("tabla");
    btn = document.getElementById("btnEnviar");
    btn.addEventListener("click",llenarTabla);
}


function llenarTabla()
{
    fetch('marcadores.json')
        .then((res)=> res.json())
            .then((data) => {
                let txtHTML = "<tr><th>Ciudad</th><th>Descripcion</th><th>Ranking</th></tr>";
                for(let i=0; i<data.length ;i++)
                    txtHTML = txtHTML+"<tr><td>"+data[i]['city']+"</td><td>"+data[i]['description']+"</td><td>"+data[i]['ranking']+"</td></tr>";
                tabla.innerHTML= txtHTML;
            }
    )
}

/* fetch('cuento.JSON') 
        .then((resolve) => resolve.json()) 
            .then((data) => {
                p1.innerHTML = data.nombre;
                p2.innerHTML = data.apellido;
            });
*/
