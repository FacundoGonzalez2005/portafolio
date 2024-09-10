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

      let cartaRestaurante = document.createElement("div");
      cartaRestaurante.setAttribute("id", restaurante.truck_id);
      cartaRestaurante.classList.add("resto");
      cartaRestaurante.id = restaurante.truck_id;

      cartaRestaurante.innerHTML = /*html*/ `
            <div class="pastilla-contenedor" >
                <div class="pastilla">
                    <a class="pastilla-imagen" href="pastilla.html">
                        <img src=${restaurante.imagen} alt="">
                    </a>
                    <a class="pastilla-texto" href="pastilla.html">
                        <p>${restaurante.nombre}</p>
                        <p>Hoy a las ${restaurante.hora}</p>
                    </a>
                    <div class="pastilla-boton">
                        <button class="check vacio" id="check-${i}">
                            <i class="fa fa-check"></i>
                        </button>
                    </div>
                </div>
                <div class="recordatorio" id="recordatorio-${i}">
                    <span class="recordatorio-boton">
                        <i class="fa-solid fa-clock"></i>Bébelo a las ${nuevaHora}
                    </span>
                </div>
            </div>
        `;

      // Almacenar el ID de la pastilla seleccionada en localStorage
      cartaRestaurante.addEventListener("click", function () {
        let idRestauranteSeleccionado = restaurante.truck_id;
        localStorage.setItem("indiceCache", idRestauranteSeleccionado);
        console.log(idRestauranteSeleccionado);
      });

      resto.appendChild(cartaRestaurante);

      // Evento para marcar el checkbox
      let checkButton = document.querySelector(`#check-${i}`);
      checkButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Evitar que se active el evento del div
        checkButton.classList.toggle("vacio");
        console.log("Checkbox toggled");
      });

      // Evento para la recordatorio
      let recordatorioButton = document.querySelector(`#recordatorio-${i}`);
      recordatorioButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Evitar redirección o cualquier otro evento
        checkButton.classList.toggle("vacio"); // Alternar la clase 'vacio' del checkbox correspondiente
        console.log("Recordatorio clickeado, clase 'vacio' alternada");
      });
    }

    // Código para redirigir con pastilla2
    const pastilla2 = document.querySelector('.pastilla2');
    if (pastilla2) {
      pastilla2.addEventListener('click', function (event) {
        event.preventDefault();
        const pastillaId = pastilla2.getAttribute('data-id');
        localStorage.setItem('pastillaId', pastillaId);
        window.location.href = 'pastilla.html';
      });
    }
  });

// Obtener desde localStorage el valor almacenado en indiceCache
console.log("con localStorage " + localStorage.getItem("indiceCache"));
