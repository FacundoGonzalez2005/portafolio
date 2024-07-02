let menu = document.querySelector(".contenedor_tarjetas");

fetch("js/restaurantes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(resta => {
      // almaceno en la variable restaurante el valor de i del FOR
    //   let restaurante = data[resta];
    //   console.log(resta.menu[0])
      let cartaRestaurante = document.createElement("a");
    //   cartaRestaurante.setAttribute("id",restaurante.truck_id);
      cartaRestaurante.setAttribute("href","Plato.html");
      cartaRestaurante.setAttribute("onClick","guardarid(id)")
      cartaRestaurante.classList.add("menu");
      // almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
    //   cartaRestaurante.id = restaurante.truck_id;
           for (let i = 0; i < 3; i++) {    
            cartaRestaurante.innerHTML = /*html*/ `
            <a href="Plato.html" class="tarjeta">
            <div class="foto pr">
                <img src="" alt="" class="img_fit radius">
                <div class="tag pa sombra">${resta.menu[i].price}/div>
            </div>
            <div class="plato_desc pd25">
                <h3>${resta.menu[i].plato}</h3>
                <p>${resta.menu[i].description}</p>
            </div>
            </a>
            `;
        }

    //   cartaRestaurante.addEventListener("click", function () {
    //     let idRestauranteSeleccionado = restaurante.truck_id;
    //     //almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
    //     localStorage.setItem("indiceCache", idRestauranteSeleccionado);
    //     console.log(idRestauranteSeleccionado);
    //   });

    //   resto.appendChild(cartaRestaurante);
    });
    });

// // obtengo desde la caché el valor almacenado en indiceCache
// console.log("con localstorage " + localStorage.getItem("indiceCache"));
// let k = localStorage.getItem("indiceCache");