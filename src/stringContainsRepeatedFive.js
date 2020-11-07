const stringContainsRepeatedFive = (inputString) => {
    const regex = /(V{2,}|L{2,}|D{2,})/g
    return inputString.match(regex) ? true : false
}

module.exports = stringContainsRepeatedFive