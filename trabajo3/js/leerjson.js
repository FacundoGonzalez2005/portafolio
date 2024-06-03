let resto = document.querySelector(".resultados")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 10; i++){
       
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
                            <span class="iconos">star</span>
                            <span class="iconos">star</span>
                            <span class="iconos">star</span>
                            <span class="iconos">star</span>
                            <span class="iconos">star</span>
                        </div>
                        <div class="plata">
                            <i class="fa-solid fa-euro-sign"></i>
                            <i class="fa-solid fa-euro-sign"></i>
                            <i class="fa-solid fa-euro-sign"></i>
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


