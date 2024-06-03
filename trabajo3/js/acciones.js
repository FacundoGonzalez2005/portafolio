console.log("conectado")
// // APUNTE 1
// // capturo solo UN nodo con ID 
// let listaProductos = document.getElementById("productos")
// console.log(listaProductos)

// // capturo CLASES y las convierte a un array 
// let contenedor = document.querySelectorAll(".contenedor")
// setTimeout(()=> {
//     alert(contenedor[0].innerHTML)
// } ,1000);

// // captura nodos, selectores ID o selectores de tipo clase = un solo elemento
// let listaProductos = document.querySelector("#productos")
// console.log(listaProductos)

// // capturo CLASES y las convierte a un array 
// let conteiner = document.getElementsByClassName("contenedor")
// console.log(conteiner[0].innerHTML)

// // APUNTE 2
// //--------crear LISTA-------------

// let nuevaLista = document.createElement("ul")

// document.body.appendChild(nuevaLista)

// let listaElemento1 = document.createElement("li");
// listaElemento1.textContent = "Primer Item Lista";
// nuevaLista.appendChild(listaElemento1)

// let listaElemento2 = document.createElement("li");
// listaElemento2.textContent = "Segundo Item Lista";
// nuevaLista.appendChild(listaElemento2)

//-----------------------

let futer = document.querySelector("footer")

// console.log(futer.innerText)
// futer.innerText = "ALGO"
// futer.innerHTML = "<i>ALGO</i>"

let resta = document.getElementById("restar")
let cont = document.getElementById("Contador")
let suma = document.getElementById("sumar")
let counter = 1

cont.innerHTML = counter

function Suma(){
    if (counter < 5){
        suma.style.color = "white";
        resta.style.color = "white";
        suma.style.cursor = "black";
        suma.style.cursor = "pointer";
        counter = counter + 1;
        cont.innerHTML = counter;        
    }
    else{
            suma.style.color = "red";
            suma.style.cursor = "not-allowed";
    }
}

function Resta(){
    if( counter > 1 ){
        suma.style.color = "white";
        resta.style.color = "white";
        counter = counter - 1;
        cont.innerHTML = counter;
    }
    else{
            resta.style.color = "red";
            resta.style.cursor = "not-allowed";
    }
}

console.log(counter)