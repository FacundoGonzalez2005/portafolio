let resto = document.querySelector(".resultados");

fetch("js/restaurantes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i=0; i < 3; i++){
    // data.forEach(element => {
    //   resto.appendChild=""
     
    // });
      // almaceno en la variable restaurante el valor de i del FOR
      let restaurante = data[i];

      let cartaRestaurante = document.createElement("a");
      cartaRestaurante.classList.add("resto");
      // almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
      cartaRestaurante.id = restaurante.truck_id;
      cartaRestaurante.innerHTML = /*html*/ `
        <a href="resto.html" class="resto">
            <div class="imagen"><img class="imagen" src=${restaurante.avatar.src} alt=""></div>
            <div class="datos">
                <div class="texto">
                    <h4>${restaurante.name}</h4>
                    <p>${restaurante.direccion}</p>
                    <p>${restaurante.horario}</p>
                    <div class="caja">
                        <div class="estrellas">
                            <span class="iconos">${restaurante.puntuacion}</span>
                        </div>
                        <div class="plata">
                             <span class="iconos"></span>
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