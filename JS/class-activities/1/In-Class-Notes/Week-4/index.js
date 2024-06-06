// const opponent = {
//     name: "Jaffar",
//     health: 500
// }

// const characters = [
//     {
//         name: "Aladdin",
//         health: 100
//     },
//     {
//         name: "Elsa",
//         health: 150
//     },
//     {
//         name: "Snow White",
//         health: 125
//     }
// ]

// while (true) {
//     alert(opponent.name + ", " + opponent.health)
//     for (const character of characters) {
//         alert(character.name + ", " + character.health)
//     }
//     let userResponse = null
//     while (true) {
//         userResponse = prompt (
//             "Pick an index of a character"
//         )
//         if (userResponse === null) break
//         if (userResponse === "1") break
//         if (userResponse === "2") break
//         if (userResponse === "3") break
//     }
//     if (userResponse === null) break
//     const charIndex = +userResponse
//     const chosenChar = characters[charIndex]
//     if (chosenChar.health -= 15) {
//         alert("that character can't fight")
//         continue
//     }
//  opponent.health -= 20
//  chosenChar
// }

// CODE ABOVE IS FROM MONDAY

// CODE BELOW FOR WEDNESDAY

// Element = are the things inside of an array(strings, nums, or other arrays)

// const addNums = (nums) => {
//     let sum = 0;
//     for (i = 0; i < nums.length; i++){
//         sum += [i];
//     }
//     return sum;
// }

// console.log(addNums([1, 2, 3]));


// const person = {
//     firstName: "Chuck",
//     lastName: "Norris",
//     age: Number.Max_Value;
// }

// const getFullName = person => 
//     `${person.firstName} ${person.lastName}`
//     console.log(getFullName);

// const makeStudent = (name, grade) => ({name, grade});
// const students = [
//     makeStudent("David", 50),
//     makeStudent("Chuck", 100),
//     makeStudent("Emily", 91),
//     makeStudent("Rachel", 89);
// ]

// for (const student of students) {
//     if (student.grace > 90) console.log(student.name);
// }


// let count = 0;
// let num = 0;
// while (count < 10) {
//     console.log(num);
//     num += 2;
// }

// // const nums = [2, 4, 6];
// const squareNums = nums => {
//     const squares = [];
//     for (const num of nums) squares.push(num ** 2);
//     return squares;
// }
// console.log(squareNums(nums));


// const getArea = rectangle =>
//     rectangle.width * rectangle.length; 

// console.log(getArea({width: 50, length: 100}));


// const checkForValue = (nums, value) => {
//     for (const num of nums) {
//         if (num === value) return true;
//     }
//     return false;
// }

// console.log(checkForValue);

// const nums = [0, -100, 5, 100, 2];
// const findLargestNum = nums => {
//     let largest = nums[0];
//     for (const num of nums) {
//         if (num > largest) {
//             debugger
//             largest = num
//         }
//     }
//     return largest
// }
// console.log(findLargestNum(nums));

// const printPrice = cents => 

// const makeProducts = (name, price) => ({name, price})
// const products = [
//     makeProducts("chips", 199),
//     makeProducts("staples", 427),
//     makeProducts("bleach", 849)
// ]
// `

// let x = 4;
// let y = x + 3;


// console.log("x=", x, "y=", y);
// console.log("Before IF");
// console.log("x * y =", x * y);
// if (x * y > 10) {
//   console.log("IF A");
// } else {
//   console.log("ELSE B");
// }

// Sudo code, write out code in comments 
// to get a better understanding of what the 
// code should be, to better understand how 
// to build the thing you want.


// CODE ABOVE IS FROM WEDNESDAY

// CODE BELOW FOR THURSDAY


// const people = [
//     "Chuck Norris",
//     "David",
//     "Jordan",
//     "Brett",
//     "Tyler",
//     "Shea",
//     "AJ",
//     "O",
//     "M&M"
// ]

// console.log(people.every(person => person[0] === "A"));
// console.log(people.some(person => person[0] === "A"));

// const lastIndex = people.length -1;
// console.log(people.length);
// console.log(people[lastIndex]);
// console.log(people.splice(0,2, "Beyonce", "Cher"));
// console.log(people);

// people.unshift("Lil Baby");
// console.log(people);
// people.shift();
// console.log(people);
// people.push("Bobby Hill");
// console.log(people);
// people.push();
// console.log(people);
// console.log(people.at(-1));

// console.log(people.includes("Jordan"));
// console.log(people.indexOf("Adam"));
// console.log(people.findIndex(person => person.length < 5));
// console.log(people.filter(person => person.length < 5));

// for (const person of people) console.log(person);
// people.forEach(person => console.log(person));

// non-destructive method
// const firstLetters = people.map(name => name[0]);
// console.log(firstLetters);
// destructive! Method
// people.splice(0, 5);
// console.log(people);

// const sumOfLetter = people.reduce(
//     (total, person) => (total += person. length),
//     0
// );
// console.log(sumOfLetter);

// console.log(people.slice(1, 2));
// console.log(people)

// Functions live in open space 
// Methods live on objects
// Arrays are num type
// forEach, filter, map, reduce, slice, & splice, (spread = ... )are good to use starting out

// const foods = [
//     "tacos",
//     "noodles",
//     "corndogs"
// ];

// const person = {
//     name:"David",
//     age: 33
// }

// console.log([...foods, "Pizza", "Ice Cream"]); // puts new items at the end
// console.log(["Pizza", "Ice Cream", ...foods]); // puts new items at the beginning
// console.log(foods);

// const nums = [1, 2, 3, 4, 5, 6];
// const query = [0, 3];
// console.log(nums.slice(...query));

// const nums = [];
// for (let i = 1; i <= 10; i++) nums. push(i);

// const above15Nums = nums
//     .map(num => num *2)
//     .filter(num => num > 15);

// above15Nums.splice(0, 1, 30, 22);
// above15Nums.push(40);
// above15Nums.pop()

// const grooveNums = above15Nums.map
















