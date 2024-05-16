let name1 = "Dwight";
let name2 = "Jim";
let name3 = "Michel";

if (name1.length > name2.length && name1.length === name3.length) {
    console.log(name1) // dwight

} else if (name2.length < name1.length && name2.length < name3.length) {
    console.log(name2) // jim

} else if(name3.length === name1.length && name3.length > name2.length) {
    console.log(name3) // michel

} else if(name1.length === name3.length && name2.length < name1.length) {
    console.log(name1 + " " + name3) // dwight + michel

} else if(name3.length > name2.length && name1.length > name2.length) {
    console.log(name1 + " " + name2 + " " + name3) // dwight, jim

} else if(name2.length < name3.length && name3.length === name1.length) {
    console.log(name2 + " " + name3) //jim, michel

} else if(name3.length > name2.length && name2.length < name3.length) {
    console.log(name1 + " " + name2 + " " + name3) // dwight, jim, michel

} else {
    console.log("Everyone is here")
}




// dwight, jim, michel = dwight
// dwight, michel, jim = michel
// jim, michel, dwight = jim
// jim, dwight, michel = dwight, michel
// michael, dwight, jim = jim, michel
// michael, jim dwight = dwight, jim








