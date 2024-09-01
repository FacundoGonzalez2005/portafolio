document.addEventListener('DOMContentLoaded', () => {
    const graficoBarras = document.getElementById('graficoBarras');

    // Obtener datos del archivo JSON
    fetch('json/pastilla.json')
        .then(response => response.json())
        .then(pastillas => {
            // Convertir duraciones a días y crear las barras del gráfico
            pastillas.forEach(pastilla => {
                const duracion = pastilla.duracion.toLowerCase();
                let dias = 0;

                if (duracion.includes('día')) {
                    dias = parseInt(duracion.split(' ')[0], 10);
                } else if (duracion.includes('semana')) {
                    dias = parseInt(duracion.split(' ')[0], 10) * 7;
                } else if (duracion.includes('mes')) {
                    dias = parseInt(duracion.split(' ')[0], 10) * 30;
                } else if (duracion.includes('año')) {
                    dias = parseInt(duracion.split(' ')[0], 10) * 365;
                }

                const barra = document.createElement('div');
                barra.className = 'barra';

                const nombre = document.createElement('div');
                nombre.className = 'barra-nombre';
                nombre.textContent = pastilla.nombre;
                
                const contenido = document.createElement('div');
                contenido.className = 'barra-contenido';

                const duracionBarra = document.createElement('div');
                duracionBarra.className = 'barra-duracion';
                duracionBarra.style.width = `${dias * 10}px`; // Ajusta el factor de escala si es necesario
                duracionBarra.textContent = `${dias} días`;

                contenido.appendChild(duracionBarra);
                barra.appendChild(nombre);
                barra.appendChild(contenido);
                graficoBarras.appendChild(barra);
            });
        })
        .catch(error => console.error('Error cargando el archivo JSON:', error));
});
