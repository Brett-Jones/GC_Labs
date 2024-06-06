const countDown = () => {
    for(let i = 5; i >= 1; i--){
        console.log(i);
    }
}

countDown();

const countUp = (start,end) => {
    for(let i = start; i <= end; i++){
        console.log(i);
    }
}

countUp(1,10);

const isLong = (word) => {
    if (word.length > 10) return true;
    else return false;
}

console.log(isLong("house"));

const whatWaterState = (temperature) => {
    if(temperature <= 32) {
        console.log("solid");
    }else if(temperature < 212){
        console.log("liquid");
    }else {
        console.log("gas");
    }
}

whatWaterState(0);
whatWaterState(75);
whatWaterState(220);


const sandwiches = [
	{
		type: "italian",
		calories: 1000,
		cost: 7.69,
        isVegertarian: false 
	},
	{
		type: "veggie",
		calories: 500,
		cost: 5.50,
        isVegertarian: true
	},
	{
		type: "italian",
		calories: 900,
		cost: 8.25,
        isVegertarian: false
	},
	{
		type: "italian",
		calories: 650,
		cost: 8.50,
        isVegetarian: true
	},
];

const makeSandwich = (
    sandwichArray, type, 
    calories, 
    cost, 
    isVegertarian
    ) => {
        sandwichArray.push({
            type,
            calories,
            cost,
            isVegertarian
        });
};
makeSandwich(sandwiches, "blt", 275, 5.69, false)

const findVegetarianSandwich = (sandwichArray) => {
	return sandwichArray.find(record => record.isVegertarian);
};

findVegetarianSandwich(sandwiches);

const findCheapestSandwich = sandwichArray => {
	let cheapestSandwich = sandwichArray[0].cost;
	for (let i = 1; i < sandwichArray.length; i++) {
		if (sandwichArray[i].cost < cheapestSandwich) {
		}
	}
	return cheapestSandwich;
};




