// Use a for loop to log numbers from 1 to 10, 
// then another for loop to count down, logging numbers from 10 to 1.

for (let i = 1; i <= 10; i++) {
	console.log(i);
}

for (let i = 10; i >= 1; i--) {
	console.log(i);
}

// Repeat the exercise with a while loop.

let i = 1;
while (i <= 10){
	console.log(i);
	i++;
}

let j = 10; 
while (j >= 1) {
	console.log (j);
	j--;
}

// Repeat with a do while loop.

let k = 1;
do {
	console.log(k);
	k++;
} while (k <= 10);

let l = 10;
do {
	console.log(l);
    l--;
} while (l >= 1);

// Create this array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

for (const number of numbers) {
	console.log(number);
}

// Extended Challenge

let word = "p";
let missing = 10 - word.length;
let result = "";

for (let i = 0; i < missing; i++){
	result += " ";
}
console.log(result + word);














