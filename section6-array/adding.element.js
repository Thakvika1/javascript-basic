
const numbers = [3, 4]

// End
numbers.push(5, 6);

// Begining 
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');   // index 2

console.log(numbers);
