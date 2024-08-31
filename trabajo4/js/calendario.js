document.addEventListener("DOMContentLoaded", () => {
    const startId = 1; // ID inicial
    const endId = 2;   // ID final

    fetch("json/pastilla.json")
        .then(response => response.json())
        .then(data => {
            // Recorre las pastillas entre startId y endId
            for (let id = startId; id <= endId; id++) {
                const pastilla = data.find(p => p.truck_id == id);

                if (!pastilla) continue;

                // Selecciona los elementos de horario
                const horarioElements = document.querySelectorAll(".horario");

                if (id - startId >= horarioElements.length) continue;

                const horarioElement = horarioElements[id - startId];
                const imagenElement = horarioElement.querySelector(".imagen-pastilla img");
                const nombreElement = horarioElement.querySelector(".texto h3");
                const descripcionElement = horarioElement.querySelector(".texto h6");
                const horaElements = horarioElement.querySelectorAll(".hora");

                // Redondea la hora y calcula la segunda hora
                function redondearHora(hora) {
                    const [horas, minutos] = hora.split(":").map(Number);
                    return `${horas.toString().padStart(2, '0')}:00`;
                }

                const primeraHora = redondearHora(pastilla.hora);
                const hora2 = redondearHora(new Date(0, 0, 0, parseInt(pastilla.hora.split(":")[0]) + 1, 0).toTimeString().slice(0, 5));

                // Asigna los valores del JSON a los elementos
                imagenElement.src = pastilla.imagen;
                nombreElement.textContent = pastilla.nombre;
                descripcionElement.textContent = `Dosis ${pastilla.cantidad} Pil`;

                if (horaElements.length > 0) {
                    horaElements[0].textContent = primeraHora;
                }
                if (horaElements.length > 1) {
                    horaElements[1].textContent = hora2;
                }

                // Añadir redireccionamiento a pastilla.html
                horarioElement.querySelector(".pastilla").addEventListener("click", () => {
                    localStorage.setItem("indiceCache", pastilla.truck_id);
                    window.location.href = "pastilla.html";
                });
            }
        })
        .catch(error => console.error("Error al cargar el archivo JSON:", error));
});
