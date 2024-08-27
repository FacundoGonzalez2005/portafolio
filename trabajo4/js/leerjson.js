let resto = document.querySelector(".contenedor");

fetch("json/pastilla.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i=0; i < 5; i++){
    // data.forEach(element => {
    //   resto.appendChild=""
     
    // });
      // almaceno en la variable restaurante el valor de i del FOR
      let restaurante = data[i];
      console.log(restaurante)
      let cartaRestaurante = document.createElement("a");
      cartaRestaurante.setAttribute("id",restaurante.truck_id);
      cartaRestaurante.setAttribute("href","pastilla.html");
      cartaRestaurante.setAttribute("onClick","guardarid(id)")
      cartaRestaurante.classList.add("resto");
      // almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
      cartaRestaurante.id = restaurante.truck_id;
      cartaRestaurante.innerHTML = /*html*/ `
            <a class="pastilla-contenedor" href="pastilla.html">
                <div class="pastilla">
                    <div class="pastilla-imagen">
                        <img src=${restaurante.imagen} alt="">
                    </div>
                    <div class="pastilla-texto">
                        <p>${restaurante.nombre}</p>
                        <p>${restaurante.descripcion}</p>
                    </div>
                    <div class="pastilla-boton">
                        <button class="check" id="check"><i class="fa fa-check"></i></button>
                    </div>
                </div>
                <div class="recordatorio">
                    <span class="recordatorio-boton"><i class="fa-solid fa-clock"></i>Bebelo a las 08:05</span>
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