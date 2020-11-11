const processNumerals = require('../../src/helpers/processNumerals')

test("handles complex good input", () => {
    const inputString = "MCMXCIX"

    const returned = processNumerals(inputString.split(""))

    expect(returned).toBe(1999)

})

test("handles simple good input", () => {
    const inputString = "VI"

    const returned = processNumerals(inputString.split(""))

    expect(returned).toBe(6)

})

test("throws error for not next closes unit subtraction", () => {
    const inputString = "IL"

    expect(() => processNumerals(inputString.split(""))).toThrow(new Error("can only subtract the next lowest unit"))
})

test("throws error if adding and subtracting the same unit value", () => {
    const inputString = "MIXI"

    expect(() => processNumerals(inputString.split(""))).toThrow(new Error("can not add and subtract the same unit value"))
})

test("throws error if subtracting more than one unit value", () => {
    const inputString = "IIV"

    expect(() => processNumerals(inputString.split(""))).toThrow(new Error("can only subtract a single unit value"))
})