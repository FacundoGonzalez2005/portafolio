let menu = document.querySelector(".contenedor_tarjetas");

fetch("json/restaurantes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(plato => {
      // almaceno en la variable restaurante el valor de i del FOR
      let cartaRestaurante = document.createElement("a");
      // almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
      
      if (plato.truck_id == localStorage.getItem("indiceCache")) {
        for (let x = 0; x < plato.menu.length; x++) {
          menu.innerHTML += /*html*/ `
                <a href="Plato.html" class="tarjeta">
                  <div class="foto pr">
                      <img src=${plato.menu[x].image} alt="" class="img_fit radius">
                      <div class="tag pa sombra">${plato.menu[x].price}</div>
                  </div>
                  <div class="plato_desc pd25">
                      <h3>${plato.menu[x].plato}</h3>
                      <p>${plato.menu[x].description}</p>
                  </div>
                </a>
              `;

          cartaRestaurante.addEventListener("click", function () {
                let idRestauranteSeleccionado = plato.menu.plato;
                //almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
                localStorage.setItem("indiceCache", idRestauranteSeleccionado);
                console.log(idRestauranteSeleccionado);
          });
        }
      };
    });
  });

// obtengo desde la caché el valor almacenado en indiceCache
console.log("con localstorage " + localStorage.getItem("indiceCache"));
let k = localStorage.getItem("indiceCache");

// fetch('json/restaurantes.json')
//       .then(response => response.json())
//       .then(data => {
//         const restaurantId = localStorage.getItem("id");
//         const menuSection = document.querySelector(".contenedor_tarjetas");
//         console.log(menuSection)

//         data.forEach(restaurante => {
//           if (restaurante.truck_id === restaurantId) {
//             document.getElementById("restaurant_name").innerText = restaurante.name;

//             restaurante.menu.forEach(plato => {
//               const tarjeta = document.createElement("a");
//               tarjeta.classList.add("tarjeta");
//               tarjeta.href = "Plato.html";

//               tarjeta.addEventListener("click", () => {
//                 localStorage.setItem("plato", plato.plato);
//               });

//               tarjeta.innerHTML = `
//                 <div class="foto pr">
//                   <img src="${plato.image}" alt="" class="img_fit radius">
//                   <div class="tag pa sombra">${plato.precio}</div>
//                 </div>
//                 <div class="plato_desc pd25">
//                   <h3>${plato.nombre}</h3>
//                   <p>${plato.descripcion}</p>
//                 </div>
//               `;
//               menuSection.appendChild(tarjeta);
//             });
//           }
//         });
//       })