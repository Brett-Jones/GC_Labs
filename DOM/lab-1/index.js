
document.querySelector("#grow-me").classList.add("big")

const shrinkMe = document.querySelector("#shrink-me")
shrinkMe.classList.remove("big")

const lis = document.querySelectorAll("li")
for(const li of lis) console.log(li.innerText)

const link = document.querySelector("a")
link.setAttribute("href", "https://www.example.com")
link.innerText = "somewhere"

document.getElementById("hide-me").style.display = "none"

document.getElementById("show-me").style.display = "block"

// e, ev = event
const setText = e => {
    const input = document.getElementById("name")
    const h1 = document.getElementById("name-tag")
    h1.innerText = "Welcome " + input.value
}

const button = document.getElementById("change-name-tag")
button.addEventListener("click", setText)





