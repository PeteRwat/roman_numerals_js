const conversions = require('../conversions.json')

const checkClosestUnitSub = (currentValue, nextValue) => {
    if(!(currentValue/nextValue === 10 || currentValue/nextValue === 5)){
        throw new Error ("can only subtract the next lowest unit")
    }
}

const checkAddSubSameUnit = (index, reversedNumerals) => {
    if(index < reversedNumerals.length-2){
        const currentValue = conversions[reversedNumerals[index]]
        const secondNextValue = conversions[reversedNumerals[index + 2]]
        if(currentValue === secondNextValue){
            throw new Error ("can not add and subtract the same unit value")
        }
    }  
}

const isLastIndex = (index, reversedNumerals) => {
    return index === reversedNumerals.length
}

const processNumerals = (numerals) => {
    const reversedNumerals = numerals.reverse()

    var total = 0
    var skipNext = false

    reversedNumerals.forEach((numeral, index) => {
        if (skipNext) {
            skipNext = false
        } else {
            const currentValue = conversions[numeral]
            
            if (isLastIndex(index, reversedNumerals)) {
                total += currentValue
            } else {
                const nextValue = conversions[reversedNumerals[index + 1]]

                if (currentValue > nextValue) {
                    checkClosestUnitSub(currentValue, nextValue)
                    total += currentValue - nextValue
                    skipNext = true
                } else {
                    checkAddSubSameUnit(index, reversedNumerals)
                    total += currentValue
                }
            }
        }
    })

    return total
}

module.exports = processNumerals