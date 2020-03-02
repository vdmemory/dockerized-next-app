function map(array, cback) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result.push(cback(array[i]))
    }
    return result
}

module.exports = {map}