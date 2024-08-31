document.addEventListener("DOMContentLoaded", () => {
    fetch("json/pastilla.json")
        .then(response => response.json())
        .then(data => {
            const now = new Date();
            const currentTime = now.getHours() * 100 + now.getMinutes(); // Tiempo actual en formato HHMM
            let nextPastilla = null;

            // Encuentra la primera pastilla después de la hora actual
            let minTimeDifference = Infinity; // Inicializa con un valor muy alto
            for (const pastilla of data) {
                const [hours, minutes] = pastilla.hora.split(":").map(Number);
                const pastillaTime = hours * 100 + minutes;

                // Calcula la diferencia de tiempo
                const timeDifference = (pastillaTime - currentTime + 2400) % 2400; // Añade 2400 para manejar el caso de cruce de día
                
                if (timeDifference < minTimeDifference && timeDifference >= 0) {
                    minTimeDifference = timeDifference;
                    nextPastilla = pastilla;
                }
            }

            if (nextPastilla) {
                // Actualiza el nombre y la descripción de la pastilla
                document.getElementById("pastilla-nombre").textContent = nextPastilla.nombre;
                document.getElementById("pastilla-hora").textContent = `Siguiente pastilla a las ${nextPastilla.hora}`;
                
                // Actualiza la imagen
                document.querySelector(".pastilla-imagen img").src = nextPastilla.imagen;

                // Actualiza el enlace para redirigir a la página de detalles
                const pastillaLink = document.querySelector(".pastilla2");
                pastillaLink.setAttribute("href", "pastilla.html");
                pastillaLink.setAttribute("data-id", nextPastilla.truck_id);
            }
        })
        .catch(error => console.error("Error al cargar el archivo JSON:", error));
});
