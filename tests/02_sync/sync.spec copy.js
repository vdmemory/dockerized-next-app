// код дублируется
const Lodash = require('./sync')

describe('Lodash: compact', () => {
    const _ = new Lodash()
    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test('should remove falsy values from array', () => {
        const array = [false, 42, 0, '', true, null, 'hello']
        const result = [42, true, 'hello']
        // expext(_.compact(array)).toBe(result) // не пройдет
        expect(_.compact(array)).toEqual(result)
    })

    test('should NOT contain falsy values', () => {
        const array = [false, 42, 0, '', true, null, 'hello']
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(null)
    })
})