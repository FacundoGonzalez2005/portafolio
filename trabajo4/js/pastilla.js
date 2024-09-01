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

// Selecciona el contenedor donde se mostrará la información
let duracion = document.querySelector(".pastilla-tiempo");

// Obtén el valor del índice cacheado desde localStorage
let indiceCache = localStorage.getItem("indiceCache");
console.log("Índice Cacheado:", indiceCache);

// Función para sumar horas a una hora dada en formato "HH:MM"
function sumarHoras(hora, horasASumar) {
  // Divide la hora en horas y minutos
  let [horas, minutos] = hora.split(":").map(Number);

  // Crea una instancia de Date con la hora actual
  let fecha = new Date();
  fecha.setHours(horas);
  fecha.setMinutes(minutos);
  fecha.setSeconds(0);
  
  // Suma las horas
  fecha.setHours(fecha.getHours() + horasASumar);

  // Obtén las nuevas horas y minutos
  let nuevasHoras = fecha.getHours().toString().padStart(2, '0');
  let nuevosMinutos = fecha.getMinutes().toString().padStart(2, '0');

  // Devuelve la nueva hora en formato "HH:MM"
  return `${nuevasHoras}:${nuevosMinutos}`;
}

// Realiza la solicitud al archivo JSON
fetch("json/pastilla.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(plato => {
        if (plato.truck_id === indiceCache) {
            // Calcula la nueva hora sumando 5 horas
            let horaModificada = sumarHoras(plato.hora, 5);

            // Condicional para mostrar una o dos tarjetas basadas en la cantidad
            let tarjetasHTML = '';
            if (plato.cantidad.includes("2")) {
                tarjetasHTML = `
                <section class="pastilla-tarjeta">
                    <div class="pastilla-info">
                        <h4>Hoy a las ${plato.hora}</h4>
                        <h5>1 cápsula de ${plato.nombre}</h5>
                    </div>
                    <div class="pastilla-fila-botones">
                        <div class="pastilla-boton1">
                            Recuérdame más tarde
                        </div>
                        <div class="pastilla-boton2">
                            Finalizar
                        </div>
                    </div>
                </section>

                <section class="pastilla-tarjeta">
                    <div class="pastilla-info">
                        <h4>Hoy a las ${horaModificada}</h4>
                        <h5>1 cápsula de ${plato.nombre}</h5>
                    </div>
                    <div class="pastilla-fila-botones">
                        <div class="pastilla-boton1">
                            Recuérdame más tarde
                        </div>
                        <div class="pastilla-boton2">
                            Finalizar
                        </div>
                    </div>
                </section>`;
            } else {
                tarjetasHTML = `
                <section class="pastilla-tarjeta">
                    <div class="pastilla-info">
                        <h4>Hoy a las ${plato.hora}</h4>
                        <h5>1 cápsula de ${plato.nombre}</h5>
                    </div>
                    <div class="pastilla-fila-botones">
                        <div class="pastilla-boton1">
                            Recuérdame más tarde
                        </div>
                        <div class="pastilla-boton2">
                            Finalizar
                        </div>
                    </div>
                </section>`;
            }

            // Inyecta la información en el HTML
            duracion.innerHTML += `
            <section class="pastilla-fila">
                <section class="pastilla-duracion">
                    <span>Duración</span>
                    <span><i class="fa-regular fa-calendar"></i>${plato.duracion}</span>
                </section>
                <section class="pastilla-frecuencia">
                    <span>Frecuencia</span>
                    <span><i class="fa-regular fa-clock"></i>${plato.cantidad}</span>
                </section>
            </section>

            <section class="pastilla-recordatorio">
                <h3>Verifique el siguiente</h3>
                ${tarjetasHTML}
            </section>`;
        }
    });
  })
  .catch((error) => {
    console.error('Error al cargar el archivo JSON:', error);
  });

// Verifica el valor almacenado en localStorage
console.log("Valor almacenado en localStorage:", localStorage.getItem("indiceCache"));

document.addEventListener("DOMContentLoaded", () => {
    // Abrir ventana emergente
    const editButton = document.querySelector(".fa-pen");
    const modal = document.getElementById("edit-modal");
    const closeModal = document.querySelector(".close");
    const cancelarButton = document.getElementById("cancelar");
    const guardarButton = document.getElementById("guardar");
    const nombreInput = document.getElementById("nombre");
    const descripcionInput = document.getElementById("descripcion");
    
    // Abrir modal al hacer clic en el ícono de lápiz
    editButton.addEventListener("click", () => {
        modal.style.display = "block";
        // Cargar los datos actuales en los campos de edición
        fetch("json/pastilla.json")
          .then(response => response.json())
          .then(data => {
            const pastilla = data.find(plato => plato.truck_id === localStorage.getItem("indiceCache"));
            if (pastilla) {
                nombreInput.value = pastilla.nombre;
                descripcionInput.value = pastilla.descripcion;
            }
          });
    });

    // Cerrar modal al hacer clic en la X
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal al hacer clic en Cancelar
    cancelarButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Guardar cambios y cerrar modal
    guardarButton.addEventListener("click", () => {
        const nombre = nombreInput.value;
        const descripcion = descripcionInput.value;
        const indiceCache = localStorage.getItem("indiceCache");

        fetch("json/pastilla.json")
          .then(response => response.json())
          .then(data => {
            const pastilla = data.find(plato => plato.truck_id === indiceCache);
            if (pastilla) {
                pastilla.nombre = nombre;
                pastilla.descripcion = descripcion;
                // Guardar el JSON modificado en el archivo
                fetch("json/pastilla.json", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(() => {
                    // Actualizar la vista en la página
                    location.reload();
                });
            }
          });
    });

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

