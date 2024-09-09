let resto = document.querySelector(".contenedor");

fetch("json/pastilla.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 5; i++) {
      let restaurante = data[i];
      let horaOriginal = restaurante.hora;
      
      // Añadir 5 minutos a la hora
      let [hora, minutos] = horaOriginal.split(':').map(Number);
      minutos += 5;
      
      // Ajustar minutos y hora en caso de que los minutos sean mayores o iguales a 60
      if (minutos >= 60) {
        minutos -= 60;
        hora += 1;
      }
      
      // Formatear la nueva hora en formato HH:MM
      let nuevaHora = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

      let cartaRestaurante = document.createElement("a");
      cartaRestaurante.setAttribute("id", restaurante.truck_id);
      cartaRestaurante.setAttribute("href", "pastilla.html");
      cartaRestaurante.setAttribute("onClick", "guardarid(id)");
      cartaRestaurante.classList.add("resto");
      cartaRestaurante.id = restaurante.truck_id;
      
      cartaRestaurante.innerHTML = /*html*/ `
            <a class="pastilla-contenedor" href="pastilla.html">
                <div class="pastilla">
                    <div class="pastilla-imagen">
                        <img src=${restaurante.imagen} alt="">
                    </div>
                    <div class="pastilla-texto">
                        <p>${restaurante.nombre}</p>
                        <p>Hoy a las ${restaurante.hora}</p>
                    </div>
                    <div class="pastilla-boton">
                        <button class="check" id="check"><i class="fa fa-check"></i></button>
                    </div>
                </div>
                <div class="recordatorio">
                    <span class="recordatorio-boton"><i class="fa-solid fa-clock"></i>Bebelo a las ${nuevaHora}</span>
                </div>
            </a>
        `;

      cartaRestaurante.addEventListener("click", function () {
        let idRestauranteSeleccionado = restaurante.truck_id;
        localStorage.setItem("indiceCache", idRestauranteSeleccionado);
        console.log(idRestauranteSeleccionado);
      });

      resto.appendChild(cartaRestaurante);
    }

    // Código para redirigir con pastilla2
    const pastilla2 = document.querySelector('.pastilla2');
    if (pastilla2) {
        pastilla2.addEventListener('click', function(event) {
            event.preventDefault();
            const pastillaId = pastilla2.getAttribute('data-id');
            localStorage.setItem('pastillaId', pastillaId);
            window.location.href = 'pastilla.html';
        });
    }
  });

// Obtengo desde la caché el valor almacenado en indiceCache
console.log("con localstorage " + localStorage.getItem("indiceCache"));
