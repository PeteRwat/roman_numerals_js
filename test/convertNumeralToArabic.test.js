const convertNumeralsToArabic = require('../src/convertNumeralToArabic')

test('the right error is throw when non numerals are entered', () => {
    expect(() => {
        convertNumeralsToArabic("ABCD")
    }).toThrow(new Error ("Numeral string should only contain valid numerals. i.e. I, V, X, L, C, D and M"))
})

test('the right error is throw when repeated unit numerals ( > 3 )', () => {
    expect(() => {
        convertNumeralsToArabic("IIII")
    }).toThrow(new Error ("Numeral string should not contain more than three consecutive unit numerals. e.g IIII"))
})

test('the right error is throw when repeated five numerals (V, L, D)', () => {
    expect(() => {
        convertNumeralsToArabic("VV")
    }).toThrow(new Error ("Numeral string should not contain consecutive five numerals. e.g VV"))
})

test('the right arabic value is returned for simple additive numeral (VI)', () => {
    const returned = convertNumeralsToArabic("VI")

    expect(returned).toBe(6)
})

test('the right arabic value is returned for simple subtraction numeral (IV)', () => {
    const returned = convertNumeralsToArabic("IV")
    
    expect(returned).toBe(4)
})

test('the right arabic value is returned for complex numeral (MCMXCIX)', () => {
    const returned = convertNumeralsToArabic("MCMXCIX")
    
    expect(returned).toBe(1999)
})