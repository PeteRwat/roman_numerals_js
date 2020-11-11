const {stringContainsNonNumerals, stringContainsRepeatedUnit, stringContainsRepeatedFive} = require('./helpers/inputStringChecks')
const processNumerals = require('./helpers/processNumerals')

const input = process.argv
if(input.length > 3){
    console.log("More than one Numeral string entered. Usage 'node convertRomanToArabic.js \"Numeral string\"")
    process.exit(0)
}

const numeralString = process.argv[2]

const NumeralStringContainsInValidNumerals = (numeralString) => {
    if(stringContainsNonNumerals(numeralString)){
        throw new Error ("Numeral string should only contain valid numerals. i.e. I, V, X, L, C, D and M")
    }
    
    if(stringContainsRepeatedUnit(numeralString)){
        throw new Error ("Numeral string should not contain more than three consecutive unit numerals. e.g IIII")
    }
    
    if(stringContainsRepeatedFive(numeralString)){
        throw new Error ("Numeral string should not contain consecutive five numerals. e.g VV")
    }
}

const convertNumeralToArabic = (numeralString) => {
    NumeralStringContainsInValidNumerals(numeralString)

    const numerals = numeralString.split("")

    return processNumerals(numerals)
}

module.exports = convertNumeralToArabic