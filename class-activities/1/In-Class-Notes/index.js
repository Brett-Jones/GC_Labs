const opponent = {
    name: "Jaffar",
    health: 500
}

const characters = [
    {
        name: "Aladdin",
        health: 100
    },
    {
        name: "Elsa",
        health: 150
    },
    {
        name: "Snow White",
        health: 125
    }

]

while (true) {
    alert(opponent.name + ", " + opponent.health)
    for (const character of characters) {
        alert(character.name + ", " + character.health)
    }
    let userResponse = null
    while (true) {
        userResponse = prompt (
            "Pick an index of a character"
        )
        if (userResponse === null) break
        if (userResponse === "1") break
        if (userResponse === "2") break
        if (userResponse === "3") break
    }
    if (userResponse === null) break
    const charIndex = +userResponse
    const chosenChar = characters[charIndex]
    if (chosenChar.health -= 15) {
        alert("that character can't fight")
        continue
    }
 opponent.health -= 20
 chosenChar
    



}









