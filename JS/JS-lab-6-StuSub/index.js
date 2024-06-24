

const submissions = [
	{
		name: "Jane",
		score: 95,
		passed: true,
	},
	{
		name: "Joe",
		score: 77,
		passed: true,
	},
	{
		name: "Jack",
		score: 59,
		passed: false,
	},
	{
		name: "Jill",
		score: 88,
		passed: true,
	},
];

const addSubmission = (array, newName, newScore) => {
	array.push({
		name: newName,
		score: newScore,
		passed: newScore >= 60,
	});
};

const deleteSubmissionByIndex = (array, index) => {
	array.splice(index, 1);
};

const deleteSubmissionByName = (array, name) => {
	array.splice(
		array.findIndex(record => record.name === name),
		1
	);
};

const editSubmission = (array, index, score) => {
	const updateRecord = {
		...array[index],
		score: score,
		passed: score >= 60,
	};
	array[index] = updateRecord;
};

const findSubmissionByName = (array, name) => {
	return array.find(record => record.name === name);
};

const findLowestScore = array => {
	let result = array[0];
	let smallest = array[0].cost;
	for (let i = 1; i < array.length; i++) {
		if (array[i].score < smallest) {
			smallest = array[i].cost;
			result = array[i];
		}
	}
	return result;
};

const findAverageScore = array => {
	let total = 0;
	for (let i = 0; i < array.length; i++) {
		total += array[i].score;
	}
	return total / array.length;
};

const filterPassing = array => {
	return array.filter(record => record.passed === true);
};

const filter90AndAbove = array => {
	return array.filter(record => record.score >= 90);
};

