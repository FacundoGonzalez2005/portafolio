let resto = document.querySelector(".resultados")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 4; i++){
       let puntu = ""
       let rango = ""
       if (data[i].puntuacion === "4"){
            puntu = "star star star star"
        }
        else if (data[i].puntuacion === "3"){
            puntu = "star star star"
        }
        else if (data[i].puntuacion === "2"){
            puntu = "star star"
        }
        else if (data[i].puntuacion === "1"){
            puntu = "star"
        }
        else{
            puntu = "person"
        }

        if (data[i].rango === "4"){
            rango = "attach_money attach_money attach_money attach_money"
        }
        else if (data[i].rango === "3"){
            rango = "attach_money attach_money attach_money"
        }
        else if (data[i].rango === "2"){
            rango = "attach_money attach_money"
        }
        else{
            rango = "attach_money"
        }


         document.querySelector('.resultados').innerHTML +=
         /*html*/`<a href="resto.html" class="resto">
            <div class="imagen"><img class="imagen" src=${data[i].avatar.src} alt=""></div>
            <div class="datos">
                <div class="texto">
                    <h4>${data[i].name}</h4>
                    <p>${data[i].direccion}</p>
                    <p>${data[i].horario}</p>
                    <div class="caja">
                        <div class="estrellas">
                            <span class="iconos">${puntu}</span>
                        </div>
                        <div class="plata">
                             <span class="iconos">${rango}</span>
                        </div>
                    </div>
                    <div class="puntuacion">
                        ${data[i].puntuacion}
                    </div>
                    <div class="distancia">
                        3km
                    </div>
                </div>
            </div>
        </a>` 
       
    }
})


let info = document.querySelector(".contenedor_tarjetas")

fetch('js/platos_peruanos.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 7; i++){

         document.querySelector('.contenedor_tarjetas').innerHTML +=
         /*html*/`<a href="Plato.html" class="tarjeta">
            <div class="foto pr">
                <img src=${data[i].image} alt=""class="imagen radius">
                <div class="tag pa sombra">$${data[i].price}</div>
            </div>
            <div class="plato_desc">
                <h3>${data[i].plato}</h3>
                <p>${data[i].description}</p>
            </div>
        </a>` 
       
    }
})
