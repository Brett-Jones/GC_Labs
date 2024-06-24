
// const fullName = "Mitch Cuckovich";
// const age = "25";
// const birthday = "January 24";
// const pineapplePizza = true;
// const lifeEvents = [
//     "I was born in Troy, Michigan",
//     "I went to Hope College",
//     "I participated in junior olympics when I was 10 years old",
//     "I love to be in nature"
// ];

// if(pineapplePizza === true) {
//     console.log(`My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`)
// } else {
//     console.log(`My name is ${fullName} and I am not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`)
// };

// for(let i = 0; i < lifeEvents.length; i++) {
//     console.log(lifeEvents[i]);    
// };

// const counter = 0;

// while (i < 1) {
//     text += 8 + i;
//     i++;
// }

// // `
 const house = true;
 const apt = "true";

 console.log(house === apt);
console.log(house == apt);



const one = 1;
const one2 = "1";

console.log(one === one2);
// === deep equalist = same value & same type
console.log(one == one2);
// == equals the same value but not same type
// null & undefined = false

const sports = [
    "hockey",
    "football",
    "golf"
];

console.log(sports);
console.log(sports[1]);

sports.pop();
console.log(sports);

sports.push("tennis");
console.log(sports);

sports.shift();
console.log(sports);

sports.push("UFC", "F1");
console.log(sports);

sports.splice(2, 2);
console.log(sports);

const stuff = "zooweemama";
console.log(stuff[3]);

const person = {
    name: "Brett",
    isMale: true,
    age: 35
};

const person2 = {
    name: "Brett",
    isMale: false,
    age: 35
};


console.log(person === person2);
console.log(person == person2);
const people = [];
people.push(person);
// people.push(person2);
console.log(people);

people.push({
    name: "Kassie",
    isMale: false,
    age: 35
});
console.log(people);
console.log(people.find(person => person.isMale === true));
// find & filter take an arrow function (can be used in console.log)
// filter will return a list of its findings & find will return the 1st thing
console.log(people.filter(person => person.isMale === true));
console.log(people.filter(person => person.isMale === false));
console.log(people.find(person => person.isMale === false));

// if people haves more females than males log "the matriarchy"
// if equal log "equality"
// if more males than female log "the patriarchy"
// forEach, map, filter, find take "=>" as a parameter
const males = people.filter(person => person.isMale === true)
const females = people.filter(person => person.isMale === false)
if(males.length < females.length) {
    console.log("The Matriarchy");
    }else if(males.length === females.length) {
    console.log("Equality")
    }else if(males.length > females.length){
        console.log("The Patriarchy");
    }


















