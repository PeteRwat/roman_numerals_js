const stringContainsRepeatedUnit = (inputString) => {
    const regex = /(I{4,}|X{4,}|C{4,}|M{4,})/g
    return inputString.match(regex) ? true : false
}

const stringContainsRepeatedFive = (inputString) => {
    const regex = /(V{2,}|L{2,}|D{2,})/g
    return inputString.match(regex) ? true : false
}

const stringContainsNonNumerals = (inputString) => {
    const regex = /[^(I|V|X|C|M|L|D)]/g
    return inputString.match(regex) ? true : false
}

module.exports = {
    stringContainsRepeatedUnit,
    stringContainsRepeatedFive,
    stringContainsNonNumerals
}