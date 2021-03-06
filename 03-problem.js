// Implement your own version of .map
// Define a function that takes a callback and provides the same functionality as the .map function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

// a. Function that takes an array as an argument and a callback
// function mapArray(array, callback) {
//   const newArr = []
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(callback(array[i]))
//   }
//   return newArr
// }

// mapArray([1, 2, 3, 4, 5], function (item) {
//   return item * 7
// })

// b. Extend the Array.prototype
if (!Array.prototype.mapArray) {
  Array.prototype.mapArray = function (callback) {
    const newArr = []
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i]))
    }
    return newArr
  }
}

const oldArray = [1, 2, 3, 4, 5]

const newArray = oldArray.mapArray(function (item) {
  return item * 7
})

console.log('Old: ', oldArray)
console.log('New: ', newArray)