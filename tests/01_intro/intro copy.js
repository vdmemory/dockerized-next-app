function expect(value) {
    return {
        toBe: exp => {
            if (value === exp) {
                console.log("Succes");
            } else {
                console.error(`Value is ${value}, but expectation is ${exp}`);
            }
        }
    }
};

const sum = (a, b) => a + b;
const nativeNull = () => null;

// expect(sum(41, 1)).toBe(43);