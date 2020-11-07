const getConversionObj = require('../src/getConversionObj')
const conversions = require('../src/conversions.json')

test("getConversionObj returns correct info for I", () => {
    const returnedObj = getConversionObj("I")

    const expectedObj = conversions[0]

    expect(returnedObj).toEqual(expectedObj)
})