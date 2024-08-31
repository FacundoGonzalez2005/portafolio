document.addEventListener("DOMContentLoaded", () => {
    fetch("json/pastilla.json")
        .then(response => response.json())
        .then(data => {
            // Recorre las primeras dos pastillas del JSON
            for (let i = 0; i < 2; i++) {
                const pastilla = data[i];
                
                if (!pastilla) continue;

                // Selecciona los elementos de horario
                const horarioElements = document.querySelectorAll(".horario");

                if (i >= horarioElements.length) continue;

                const horarioElement = horarioElements[i];
                const imagenElement = horarioElement.querySelector(".imagen-pastilla img");
                const nombreElement = horarioElement.querySelector(".texto h3");
                const descripcionElement = horarioElement.querySelector(".texto h6");

                // Asigna los valores del JSON a los elementos
                imagenElement.src = pastilla.imagen;
                nombreElement.textContent = pastilla.nombre;
                descripcionElement.textContent = `Dosis ${pastilla.cantidad} Pil`;

                // Añadir redireccionamiento a pastilla.html
                horarioElement.querySelector(".pastilla").addEventListener("click", () => {
                    localStorage.setItem("indiceCache", pastilla.truck_id);
                    window.location.href = "pastilla.html";
                });
            }
        })
        .catch(error => console.error("Error al cargar el archivo JSON:", error));
});
