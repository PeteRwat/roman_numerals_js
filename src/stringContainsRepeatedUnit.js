const stringContainsRepeatedUnit = (inputString) => {
    const regex = /(I{4,}|X{4,}|C{4,}|M{4,})/g
    return inputString.match(regex) ? true : false
}

module.exports = stringContainsRepeatedUnit