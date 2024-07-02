const { tempConverter } = require("./index")


describe("C to F", () => {
    it("converts 0C to be 32F", () => {
        expect(tempConverter(0,"C")).toEqual(32)
    })
    it("converts 100C to be 212F", () => {
        expect(tempConverter(100, "C")).toEqual(212)
    })
    it("converts 95F to be 35C", () => {
        expect(tempConverter(95, "F")).toEqual(35)
    })
    it("converts -40F to be -40C", () => {
        expect(tempConverter(-40,"F")).toEqual(-40)
    })
    it("converts -40C to be -40F", () => {
        expect(tempConverter(-40, "C")).toEqual(-40)
    })
    it("converts 100F to be ~37.778C", () => {
        expect(tempConverter(100, "F")).toEqual(37 + 7 / 9)
    })
})


describe("checkIfPalindrome", () {
    it("is true if given 'hannah'",() => )
})









