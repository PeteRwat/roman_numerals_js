const {stringContainsRepeatedUnit, stringContainsRepeatedFive, stringContainsNonNumerals} = require('../../src/helpers/inputStringChecks')

describe("stringContainsRepeatedUnit", () => {
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
    
})

describe("stringContainsRepeatedFive", () => {
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
    
})

describe("stringContainsNonNumerals", () => {
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
    
        expect(returnedVal).toBe(false)
    })
    
})