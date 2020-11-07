const stringContainsNonNumerals = (inputString) => {
    const regex = /[^(I|V|X|C|M|L|D)]/g
    return inputString.match(regex) ? true : false
}

module.exports = stringContainsNonNumerals