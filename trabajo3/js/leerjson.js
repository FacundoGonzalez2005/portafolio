let resto = document.querySelector(".restaurantes")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 100; i++){
       
         document.querySelector('.restaurantes').innerHTML +=
         /*html*/`<a class="resto" href="resto1.html">

         <div class="imagen_resto"><img src=${data[i].avatar.src} alt=""></div>



         <div class="desc_resto">
             <h3>${data[i].name}</h3>
             <h5 class="gris_txt">
                 <p>${data[i].direccion}</p>
                 <p>${data[i].horario}s</p>
             </h5>
             <div class="precio_val">
                 <div class="valoracion verde_txt">
                     <i class="iconos">${data[i].puntuacion}</i>
                    
                     (72)
                 </div>
                 <div class="precio verde_txt">
                     <i class="iconos">attach_money</i><i class="iconos">attach_money</i><i
                         class="iconos gris_txt">attach_money</i>

                 </div>
             </div>

         </div>

         <div class="puntuacion">${data[i].puntuacion}</div>
         <div class="distancia"> 3KM</div>

     </a>` 
       
    }
})


