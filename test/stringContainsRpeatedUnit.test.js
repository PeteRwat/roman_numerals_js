const stringContainsRepeatedUnit = require('../src/stringContainsRepeatedUnit')

test("returns true for string containing IIII", () => {
    const inputString = "IIIIV"
    
    const returnedVal = stringContainsRepeatedUnit(inputString)

    expect(returnedVal).toBe(true)
})

test("returns true for string containing XXXX", () => {
    const inputString = "IXXXXV"
    
    const returnedVal = stringContainsRepeatedUnit(inputString)

    expect(returnedVal).toBe(true)
})

test("returns true for string containing CCCC", () => {
    const inputString = "CCCCIV"
    
    const returnedVal = stringContainsRepeatedUnit(inputString)

    expect(returnedVal).toBe(true)
})

test("returns true for string containing MMMM", () => {
    const inputString = "IMMMMDASV"
    
    const returnedVal = stringContainsRepeatedUnit(inputString)

    expect(returnedVal).toBe(true)
})

