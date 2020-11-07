const stringContainsRepeatedFive = require('../src/stringContainsRepeatedFive')

test("returns true for string containing VV", () => {
    const inputString = "IIIVV"
    
    const returnedVal = stringContainsRepeatedFive(inputString)

    expect(returnedVal).toBe(true)
})

test("returns true for string containing LL", () => {
    const inputString = "IXLLXV"
    
    const returnedVal = stringContainsRepeatedFive(inputString)

    expect(returnedVal).toBe(true)
})

test("returns true for string containing DD", () => {
    const inputString = "CCDDCCIV"
    
    const returnedVal = stringContainsRepeatedFive(inputString)

    expect(returnedVal).toBe(true)
})


