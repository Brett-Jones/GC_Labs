class Animal {
	constructor() {}

	static count() {
		return 3
	}

	drink() {
		console.log("yum, no longer thirsty!")
	}
}

class Dog extends Animal {
	constructor(name, breed, age = 0) {
		super()
		this.name = name
		this.breed = breed
		this.age = age
	}

	bark() {
		console.log("woof woof")
	}

	toString() {
		return "I am a dog"
	}

	info() {
		console.log(
			this.name +
				" is a " +
				this.breed +
				" and is " +
				this.age +
				" years old."
		)
	}
}

class LargeBreed extends Dog {
	constructor(name, breed) {
		super(name, breed)
	}

	fetch() {
		console.log("WOW THAT THING IS RUNNING FAST")
	}
}

const poodle = new LargeBreed("Floofy", "poodle")
const beagle = new Dog("Snoopy", "beagle", 5)

// instance from instantiate

beagle.info()
poodle.drink()
poodle.info()
poodle.fetch()
console.log(Animal.count())
console.log(beagle.toString())
console.log(beagle.name)
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
