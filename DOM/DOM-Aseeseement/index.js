const textEl = document.getElementById("textEl")
const sizeEl = document.getElementById("sizeEl")
const checkEl = document.getElementById("checkEl")
const container = document.getElementById("container")

// if you need to make a shape then make a function named
// "make a shape" or the name of the things you are making




const makeShape = () => {
  const shape = document.createElement("div")
  shape.innerText = text.value
  const size = +sizeEl.value + "px"
  shape.style.width = size
  shape.style.height = size
  shape.style.lineHeight = size 
  shape.className = (checkEl.checked 
    ? "shape cirle" 
    : "shape")
  shape.addEventListener ('click', () => {
  shape.classList.toggle("highlighted")
  });
  if (checkEl.checked) shape.className = "shape circle"
  else shape.className = "shape"
  textEl.value = ""
  sizeEl.value = ""
  checkEl.checked = false

  container.append(shape)
}

// use the process of elimination to 
// figure out what the answer is




