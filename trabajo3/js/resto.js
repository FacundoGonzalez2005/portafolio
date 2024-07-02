let resto = document.querySelector(".resto_desc");
console.log(localStorage.getItem("indiceCache"))


fetch("js/restaurantes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(plato => {
        if( plato.truck_id == localStorage.getItem("indiceCache")){
            resto.innerHTML += `
            <section class="resto_image">
            <a href="index.html" class="volver iconos pa">close</a>
            <img class="img_fit" src=${plato.avatar.src} alt="">
            <div class="tag pa centgrid sombra">4.8</div>
        </section>
        <div class="flex100">
            <div class="resto_titulo">
                <h2>${plato.name}</h2>
                <h4>${plato.category}</h4>
            </div>
            <div class="iconos">
                <span>euro</span><span>euro</span><span>euro</span>
            </div>
        </div>
        <section class="info">
            <div class="iconos">
                <span>schedule</span><span>location_on</span><span>room_service</span>
            </div>
            <div class="texto">
                <span>10AM-10PM</span><span>1.6KM</span><span>DELIVERY</span>
            </div>
        </section>
        <span>${plato.bio}</span> `
        }
    });
})