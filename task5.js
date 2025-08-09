const numbers = [1, 2, 3];
let newNumbers = [...numbers];
newNumbers[0] = 99;

console.log("Original:", numbers);
console.log("Copy:", newNumbers);
