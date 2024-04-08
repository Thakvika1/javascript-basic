// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// console.log(combined)

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 'a', ...second, 'b'];

const copy = [...combined];
console.log(copy)