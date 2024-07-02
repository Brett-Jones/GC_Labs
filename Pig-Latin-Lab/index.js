
const tempConverter = (temp, unit) => {
    if (unit === "C") {
        return temp * 9 / 5 + 32
    }
    return ((temp - 32) * 5) / 9
}

const checkIfPalindrome = (str) => {
    // return str === str.split('').reverse.join("")
    
}



module.exports = { tempConverter }

















