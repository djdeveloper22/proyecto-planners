//funcion carrito

const aProductos = [
  {
    id: "1",
    nombre: "2022 Creative Digital Planner",
    precio: "$19.00 Original Price:$29.00",
    descripcion:
      "Aqui va la descripcion del producto Lorem. Labore quasi aperiam aut minima quo. Soluta ea recusandae ex veniam laborum adipisci ipsa quibusdam, dolore culpa, temporibus impedit nemo alias non!",
    logo: "./src/assets/img/ap_studies.PNG",
    seo: "Kira Distri",
    lider: "Directora Planners",
  },
  {
    id: "2",
    nombre: "2022 Mom Life Digital Planner",
    precio: "$19.00 Original Price:$29.00",
    descripcion:
      "Aqui va la descripcion del producto Lorem. Labore quasi aperiam aut minima quo. Soluta ea recusandae ex veniam laborum adipisci ipsa quibusdam, dolore culpa, temporibus impedit nemo alias non!",
    logo: "./src/assets/img/ap_studies.PNG",
    seo: "Kira Distri",
    lider: "Directora Planners",
  },
  {
    id: "3",
    nombre: "2022 Mompreneur Planner",
    precio: "$19.00 Original Price:$29.00",
    descripcion:
      "Aqui va la descripcion del producto Lorem. Labore quasi aperiam aut minima quo. Soluta ea recusandae ex veniam laborum adipisci ipsa quibusdam, dolore culpa, temporibus impedit nemo alias non!",
    logo: "./src/assets/img/ap_studies.PNG",
    seo: "Kira Distri",
    lider: "Directora Planners",
  },
  {
    id: "4",
    nombre: "Bundle - 2022 Mom Life Digital Planner",
    precio: "$46.00 Original Price:$66.00",
    descripcion:
      "Aqui va la descripcion del producto Lorem. Labore quasi aperiam aut minima quo. Soluta ea recusandae ex veniam laborum adipisci ipsa quibusdam, dolore culpa, temporibus impedit nemo alias non!",
    logo: "./src/assets/img/ap_studies.PNG",
    seo: "Kira Distri",
    lider: "Directora Planners",
  },
  {
    id: "5",
    nombre: "Bundle - 2022 Creative Digital Planner",
    precio: "$47.00 Original Price:$63.00",
    descripcion:
      "Aqui va la descripcion del producto Lorem. Labore quasi aperiam aut minima quo. Soluta ea recusandae ex veniam laborum adipisci ipsa quibusdam, dolore culpa, temporibus impedit nemo alias non!",
    logo: "./src/assets/img/ap_studies.PNG",
    seo: "Kira Distri",
    lider: "Directora Planners",
  },
  {
    id: "6",
    nombre: "Sticker Book No.6",
    precio: "$19.00",
    descripcion:
      "Aqui va la descripcion del producto Lorem. Labore quasi aperiam aut minima quo. Soluta ea recusandae ex veniam laborum adipisci ipsa quibusdam, dolore culpa, temporibus impedit nemo alias non!",
    logo: "./src/assets/img/ap_studies.PNG",
    seo: "Kira Distri",
    lider: "Directora Planners",
  },
];

const carritoProductos = [];
let contadorCart = document.querySelector("#contadorCart");
let container_card = document.querySelector(".container-card");
let contenedor_card = document.querySelector(".container__card");
const carrito = document.querySelector("#carrito");
const contenedorProductos = document.querySelector("#contenedor__productos");
const cerrar = document.querySelector("#cerrar");
const btnCarrito = document.querySelector("#btnCarrito");
//const container__card = document.querySelector('.container__card');
let cont = 0;

carrito.addEventListener("click", () => {
  contenedorProductos.style.right = "0";
});

cerrar.addEventListener("click", () => {
  contenedorProductos.style.right = "-375px";
});

btnCarrito.addEventListener("click", (e) => {
  e.preventDefault();
  cont++;
  contadorCart.textContent = +`${cont}`;
  alert("producto agregado");
});




