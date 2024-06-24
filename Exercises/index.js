
for(let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 10; i >= 1; i--) {
    console.log(i);
}

for(let i = 0; i < 10; i+= 2) {
    console.log(i);
}

for(let i = 10; i > 1; i-= 2) {
    console.log(i);
}

for(let i = 0; i <= 20; i+= 5) {
    console.log(i);
}

for(let i = 20; i >= 0; i-= 5) {
    console.log(i);
}

const planets = [
    "Earth",
    "Venus",
    "Jupiter",
    "Uranus",
    "Mars",
    "Mercury",
    "Saturn",
    "Neptune"
];

console.log(planets);

console.log(planets.length);

planets.pop()
    console.log(planets)

planets.push("Neptune")
    console.log(planets)

planets.unshift("Sun")
    console.log(planets)

planets.reverse()
    console.log(planets)

planets.shift()
    console.log(planets)

planets.splice(2,3)
    console.log(planets)