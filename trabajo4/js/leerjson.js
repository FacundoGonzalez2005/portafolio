let contenedorPastillas = document.querySelector(".contenedor");

fetch("json/pastilla.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 5; i++) {
      let pastilla = data[i];
      let horaOriginal = pastilla.hora;

      // Añadir 5 minutos a la hora
      let [hora, minutos] = horaOriginal.split(':').map(Number);
      minutos += 5;

      if (minutos >= 60) {
        minutos -= 60;
        hora += 1;
      }

      let nuevaHora = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

      let cartaPastilla = document.createElement("div");
      cartaPastilla.setAttribute("id", pastilla.truck_id);
      cartaPastilla.classList.add("pastilla-item");
      cartaPastilla.id = pastilla.truck_id;

      cartaPastilla.innerHTML = /*html*/ `
            <div class="pastilla-contenedor">
                <div class="pastilla">
                    <a class="pastilla-imagen" href="pastilla.html">
                        <img src=${pastilla.imagen} alt="">
                    </a>
                    <a class="pastilla-texto" href="pastilla.html">
                        <p>${pastilla.nombre}</p>
                        <p>Hoy a las ${pastilla.hora}</p>
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

      // Verificar si el botón debe estar seleccionado al cargar la página
      let estadoGuardado = localStorage.getItem(`check-${i}`);
      let checkButton = cartaPastilla.querySelector(`#check-${i}`);
      if (estadoGuardado === 'seleccionado') {
        checkButton.classList.remove("vacio"); // Quitar la clase 'vacio' si estaba seleccionada
      }

      // Evento para marcar el checkbox
      checkButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Evitar que se active el evento del div
        checkButton.classList.toggle("vacio");

        // Guardar el estado del botón en localStorage
        if (checkButton.classList.contains("vacio")) {
          localStorage.setItem(`check-${i}`, "no-seleccionado");
        } else {
          localStorage.setItem(`check-${i}`, "seleccionado");
        }
        console.log("Checkbox toggled");
      });

      // Evento para la recordatorio
      let recordatorioButton = cartaPastilla.querySelector(`#recordatorio-${i}`);
      recordatorioButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Evitar redirección o cualquier otro evento
        checkButton.classList.toggle("vacio"); // Alternar la clase 'vacio' del checkbox correspondiente

        // Guardar el estado del botón en localStorage
        if (checkButton.classList.contains("vacio")) {
          localStorage.setItem(`check-${i}`, "no-seleccionado");
        } else {
          localStorage.setItem(`check-${i}`, "seleccionado");
        }
        console.log("Recordatorio clickeado, clase 'vacio' alternada");
      });

      contenedorPastillas.appendChild(cartaPastilla);
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
