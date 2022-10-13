//funcion carrito

const btnCarrito = document.querySelector("#btnCarrito");
let contadorCart = document.querySelector("#contadorCart");
let container_card = document.querySelector(".container-card");
let contenedor_card = document.querySelector(".container__card");
const aProductos = [];
let cont = 0;

btnCarrito.addEventListener("click", (e) => {
  e.preventDefault();
  cont++;
  contadorCart.textContent = +`${cont}`;
  alert('producto agregado');
});
