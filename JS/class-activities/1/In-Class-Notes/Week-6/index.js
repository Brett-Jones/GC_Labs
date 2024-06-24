
const printTens = () => {
	for (let i = 10; i <= 100; i += 10) {
		console.log(i)
	}
}

/*
let num = 0
while (num <= 10) {
	console.log(num++)
}
*/

const num = Math.ceil(Math.random() * 100)
if (num > 80) {
	console.log("really big")
} else if (num > 50) {
	console.log("big")
} else if (num > 20) {
	console.log("hey")
	console.log("decently big")
}

const implicit = () => 3
const explicit = () => {
	return 3
}

const countUntilTens = step => {
	let num = 0
	do {
		num += step
		console.log(num)
	} while (num % 10 !== 0)
}

/*
const hasVowels = word => {
	const vowels = ["a", "e", "i", "o", "u"]
	for (let i = 0; i < word.length; i++) {
		const letter = word[i]
		for (const vowel of vowels) {
			if (letter === vowel) return true
		}
	}
	return false
}

const hasVowels = word => {
	const vowels = new Set(["a", "e", "i", "o", "u"])
	return word
		.split("")
		.some(letter => vowels.has(letter))
}
*/
/*
const testTemperature = (desiredTemp, actualTemp) => {
	if (desiredTemp === actualTemp)
		console.log("Stand by")
	else if (desiredTemp < actualTemp)
		console.log("Run Heat")
	else console.log("Run A/C")
}
*/

const testTemperature = (dT, aT) =>
	console.log(
		dT > aT
			? "Run A/C"
			: dT < aT
			? "Run Heat"
			: "Stand by"
	)

const makeCar = (make, model, year, isHybrid) => ({
	make,
	model,
	year,
	isHybrid
})

const cars = [
	makeCar("Toyota", "Prius", 2020, true),
	makeCar("Toyota", "Prius", 2021, true),
	makeCar("Ford", "F-150", 2015, false),
	makeCar("Ferrari", "Enzo", 2004, false)
]
/*
const findCars = (cars, model) => {
	const matchingCars = []
	for (const car of cars) {
		if (model === car.model) matchingCars.push(car)
	}
	return matchingCars
}
*/
/*
findCars = (cars, model) =>
	cars.filter(car => car.model === model)
*/
const findCars = (cars, model) => {
	const matchingCars = []
	cars.forEach(car => {
		if (model === car.model) matchingCars.push(car)
	})
	return matchingCars
}
/*
const addCar = (cars, make, model, hybrid) => {
	cars.unshift(makeCar(make, model, 2021, hybrid))
}

addCar(cars, "Suburu", "Forester", true)
console.log(cars)
*/

const addCar = (cars, make, model, hybrid) => [
	makeCar(make, model, 2021, hybrid),
	...cars
]

const checkIfHybridsForSale = cars =>
	cars.some(car => car.isHybrid)

const areHybridsForSale = checkIfHybridsForSale(cars)
console.log(areHybridsForSale)
/*

1.  What is scope?

    The context in which your code runs.

2.  When a name is referenced, which scope is referenced
    first (inner, outer, global)?

    inner.

3.  When a name is referenced, which scope is referenced
    last (inner, outer, global)?

    global.

4.  What is a closure?

    it's how an inner function can remember a variable
    from an outer functions scope after it finishes
    executing

    const outer = () => {
      let num = 1
      const inner = () => {
        return num++
      }
      return inner
    }

    const tracker = outer()
    console.log(tracker)
    console.log(tracker())
    console.log(tracker())

5.  Why are closures useful?

    Allow us to make private variables

6.  Describe the following:  class, instance.

    -class more like a factory/scaffolding
    -instances as the objects that come out 
    of the factory

7.  What is a constructor?

    It holds the parameters of the class,
    and it's where we set up our instance variables

8.  What does the keyword extends do and how does
    it relate to super/subclasses?

    It gives establishes the extended class as the 
    superclass and the one that implements the
    extension as the subclass

9.  What does static refer to?

    class method or variable

10. What is prototypal inheritence and how does the
    prototype chain work?



*/

const obj = {
	property: 33
}
const prop = "property"
console.log(obj.property)
console.log(obj[prop])
obj.color = "blue"
console.log(obj)
