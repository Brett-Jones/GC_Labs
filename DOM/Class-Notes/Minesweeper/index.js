const minefield = document.getElementById("minefield")
let isGameOver = false

const boxes = document.querySelectorAll(".box")
const randIndex = Math.floor(
	Math.random() * boxes.length
)
boxes[randIndex].id = "it"

minefield.addEventListener("click", e => {
	if (isGameOver) return
	if (e.target.id === "it") {
		e.target.classList.add("red")
		isGameOver = true
		const greenBoxes =
			document.querySelectorAll(".green")
		greenBoxes.forEach(box => {
			box.classList.remove("green")
			box.classList.add("yellow")
		})
	} else {
		e.target.classList.add("green")
	}
})



















