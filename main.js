//funcion carrito

const btnCarrito = document.querySelector("#btnCarrito");
let contadorCart = document.querySelector("#contadorCart");
let container_card = document.querySelector(".container-card");
let contenedor_card = document.querySelector(".container__card");
const carrito = document.querySelector('#carrito');
const contenedorProductos = document.querySelector('#contenedor__productos');
const cerrar = document.querySelector('#cerrar');
const aProductos = [];
let cont = 0;


carrito.addEventListener('click', ()=>{
  contenedorProductos.style.right = '0';
  
});

cerrar.addEventListener('click', ()=>{
  contenedorProductos.style.right = '-375px';
});
btnCarrito.addEventListener("click", (e) => {
  e.preventDefault();
  cont++;
  contadorCart.textContent = +`${cont}`;
  alert('producto agregado');
});

