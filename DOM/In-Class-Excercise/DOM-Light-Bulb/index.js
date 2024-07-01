let total = 0;
const totalEl = document.getElementById("total");
const increaseTotal = price => {
    total += price
    
};


// digging into the definitions
// looking into working with flash cards
// us chat GPT to break down functions
// learning the purpose of things & how to learn them

document.getElementById("on")
    addEventListener("click", () =>{
        lightbulb.classList.add("off")
})

document.getElementById("on")
    addEventListener("click", () =>{
        lightbulb.classList.remove("off")
})

const toggle = () => lightbulb.classList.toggle("off")

document.getElementById("toggle")
    addEventListener("click", () =>{
        lightbulb.classList.toggle("off")
})

document
    .getElementById("end")
    addEventListener("click", () =>{
        lightbulb.remove()
        document.querySelectorAll()
        for (const button of buttons) {
            button.disabled = true
            const parent = button.parentNode
            const clone = button.cloneNode()
            parent.replaceChild(button, clone)
        }
})
