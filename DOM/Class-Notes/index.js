
const p = document.createElement("p");
p.innerText = "HellO Everyone";
p.style.backgroundColor = "green";
document.body.append(p);

// append is the method used to "add" var in ()


let count = 1;
const makeDiv = () => {
    const div = document.createElement("div")
    div.innerText = count++ 
    p.append(div);
}

const button = document.createElement("button");
button.innerText = "click me";
document.body.append(button)

button.addEventListener("click", () => {
    document.body.removeChild(p)
})




