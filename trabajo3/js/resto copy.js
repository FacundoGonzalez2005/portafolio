let resto = document.querySelector(".resto_desc");

fetch("js/restaurantes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(plato => {
        if( plato.truck_id == localStorage.getItem("indiceCache") ){
            document.querySelector(".resto_titulo").querySelector("h2").innerText = plato.name
            document.querySelector("span").innerHTML = plato.bio
            document.querySelector("flex100").querySelector("resto_titulo").querySelector("div").innerHTML = plato.puntuacion
            document.querySelector("resto_image").querySelector("img").innerHTML = plato.cover_photo.src 
        }
    });
})