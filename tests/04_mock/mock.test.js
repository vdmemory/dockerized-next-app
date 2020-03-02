const {map} = require('./mock')

// результат тестировали в intro протестируем callback функцию
describe('Map function', () => {

    let array
    let fn

    beforeEach(() => {
        array = [1, 2, 3, 5]
        fn = jest.fn(x => x ** 2) // callback с функционалом jest
        map(array, fn)
    })

    test('should call callback', () => {
        expect(fn).toBeCalledTimes(4) // сколько раз функция должна быть вызвана
    })

    test('should call callback 4 times', () => {
        expect(fn).toBeCalledTimes(4) // сколько раз функция должна быть вызвана
        expect(fn.mock.calls.length).toBe(4) // тоже, с использованием mock от jest
    })

    // чему равняется результат callback функции при каждой итерации
    test('should pow 2 each element', () => {
        expect(fn.mock.results[0].value).toBe(1)
        expect(fn.mock.results[1].value).toBe(4)
        expect(fn.mock.results[2].value).toBe(9)
        expect(fn.mock.results[3].value).toBe(25)

    })

    // что еще можно сделать с mock? можем управлять mock-функцией fn - можем
    // замокать возвращаемый результат
    test('should fn work', () => {
        fn
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(200)
            .mockReturnValue('222')
        expect(fn()).toBe(100)
        expect(fn()).toEqual(200)
        expect(fn()).toEqual('222')
        expect(fn()).toBe('222')
    })
})