const conversions = require('../conversions.json')

const getConversionObj = (numeral) => {
    return conversions.filter(conversionObj => conversionObj.numeral == numeral)[0]
}

module.exports = getConversionObj
