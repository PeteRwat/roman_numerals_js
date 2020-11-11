const conversions = require('../conversions.json')

const checkClosestUnitSub = (currentValue, nextValue) => {
    if(!(currentValue/nextValue === (1/10) || currentValue/nextValue === (1/5))){
        throw new Error ("can only subtract the next lowest unit")
    }
}

const checkAddSubSameUnit = (index, numerals) => {
    if(index < numerals.length-2){
        const currentValue = conversions[numerals[index]]
        const secondNextValue = conversions[numerals[index + 2]]
        if(currentValue === secondNextValue){
            throw new Error ("can not add and subtract the same unit value")
        }
    }  
}

const checkSingleUnitSub = (index, numerals) => {
    if(index != 0){
        if(numerals[index - 1] === numerals[index]){
            throw new Error ("can only subtract a single unit value")
        }
    }
}

const isLastIndex = (index, reversedNumerals) => {
    return index === reversedNumerals.length
}

const processNumerals = (numerals) => {
    var total = 0

    numerals.forEach((numeral, index) => {
            const currentValue = conversions[numeral]
            
            if (isLastIndex(index, numerals)) {
                total += currentValue
            } else {
                const nextValue = conversions[numerals[index + 1]]

                if (currentValue < nextValue) {
                    checkSingleUnitSub(index, numerals)
                    checkClosestUnitSub(currentValue, nextValue)
                    checkAddSubSameUnit(index, numerals)
                    total -= currentValue
                } else {  
                    total += currentValue
                }
            }
    })

    return total
}

module.exports = processNumerals