let resto = document.querySelector(".informacion");
console.log(localStorage.getItem("indiceplato"))


fetch("json/restaurantes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(plato => {
        if( plato.truck_id == localStorage.getItem("indiceCache")){
            resto.innerHTML += `
                <section class="resto_image pr ">
                  <a href="menu.html" class="volver iconos pa">close</a>
                  <img class="img_fit" src="img/plato_carta.jpg" alt="">
                </section>  
                <article class="contenido">
                    <div class="titulo">
                        ${plato.menu[0].plato}
                    </div>
                    <div class="precio">
                        $6.99
                    </div>
                    <div class="descripcion">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, explicabo repudiandae distinctio assumenda vitae molestiae sint voluptatibus ut unde illum, voluptatem, accusantium facilis architecto nulla quia asperiores nihil aspernatur commodi!
                    </div>
                    <input class="comentario" type="search" placeholder="Add a note(extra sauce,no anions,etc.)">
                </article>
                <article class="boton">
                    <div class="contador">
                        <button id="restar" onclick="Resta()">-</button>
                        <p id="Contador">8</p>
                        <button id="sumar" onclick="Suma()">+</button>
                    </div>
                    <div class="carrito">
                        ADD TO CART
                    </div>
                </article>
        `;


        for (let index = 0; index < plato.menu.length; index++) {
            console.log(plato.menu[index].plato)
        }
        }
    });
})


function captura(){
    localStorage.setItem("lavaina", "entro a la vaina")
    console.log(localStorage.getItem("lavaina"))
}
