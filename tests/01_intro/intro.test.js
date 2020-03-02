const {sum, nativeNull} = require('./intro')

// test('Sum should return sum of two values', () => expect(sum(1, 3)).toBe(4))

describe('Sum function', () => {

    test("should return sum of two values", () => {
        expect(sum(1, 3)).toBe(4) // число должно быть 4, характерен для примитивов
        expect(sum(2, 3)).toEqual(5) // аналог toBe, для сложных конструкций - массив, обьект
    })

    test('should return value correctly comparing to other', () => {
        expect(sum(2, 3)).toBeGreaterThan(4); // число должно быть больше чем 4
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5); // число должно быть больше или равно 5
        expect(sum(2, 3)).toBeLessThan(6); // число должно быть меньше чем 6
        expect(sum(2, 3)).toBeLessThanOrEqual(5) // число должно быть меньше или равно 5
    })

    test('should sum 2 float values correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })

})

describe('Native null function', () => {

    test('should return false value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        // expect(nativeNull()).toBeNaN()
        expect(nativeNull()).toBeFalsy() // undefined, null, 0, '' в  блоке 'if' не сработают
        expect(nativeNull()).toBeDefined() // это не undefined, должна быть определена
        expect(nativeNull()).not.toBeTruthy() // не undefined, не null, не 0, не ''
        expect(nativeNull()).not.toBeUndefined()
    })
})