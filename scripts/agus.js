// Obtener elementos del DOM
const carritoIcon = document.getElementById("carrito-icon");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar-modal");
const productos = document.querySelectorAll(".card");
const agregarCarritoButtons = document.querySelectorAll(".card-button");
const categorias = document.getElementById("categorias")

const botonTermos=document.getElementById("categoria-termos")
const botonVasos= document.getElementById("categoria-vasos")
const botonMates = document.getElementById("categoria-mates")
const botonTodosLosProd = document.getElementById("categoria-todos")

const carritoList = document.getElementById("carrito-list");
const formulario = document.getElementById("contacto-form");
const mensajeEnvio = document.getElementById("mensaje-envio");

const nombre = document.getElementById("nombre").value.trim();
const correo = document.getElementById("correo").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();


//Array de productos
const products= [
    {title:"Termo Classic rosa",
    price:"precio: $200",
    cantidad:1,
    id:1,
    categoria:"termos",
    img:"./img/imgstanley/termoRosa.jpeg",
    descripcion:"Termo classic Rosa de acero inoxidable, mantiene la bebida caliente por 24hs y fria 36hs"
    },
    {title:"Termo Verde Oliva",
    price:"precio: $200",
    cantidad:1,
    categoria:"termos",
    id:2,
    img:"./img/imgstanley/termoVerde.jpeg",
    descripcion:"Termo Classic Verde de acero inoxidable, mantiene la bebida caliente por 24hs y fria 36hs"
    },
    {title:"Mate Azul",
    price:"precio: $200",
    cantidad:1,
    id:3,
    categoria:"mates",
    img:"./img/imgstanley/mateAzul.jpeg",
    descripcion:"Mate Azul de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    {title:"Mate Rojo",
    price:"precio: $200",
    cantidad:1,
    id:4,
    categoria:"mates",
    img:"./img/imgstanley/mateRojo.jpeg",
    descripcion:"Mate Rojo de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    {title:"Mate Verde Oliva",
    price:"precio: $200",
    cantidad:1,
    id:5,
    categoria:"mates",
    img:"./img/imgstanley/mateVerde.jpeg",
    descripcion:"Mate Verde Oliva de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    {title:"Vaso Termico Fucsia",
    price:"precio: $200",
    cantidad:1,
    id:6,
    categoria:"vasos",
    img:"./img/imgstanley/vasoTermicoFucsia.jpeg",
    descripcion:"Vaso Termico The Quencher Fucsia de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    {title:"Vaso Termico Beige",
    price:"precio: $200",
    cantidad:1,
    id:7,
    categoria:"vasos",
    img:"./img/imgstanley/vasoTermicoBeige.jpeg",
    descripcion:"Vaso Termico The Quencher Beige de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    {title:"Vaso Termico Amarillo",
    price:"precio: $200",
    cantidad:1,
    id:8,
    categoria:"vasos",
    img:"./img/imgstanley/vasoTermicoAmarillo.jpeg",
    descripcion:"Vaso Termico The Quencher Amarillo de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    
]
//separamos los productos en arrays por categorias
const arrayTermos=products.filter((producto) => producto.categoria === "termos");

const arrayVasos= products.filter((producto) => producto.categoria === "vasos");

const arrayMates = products.filter((producto) => producto.categoria ==="mates");

// Array para almacenar los productos en el carrito
const carrito = [];
//cards

function renderizarProductos(productosArray){
    const cardConteiner = document.querySelector("#card-container")
    cardConteiner.innerHTML = ""; // Limpia el contenido actual

    for (const producto of productosArray) {
        let card = document.createElement("div");
        card.classList.add("card");
    
        let cardImg = document.createElement("img");
        cardImg.src = producto.img;
        cardImg.classList.add("card-img");
    
        let cardTitle = document.createElement("h3");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = producto.title;
    
        let cardBody = document.createElement("p");
        cardBody.classList.add("card-body");
        cardBody.innerText = producto.descripcion;

        let cardPrice = document.createElement("h4");
        cardPrice.classList.add("card-price");
        cardPrice.innerText = producto.price
    
        let cardButton = document.createElement("button");
        cardButton.classList.add("card-button");
        cardButton.innerText = "Agregar al carrito";

        // Función para agregar un producto al carrito
        function agregarAlCarrito(nombre, precio, img, cantidad,id) {
            const productoEnCarrito = carrito.find((item) => item.id === id);

            if (productoEnCarrito) {
                productoEnCarrito.cantidad++; 
            } else {
                carrito.push({ nombre, precio, img, cantidad,id }); 
            }
        
            actualizarCarrito();
                
        }

        cardButton.addEventListener("click", function(){
            
            agregarAlCarrito(producto.title, producto.price, producto.img, producto.cantidad,producto.id);
        }) 

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardBody);
        card.appendChild(cardPrice);
        card.appendChild(cardButton);
        cardConteiner.appendChild(card);
    }
}
//mostramos todo inicialmente
renderizarProductos(products);

//categorias
botonTermos.addEventListener("click", () => {
    renderizarProductos(arrayTermos);
});

botonVasos.addEventListener("click", () => {
    renderizarProductos(arrayVasos);
});

botonMates.addEventListener("click", () => {
    renderizarProductos(arrayMates);
});

botonTodosLosProd.addEventListener("click", () => {
    renderizarProductos(products);
})

// Función para abrir el modal
function abrirModal() {
    modal.style.display = "block";
    actualizarCarrito();
}

// Función para cerrar el modal
function cerrarModalFunc() {
    modal.style.display = "none";
}

// Función para eliminar un producto del carrito
function quitarProducto(producto) {
    const index = carrito.indexOf(producto);
    if (index !== -1) {
        carrito.splice(index, 1); 
        actualizarCarrito(); 
    }
}

// Función para guardar el carrito en el localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


// Función para actualizar la lista de productos en el carrito
function actualizarCarrito() {
    carritoList.innerHTML = "";
    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - ${producto.precio}`;
        li.classList.add("texto-carrito")
        carritoList.appendChild(li);

        const fotito = document.createElement("img");
        fotito.classList.add("modal-fotito");
        fotito.src = producto.img;
        carritoList.appendChild(fotito);

        const botonQuitar = document.createElement("button")
        botonQuitar.textContent = "quitar producto"
        botonQuitar.classList.add("botonQuitar")
        carritoList.appendChild(botonQuitar)
        botonQuitar.addEventListener("click", function(){
            quitarProducto(producto)
        })

        const cardCantidad = document.createElement("p")
        cardCantidad.classList.add("card-price")
        cardCantidad.innerText = `cantidad: ${producto.cantidad}`
        carritoList.appendChild(cardCantidad);

        const botonAumentar = document.createElement("button")
        botonAumentar.textContent = "➕"
        botonAumentar.classList.add("boton-Aumentar")
        carritoList.appendChild(botonAumentar)
        botonAumentar.addEventListener("click",function(){
            producto.cantidad++
            cardCantidad.innerText = `cantidad: ${producto.cantidad}`
        })


        const botonDecrementar = document.createElement("button")
        botonDecrementar.textContent = "➖"
        botonDecrementar.classList.add("boton-Decrementar")
        carritoList.appendChild(botonDecrementar)
        botonDecrementar.addEventListener("click",function(){
            if (producto.cantidad != 1) {
                producto.cantidad--
                cardCantidad.innerText = `cantidad: ${producto.cantidad}`
            }else{
                quitarProducto(producto)
            }
              
        })
    });
    guardarCarritoEnLocalStorage()
}


// Evento para abrir el modal al hacer clic en el icono del carrito
carritoIcon.addEventListener("click", abrirModal);

// Evento para cerrar el modal al hacer clic en el botón cerrar
cerrarModal.addEventListener("click", cerrarModalFunc);



//validacion de formularios


formulario.addEventListener("submit", function (e) {
    e.preventDefault(); 

    // Validar si todos los campos están llenos
    if (nombre !== "" && correo !== "" && mensaje !== "") {
            
        mensajeEnvio.textContent = "Su mensaje se ha enviado correctamente ✅";
        mensajeEnvio.style.color = "white";
        mensajeEnvio.style.backgroundColor = "green"
        
    } else {

        mensajeEnvio.textContent = "Por favor complete todos los campos ❌";
        mensajeEnvio.style.color = "white";
        mensajeEnvio.style.backgroundColor = "red"
    }
});

//menu hamburguesa

const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const navbarModal = document.getElementById("navbarModal");

openModalButton.addEventListener("click", function () {
  navbarModal.style.display = "block";
});

closeModalButton.addEventListener("click", function () {
  navbarModal.style.display = "none";
});

// Mostrar/ ocultar el boton del modal segun eltamaño de la pantalla
window.addEventListener("resize", function () {
  if (window.innerWidth <= 767) {
    openModalButton.style.display = "block";
    closeModalButton.style.display = "block";
  } else {
    openModalButton.style.display = "none";
    navbarModal.style.display = "none"; 
  }
});

// Inicialmente ocultar el botón en pantallas grndes
if (window.innerWidth > 767) {
  openModalButton.style.display = "none";
}