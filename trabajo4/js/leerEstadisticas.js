document.addEventListener('DOMContentLoaded', function () {
    fetch('json/pastilla.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.estadisticas-container');
            data.forEach(pastilla => {
                const card = document.createElement('div');
                card.classList.add('estadistica-card');

                const img = document.createElement('img');
                img.src = pastilla.imagen;
                img.alt = pastilla.nombre;

                const content = document.createElement('div');
                content.classList.add('estadistica-content');

                const nombre = document.createElement('h3');
                nombre.textContent = pastilla.nombre;

                const descripcion = document.createElement('p');
                descripcion.textContent = `${pastilla.cantidad} durante ${pastilla.duracion}`;

                const hora = document.createElement('p');
                hora.classList.add('estadistica-hora');
                hora.textContent = pastilla.hora;

                content.appendChild(nombre);
                content.appendChild(descripcion);
                content.appendChild(hora);

                card.appendChild(img);
                card.appendChild(content);

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
