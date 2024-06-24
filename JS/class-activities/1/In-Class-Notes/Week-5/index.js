// FOR LOOP PRACTICES
// for(i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for(i = 10; i <= 100; i+= 10) {
//   console.log(i);
// }

// create an array that has the colors of the rainbow

// const colors = [
//   "Red", 
//   "Orange", 
//   "Yellow", 
//   "Green", 
//   "Blue", 
//   "Indigo", 
//   "Violet"
// ];

// for of with logic = if color has even # of letters 
// log even if odd log odd

// for(color of colors) {
//   console.log(color);
//   if(color.length % 2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// forEach - if the first letter of an element is a vowel
// override value and make word caps

// const vowels = [
//   "A", 
//   "E", 
//   "I", 
//   "O", 
//   "U", 
//   "Y"
// ];

// colors.forEach((color) => {
//   const firstLetter = color[0];
//   if(vowels.includes(firstLetter)) {
//     color = color.toUpperCase();
//   }  
//   console.log(color)
// });











// FOR LOOP EXP
// const printTens = () => {
// 	for(let i = 10; i <= 100; i += 10) {
// 		console.log (i)
// 	}
// }

// // WHILE LOOP EXP
//  const flipcoin = () =>
// 	Math.random() > 0.5 ? "heads" : "tails"

//  let num = 0
//  while(num <= 10) {
// 	console.log(++num) // the side the ++ is on can determine if the log goes
// 	// above the num <= 10 parameter
//  }

// const countUntilTens = step => {
// 	let num = 0
// 	do {
// 		num += step
// 		console.log(num)
// 	}	while(num % 10 !== 0)	 
// }
// countUntilTens(4)

//  	ARRAY/FOR/OF EXP

// const hasVowels = word => {
// 	const vowels = ['a', 'e', 'i', 'o', 'u']
// 	for(let i = 0; i < word.length; i++) {
// 		const letter = word[i]
// 		for(const vowel of vowels) {
// 			if (letter === vowel) return true
// 		}
// 	}
// 	return false
// }

// const hasVowels = word => {
// 	const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
// 	return word.split("").some(letter => vowels.has(letter))
// }
// console.log(hasVowels("bug"))

// FUNCTION EXP

// const testTemperature = (
// 	desiredTemp, 
// 	actualTemp) => {
// 		if(desiredTemp === actualTemp)
// 			console.log("Stand by")
// 		else if( desiredTemp < actualTemp)
// 			console.log("Run Heat")
// 		else console.log("Run A/C")
// 	}

// testTemperature(60,70)

// const testTemperature = (dT, aT) =>
// 	console.log(
// 		dT > aT 
// 			? "Run A/C" 
// 			: dT < aT 
// 			? "Run Heat" 
// 			: "Stand by"
// 	);

// testTemperature(70,70)


// FUNCTION ARRAYS
//  destructoring:

// const makeCar = (make, model, year, hybrid) => ({
// 	make, 
// 	model, 
// 	year, 
// 	hybrid
//  })

//  const cars = [
// 	makeCar("Toyota", "Prius", 2020, true),
// 	makeCar("Toyota", "Prius", 2021, true),
// 	makeCar("Ford", "F-150", 2015, false),
// 	makeCar("Ferrari", "Enzo", 2004, false),
//  ]

// const findCars = (cars, model) => {
// 	const matchingCars = []
// 	for(const car of cars) {
// 		if(model === car.model) matchingCars.push(car) // could have also used filter method
// 	}
// 	return matchingCars
// }
// const addCar = (cars, make, model, hybrid) => [
// 	makeCar(make, model, 2021, hybrid),
// 	...cars
// ]

//  const addCar = (cars, make, model, hybrid) => {
// 	cars.unshift(makeCar(make, model, hybrid))
//  }

// addCar(cars, "Suburu", "Forester", true)
// console.log(cars)









// class Animal {
// 	constructor() {}

// 	static count() {
// 		return 3
// 	}

// 	drink() {
// 		console.log("yum, no longer thirsty!")
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, breed, age = 0) {
// 		super()
// 		this.name = name
// 		this.breed = breed
// 		this.age = age
// 	}

// 	bark() {
// 		console.log("woof woof")
// 	}

// 	toString() {
// 		return "I am a dog"
// 	}

// 	info() {
// 		console.log(
// 			this.name +
// 				" is a " +
// 				this.breed +
// 				" and is " +
// 				this.age +
// 				" years old."
// 		)
// 	}
// }

// class LargeBreed extends Dog {
// 	constructor(name, breed) {
// 		super(name, breed)
// 	}

// 	fetch() {
// 		console.log("WOW THAT THING IS RUNNING FAST")
// 	}
// }

// const poodle = new LargeBreed("Floofy", "poodle")
// const beagle = new Dog("Snoopy", "beagle", 5)

// // instance from instantiate

// beagle.info()
// poodle.drink()
// poodle.info()
// poodle.fetch()
// console.log(Animal.count())
// console.log(beagle.toString())
// console.log(beagle.name)
/*

A method is a function that belongs to an object.
const makeMaxer = () => {
	let max = Number.MIN_SAFE_INTEGER
	const innerFunc = val => {
		if (val === undefined) {
			if (max > 0) return "Over Zero"
			else return "Zero or lower"
		}
		if (val > max) max = val
	}
	return innerFunc
}

const newMax = makeMaxer()
newMax(-4)
console.log(newMax())
console.log(newMax)

// global scope

{
  // block scope
}

() => {
  // function scope
}
*/
/*

1.  Why should we use array methods?

  Short, and decriptive ways to manipulate arrays

2.  What is a callback function?

  A function passed in as an argument.

3.  What does forEach() do?

  Allows us to sequentially visit each element 
  in an array, similar to for-of

4.  What does map() do?

  creates a new array, copies the elements over and
  applies any changes you want to them

  const nums = [1, 2, 3]
  const doubledNums = nums.map(num => num * 2)
  // [2, 4, 6]

5.  What does filter() do?

  Returns a new array with the elements which meet 
  requirments established in the callback

  nums.filter(num => num >= 3)
  // [3]

6.  What does reduce() do?

  It allows us to keep an accumulator and manipulate it
  with every element of the array sequentially.

  Most of the time, you will be adding everything to
  the acc

  nums.reduce((total, num) => total + num, 0)

7.  What do some() and every() do?

  return booleans, some will return if anything in
  the array matches the callback logic, every will 
  return if everything in the array matches the
  callback logic.

8.  What does findIndex() do?

  returns -1 if no matching elements are found,
  and returns the index of the first matching element
  otherwise

9.  What is the difference between splice() and slice()

  splice is destructive, slice is non-destructive

  splice is used for removing/inserting elements
  slice is used to graph a chunk of an array

10. What does at() do?

  takes in an index, and returns the element at that 
  index (it supports negative indexing)*/


  const countDown = () => {
    for(let i = 1; i < 5; i++){
        console.log(i);
    }
}
  