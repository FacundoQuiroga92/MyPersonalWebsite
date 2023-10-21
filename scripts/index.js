//capturas del HTML
const buttonLenguajes = document.getElementById("buttonFilterLenguajes")
const buttonTools = document.getElementById("buttonFilterTools")
//array con lenguajes y tools
const lenguajesAndTools = [
    {
      categoria:"lenguaje",
      name:"html",
      img:"https://img.icons8.com/color/96/html-5--v1.png",
      level:"avanzado"  
    },
    {
      categoria:"lenguaje",
      name:"css",
      img:"https://img.icons8.com/color/96/css3.png",
      level:"intermedio"
    },
    {
      categoria:"lenguaje",
      name:"javascript",
      img:"https://img.icons8.com/fluency/96/javascript.png",
      level:"intermedio"
    },
    {
      categoria:"lenguaje",
      name:"react",
      img:"https://img.icons8.com/color/96/react-native.png",
      level:"intermedio"
    },
    {
      categoria:"tool",
      name:"git",
      img:"https://img.icons8.com/color/96/git.png",
      level:"avanzado"
    },
    {
      categoria:"tool",
      name:"npm",
      img:"https://img.icons8.com/color/48/npm.png",
      level:"basico"
    },
    {
      categoria:"tool",
      name:"wordpress",
      img:"https://img.icons8.com/3d-fluency/94/wordpress.png",
      level:"intermedio"
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

    
    card.appendChild(cardImg)
    /* card.appendChild(title) */
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

