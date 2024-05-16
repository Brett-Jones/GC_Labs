let name1 = "Dwight";
let name2 = "Jim";
let name3 = "Michael";

if (name1.length > name2.length && name1.length > name3.length) {
    console.log(name1 + " has the longest name.");
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(name2 + " has the longest name.");
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(name3 + " has the longest name.");
} else if(name1.length === name2.length && name1.length === name3.length && name2.length === name3.length) {
    console.log("All three names, " + name1 + ", " + name2 + ", " + name3 + " are the same length.");
} else if (name1.length === name2.length && name1.length !== name3.length && name2.length !== name3.length) {
    console.log(name1 + " and " + name2 + " tie for the longest name.");
} else if (name1.length === name3.length && name1.length !== name2.length && name2.length !== name3.length) {
    console.log(name1 + " and " + name3 + " tie for the longest name.");
} else if (name2.length === name3.length && name1.length !== name2.length && name1.length !== name3.length) {
    console.log(name2 + " and " + name3 + " tie for the longest name.");
} 

// if (name1.length > name2.length && name1.length === name3.length) {
//     console.log(name1) // dwight

// } else if (name2.length < name1.length && name2.length < name3.length) {
//     console.log(name2) // jim

// } else if(name3.length === name1.length && name3.length > name2.length) {
//     console.log(name3) // michel

// } else if(name1.length === name3.length && name2.length < name1.length) {
//     console.log(name1 + " " + name3) // dwight + michel

// } else if(name3.length > name2.length && name1.length > name2.length) {
//     console.log(name1 + " " + name2 + " " + name3) // dwight, jim

// } else if(name2.length < name3.length && name3.length === name1.length) {
//     console.log(name2 + " " + name3) //jim, michel

// } else if(name3.length > name2.length && name2.length < name3.length) {
//     console.log(name1 + " " + name2 + " " + name3) // dwight, jim, michel

// } else {
//     console.log("Everyone is here")
// }




// dwight, jim, michel = dwight
// dwight, michel, jim = michel
// jim, michel, dwight = jim
// jim, dwight, michel = dwight, michel
// michael, dwight, jim = jim, michel
// michael, jim dwight = dwight, jim








