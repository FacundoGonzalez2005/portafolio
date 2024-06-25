// let resto = document.querySelector(".resultados")

// fetch('js/restaurantes.json')
// .then(response => {
//      return response.json()
//     })
// .then(data => {
//       for (let i=0; i < 3; i++){
//        let puntu = ""
//        let rango = ""
//        if (data[i].puntuacion === "4"){
//             puntu = "star star star star"
//         }
//         else if (data[i].puntuacion === "3"){
//             puntu = "star star star"
//         }
//         else if (data[i].puntuacion === "2"){
//             puntu = "star star"
//         }
//         else if (data[i].puntuacion === "1"){
//             puntu = "star"
//         }
//         else{
//             puntu = "person"
//         }

//         if (data[i].rango === "4"){
//             rango = "attach_money attach_money attach_money attach_money"
//         }
//         else if (data[i].rango === "3"){
//             rango = "attach_money attach_money attach_money"
//         }
//         else if (data[i].rango === "2"){
//             rango = "attach_money attach_money"
//         }
//         else{
//             rango = "attach_money"
//         }


//          document.querySelector('.resultados').innerHTML +=
//          /*html*/`<a href="resto.html" class="resto">
//             <div class="imagen"><img class="imagen" src=${data[i].avatar.src} alt=""></div>
//             <div class="datos">
//                 <div class="texto">
//                     <h4>${data[i].name}</h4>
//                     <p>${data[i].direccion}</p>
//                     <p>${data[i].horario}</p>
//                     <div class="caja">
//                         <div class="estrellas">
//                             <span class="iconos">${puntu}</span>
//                         </div>
//                         <div class="plata">
//                              <span class="iconos">${rango}</span>
//                         </div>
//                     </div>
//                     <div class="puntuacion">
//                         ${data[i].puntuacion}
//                     </div>
//                     <div class="distancia">
//                         3km
//                     </div>
//                 </div>
//             </div>
//         </a>` 
       
//     }
// })


// let info = document.querySelector(".contenedor_tarjetas")

// fetch('js/platos_peruanos.json')
// .then(response => {
//      return response.json()
//     })
// .then(data => {
//       for (let i=0; i < 7; i++){

//          document.querySelector('.contenedor_tarjetas').innerHTML +=
//          /*html*/`<a href="Plato.html" class="tarjeta">
//             <div class="foto pr">
//                 <img src=${data[i].image} alt=""class="imagen radius">
//                 <div class="tag pa sombra">$${data[i].price}</div>
//             </div>
//             <div class="plato_desc">
//                 <h3>${data[i].plato}</h3>
//                 <p>${data[i].description}</p>
//             </div>
//         </a>`
//     }
// })


// let opinion = document.querySelector(".contenedor_tarjetas2")

// fetch('js/reseñas_peruanos.json')

// .then(response => {
//      return response.json()
//     })
// .then(data => {
//       for (let i=0; i < 7; i++){

//          document.querySelector('.contenedor_tarjetas2').innerHTML +=
//          /*html*/`<article class="tarjeta">
//             <div class="foto pr">
//                 <img src=${data[i].img} alt="" class="imagen radius">
//                 <div class="tag pa sombra">${data[i].calificacion} <i class="iconos">star</i></div>
//             </div>
//             <div class="resena">
//                 <h3>${data[i].nombre}</h3>
//                 <h4>-${data[i].plato}</h4>
//                 <p>${data[i].description}</p>
//             </div>
//         </article>` 
       
//     }
// })


let resto = document.querySelector(".resultados");

fetch("js/platos.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i=0; i < 3; i++){
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
    data.forEach(element => {
      resto.appendChild=""
     
    });

    
      // almaceno en la variable restaurante el valor de i del FOR
      let restaurante = data[i];

      let cartaRestaurante = document.createElement("div");
      cartaRestaurante.classList.add("resto");
      // almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
      cartaRestaurante.id = restaurante.truck_id;
      cartaRestaurante.innerHTML = /*html*/ `
        <div class="imagen_resto"><img src=${restaurante.avatar.src} alt=""></div>
        <div class="desc_resto">
          <h3>${restaurante.name}</h3>
          <h5 class="gris_txt">
            <p>${restaurante.direccion}</p>
            <p>${restaurante.horario}s</p>
          </h5>
          <div class="precio_val">
            <div class="valoracion verde_txt">
              <i class="iconos">${restaurante.puntuacion}</i>
              (72)
            </div>
            <div class="precio verde_txt">
              <i class="iconos">attach_money</i><i class="iconos">attach_money</i><i
                  class="iconos gris_txt">attach_money</i>
            </div>
          </div>
        </div>
        <div class="puntuacion">${restaurante.puntuacion}</div>
        <div class="distancia"> 3KM</div>

        ------------------

        <a href="resto.html" class="resto">
            <div class="imagen"><img class="imagen" src=${restaurante.avatar.src} alt=""></div>
            <div class="datos">
                <div class="texto">
                    <h4>${restaurante.name}</h4>
                    <p>${restaurante.direccion}</p>
                    <p>${restaurante.horario}</p>
                    <div class="caja">
                        <div class="estrellas">
                            <span class="iconos">${puntu}</span>
                        </div>
                        <div class="plata">
                             <span class="iconos">${rango}</span>
                        </div>
                    </div>
                    <div class="puntuacion">
                        ${restaurante.puntuacion}
                    </div>
                    <div class="distancia">
                        3km
                    </div>
                </div>
            </div>
        </a>

        `;

      cartaRestaurante.addEventListener("click", function () {
        let idRestauranteSeleccionado = restaurante.truck_id;
        //almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
        localStorage.setItem("indiceCache", idRestauranteSeleccionado);
        console.log(idRestauranteSeleccionado);
      });

      resto.appendChild(cartaRestaurante);
    }
    });

// obtengo desde la caché el valor almacenado en indiceCache
console.log("con localstorage " + localStorage.getItem("indiceCache"));
let k = localStorage.getItem("indiceCache");