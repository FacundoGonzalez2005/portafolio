document.addEventListener('DOMContentLoaded', function() {
    fetch('./json/pastilla.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('graficoBarras');
            
            // Convertir duración en días
            function duracionEnDias(duracion) {
                const match = duracion.match(/(\d+)\s*(día|semana|mes)/);
                if (match) {
                    const cantidad = parseInt(match[1]);
                    const unidad = match[2];
                    switch (unidad) {
                        case 'día':
                            return cantidad;
                        case 'semana':
                            return cantidad * 7;
                        case 'mes':
                            return cantidad * 30;
                        default:
                            return 0;
                    }
                }
                return 0;
            }

            data.forEach(pastilla => {
                const duracion = duracionEnDias(pastilla.duracion);

                // Crear el elemento de la barra
                const barra = document.createElement('div');
                barra.classList.add('barra');

                const nombre = document.createElement('div');
                nombre.classList.add('barra-nombre');
                nombre.textContent = pastilla.nombre;

                const contenido = document.createElement('div');
                contenido.classList.add('barra-contenido');

                const duracionBarra = document.createElement('div');
                duracionBarra.classList.add('barra-duracion');
                duracionBarra.style.width = `${duracion}px`;
                duracionBarra.textContent = `${pastilla.duracion}`;

                const info = document.createElement('div');
                info.classList.add('barra-info');
                info.textContent = `${duracion} días`;

                contenido.appendChild(duracionBarra);
                contenido.appendChild(info);
                barra.appendChild(nombre);
                barra.appendChild(contenido);

                container.appendChild(barra);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
