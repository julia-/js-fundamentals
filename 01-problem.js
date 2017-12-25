// Write a function called stringMultiply that takes two numbers, a string (of numbers, eg "123"), and callback function as arguments.
// Return the callback function with the two numbers (those arguments) multiplied together as one argument, and the string turned into an array of integers.
// Define a variable and in it store the result of arrayMultiply when called with 2, 2, "123", and an anonymous function that takes the multiplication result and the array as arguments, and then multiplies each element in this array by that result. When you console.log this variable to screen it should produce [ 4, 8, 12 ].

function arrayMultiply(num1, num2, numString, callback) {
  const multipledNumber = num1 * num2
  return callback(multipledNumber, numString)
}

const result = arrayMultiply(2, 2, '123', (num, numString) => {
  const arr = numString.split('')
  return arr.map(item => item * num)
})

console.log('Result: ', result)
