// This will show the way JS functions when acting synchronously.
// I want you to now make a function called looper. This takes one argument which is a callback function. To be clear, this function you are making looks like any other function that has one argument, but we know that the argument is going to be a callback function which can often be rendered 'cb' (eg, const functionName = (cb) => { etc).
// In the body of the looper function first start a timer with this code:
// console.time('looper')
// I want you to insert a for loop that iterates 1000000000 times. Do nothing within that loop (or something if you like). immediately after the loop log out "After loop!" End the 'looper' timer. Then return your callback with no arguments.
// Now run looper with only the callback as an argument (and as mentioned this takes no arguments itself). Within the callback end the console.time, and then return console.log("Finished 6 in the callback") (which will return undefined, but it's not relevant for this).
// Loops in JS are synchronous, so the functioning of the program stops while the loop is running. The code in the callback is run after the outer function's code is completed.
// Now write this code after your looper function is called
// console.log("After looper")
// console.log("..now heading off to other parts of the program!")
// console.log("==================")
// Take note of the timing and order that things are logged.

function looper(callback) {
  console.time('looper')
  // reduced number of loops
  for (let i = 0; i < 10000; i++) {
    console.log(`Loop ${i}`)
  }
  console.log('After loop!')
  console.timeEnd('looper')
  return callback
}

looper(() => console.log('Finished 6 in the callback'))

console.log('After looper')
console.log('..now heading off to other parts of the program!')
console.log('==================')
