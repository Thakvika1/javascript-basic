
function count0(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement)
        console.log(accumulator, current === searchElement)
        return accumulator + occurrence;
    }, 0);
}

const numbers = [1, 2, 3, 4, 1];

const count = count0(numbers, 1);

console.log(count);