let name1 = "Dwight";
let name2 = "Jim";
let name3 = "Michel";

if (name1.length > name2.length && name1.length > name3.length) {
    console.log(name1) 

 } else if (name2.length < name1.length && name2.length < name3.length) {
    console.log(name2) 

 } else if(name3.length < name1.length && name3.length > name2.length) {
    console.log(name3)  

 } else if(name1.length == name3.length && name2.length > name1.length) {
    console.log(name2)

 } else if(name3.length > name1.length && name3.length > name2.length) {
    console.log(name3)
    
 } else if(name3.length > name2.length && name3.length > name1.length) {
    console.log(name3)
    
} else {
    console.log("oops")
}













