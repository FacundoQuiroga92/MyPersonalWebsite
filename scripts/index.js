//capturas del HTML
const buttonLenguajes = document.getElementById("buttonFilterLenguajes")
const buttonTools = document.getElementById("buttonFilterTools")
//array con lenguajes y tools
const lenguajesAndTools = [
    {
      categoria:"lenguaje",
      name:"html",
      img:"https://i.pinimg.com/564x/e3/b8/10/e3b810bb6bf005c04b256c6cbcca3efb.jpg",
      level:"avanzado"  
    },
    {
      categoria:"lenguaje",
      name:"css",
      img:"https://i.pinimg.com/564x/d5/d7/a7/d5d7a7544152bf71f6ec9d8180c40c0d.jpg",
      level:"intermedio"
    },
    {
      categoria:"lenguaje",
      name:"javascript",
      img:"https://i.pinimg.com/564x/28/75/3d/28753ddf79d70042ba86564947e13bf5.jpg",
      level:"intermedio"
    },
    {
      categoria:"lenguaje",
      name:"react",
      img:"https://i.pinimg.com/564x/dd/59/fa/dd59fa7de174a7f73f993e7d73099f20.jpg",
      level:"intermedio"
    },
    {
      categoria:"tool",
      name:"git",
      img:"https://i.pinimg.com/564x/66/8f/03/668f031e4dde7816c77d8e36b080a94f.jpg",
      level:"avanzado"
    },
    {
      categoria:"tool",
      name:"npm",
      img:"https://img.icons8.com/color/48/npm.png",
      level:"basico"
    },
    
]

//separamos los array en categorias
const lenguajesCategory = lenguajesAndTools.filter(lenguaje => lenguaje.categoria === "lenguaje")
const toolsCategory = lenguajesAndTools.filter(lenguaje => lenguaje.categoria === "tool")

//funcion para renderizar los items en el DOM

const renderizarSkils = (array)=>{
  const cardsLenguajes = document.getElementById("cardsLenguajes")
  cardsLenguajes.innerHTML= "";

  for (const item of array) {
    let card = document.createElement("div")
    card.classList.add("cardSkill")
    
    let cardImg = document.createElement("img")
    cardImg.src= item.img
    cardImg.classList.add("imgSkill")

    let title = document.createElement("p")
    title.innerText = item.name

    card.appendChild(title)
    card.appendChild(cardImg)
    cardsLenguajes.appendChild(card)
  }
}
//mostramos inicialmente
renderizarSkils(lenguajesCategory)

//eventos de filtrado de categorias
buttonLenguajes.addEventListener("click", ()=>{
  renderizarSkils(lenguajesCategory)
})
buttonTools.addEventListener("click", ()=>{
  renderizarSkils(toolsCategory)
})

