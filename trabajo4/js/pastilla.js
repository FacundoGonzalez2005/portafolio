let resto = document.querySelector(".pastilla-encabezado");
console.log(localStorage.getItem("indiceCache"))


fetch("json/pastilla.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(plato => {
        if( plato.truck_id == localStorage.getItem("indiceCache")){
            resto.innerHTML += `
            <div class="pastilla-imagen">
                <img src=${plato.imagen} alt="">
            </div>
            <div class="pastilla-texto">
                <h2>${plato.nombre}</h2>
                <span>${plato.descripcion}</span>
            </div> `
        }
    });
})

// obtengo desde la caché el valor almacenado en indiceCache
console.log("con localstorage " + localStorage.getItem("indiceCache"));
let k = localStorage.getItem("indiceCache");