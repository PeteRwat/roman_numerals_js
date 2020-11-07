const stringContainsNonNumerals = require('../src/stringContainsNonNumerals')

test("returns true for string not containing I,X,C,M,L or D", () => {
    const inputString = "fattree"
    
    const returnedVal = stringContainsNonNumerals(inputString)

    expect(returnedVal).toBe(true)
})

test("returns true for string containing numerals and non-numerals", () => {
    const inputString = "IXXMCFATqXXV"
    
    const returnedVal = stringContainsNonNumerals(inputString)

    expect(returnedVal).toBe(true)
})

test("returns false for string containing only numerals", () => {
    const inputString = "CXCCCIV"
    
    const returnedVal = stringContainsNonNumerals(inputString)

    expect(returnedVal).toBe(true)
})


