const {shuffleArray} = require('./utils')

let testArray = [5, 3, 4]

describe('shuffleArray should', () => {
    
    test('shuffling card winthin the array', () => {
        let result = shuffleArray(testArray)
        expect(result[0] && result[1] && result[2]).not.toBe(testArray[0] && testArray[1] && testArray[3])
})

test(`return array with same length`, () => {
    let result = shuffleArray(testArray)
    expect(result.length).toEqual(testArray.length)
})

})

