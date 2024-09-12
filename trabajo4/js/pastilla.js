let pastillaEncabezado = document.querySelector(".pastilla-encabezado");
console.log(localStorage.getItem("indiceCache"));

fetch("json/pastilla.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(pastilla => {
        if (pastilla.truck_id == localStorage.getItem("indiceCache")) {
            pastillaEncabezado.innerHTML += `
            <div class="pastilla-imagen">
                <img src=${pastilla.imagen} alt="">
            </div>
            <div class="pastilla-texto">
                <h2>${pastilla.nombre}</h2>
                <span>${pastilla.descripcion}</span>
            </div>`;
        }
    });
});

// Selecciona el contenedor donde se mostrará la información
let duracion = document.querySelector(".pastilla-tiempo");

// Obtén el valor del índice cacheado desde localStorage
let indiceCache = localStorage.getItem("indiceCache");
console.log("Índice Cacheado:", indiceCache);

// Función para sumar horas a una hora dada en formato "HH:MM"
function sumarHoras(hora, horasASumar) {
  let [horas, minutos] = hora.split(":").map(Number);
  let fecha = new Date();
  fecha.setHours(horas);
  fecha.setMinutes(minutos);
  fecha.setSeconds(0);
  fecha.setHours(fecha.getHours() + horasASumar);
  let nuevasHoras = fecha.getHours().toString().padStart(2, '0');
  let nuevosMinutos = fecha.getMinutes().toString().padStart(2, '0');
  return `${nuevasHoras}:${nuevosMinutos}`;
}

fetch("json/pastilla.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(pastilla => {
        if (pastilla.truck_id === indiceCache) {
            let horaModificada = sumarHoras(pastilla.hora, 5);
            let tarjetasHTML = '';
            if (pastilla.cantidad.includes("2")) {
                tarjetasHTML = `
                <section class="pastilla-tarjeta">
                    <div class="pastilla-info">
                        <h4>Hoy a las ${pastilla.hora}</h4>
                        <h5>1 cápsula de ${pastilla.nombre}</h5>
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
                        <h5>1 cápsula de ${pastilla.nombre}</h5>
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
                        <h4>Hoy a las ${pastilla.hora}</h4>
                        <h5>1 cápsula de ${pastilla.nombre}</h5>
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

            duracion.innerHTML += `
            <section class="pastilla-fila">
                <section class="pastilla-duracion">
                    <span>Duración</span>
                    <span><i class="fa-regular fa-calendar"></i>${pastilla.duracion}</span>
                </section>
                <section class="pastilla-frecuencia">
                    <span>Frecuencia</span>
                    <span><i class="fa-regular fa-clock"></i>${pastilla.cantidad}</span>
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

document.addEventListener("DOMContentLoaded", () => {
    const editButton = document.querySelector(".fa-pen");
    const modal = document.getElementById("edit-modal");
    const closeModal = document.querySelector(".close");
    const cancelarButton = document.getElementById("cancelar");
    const guardarButton = document.getElementById("guardar");
    const nombreInput = document.getElementById("nombre");
    const descripcionInput = document.getElementById("descripcion");

    editButton.addEventListener("click", () => {
        modal.style.display = "block";
        fetch("json/pastilla.json")
            .then(response => response.json())
            .then(data => {
                const pastilla = data.find(p => p.truck_id === localStorage.getItem("indiceCache"));
                if (pastilla) {
                    nombreInput.value = pastilla.nombre;
                    descripcionInput.value = pastilla.descripcion;
                }
            });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    cancelarButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    guardarButton.addEventListener("click", () => {
        const nombre = nombreInput.value;
        const descripcion = descripcionInput.value;
        const indiceCache = localStorage.getItem("indiceCache");

        fetch("json/pastilla.json")
            .then(response => response.json())
            .then(data => {
                const pastilla = data.find(p => p.truck_id === indiceCache);
                if (pastilla) {
                    pastilla.nombre = nombre;
                    pastilla.descripcion = descripcion;
                }

                // Simular actualización en el frontend
                document.querySelector(".pastilla-encabezado h2").innerText = nombre;
                document.querySelector(".pastilla-encabezado span").innerText = descripcion;

                // Cerrar el modal
                modal.style.display = "none";

                // Actualizar el archivo JSON en el servidor (esto no es posible con fetch directamente)
                // Necesitarías un backend para manejar esto
                console.log("Datos actualizados en JSON:", data);
            });
    });
});
