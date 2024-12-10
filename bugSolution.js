function foo(a, b) {
  // Type checking to ensure numerical addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    //Handle non-numeric inputs appropriately
    return 'Invalid input: operands must be numbers';
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "2")); // Output: Invalid input: operands must be numbers
console.log(foo("1", 2)); // Output: Invalid input: operands must be numbers
console.log(foo("1", "2")); // Output: Invalid input: operands must be numbers