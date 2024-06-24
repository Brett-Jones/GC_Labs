class Room {
    constructor(
        name = "",
        length = 0, 
        width = 0,
        capcity = 15) {
            this.name = name;
            this.length = length;
            this.width = width;
            this.available = true;
            this.capcity = capcity;
    }
    getArea() {
        const area = (
            this.length * this.width);
        return area;
    }
    
    getPerimeter() {
        const perimeter = 2 * (
            this.length * this.width);
        return perimeter;
    }

}

const room1 = new Room(
    "Sun",
    30,
    20
);

const room2 = new Room(
    "Green",
    15,
    20,
    18
);
room2.available = false

console.log("Room 1");
console.log("Name:", room1.name);
console.log("Length:", room1.length);
console.log("Width:", room1.width);
console.log("Area:", room1.getArea());
console.log("Perimeter:", room1.getPerimeter());
console.log("Available:",room1.available);
console.log("Capcity:", room1.capcity);

console.log("Room 2");
console.log("Name:", room2.name);
console.log("Length:", room2.length);
console.log("Width:", room2.width);
console.log("Area:", room2.getArea());
console.log("Perimeter:", room2.getPerimeter());
console.log("Available:", room2.available);
console.log("Capcity:", room2.capcity);






// const submission1 = new submission(
//     "Jane", 
//     95, 
//     true);
// const submission2
// console.log(submission1.getName())













