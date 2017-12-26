// Copy and paste the code you wrote in the previous example. Change all instances of 'looper' to 'timeouter'. Here we are going to run some code in the main function that is asynchronous, and see the difference in behaviour. Instead of the loop followed by the console.log, put this code:
// setTimeout(function() {
//    console.log('After setTimeout!')
//    console.log("..now passing through to the cb..")
//    return cb()
// }, 6000)
// setTimeout is one of the asynchronous aspects of JS, and so the code behaves differently.
// Take note of the order that things are logged to the terminal.
// To see this clearly, run both Problem 6 and 7 in the same file and watch as they log to the terminal.

// https://www.youtube.com/watch?v=8aGhZQkoFbQ

function timeouter(callback) {
  console.time('timeouter')

  setTimeout(function() {
    console.log('After setTimeout!')
    console.log('..now passing through to the cb..')
    return callback()
  }, 6000)

  console.timeEnd('timeouter')
}
timeouter(function() {
  return console.log('Finished 6 in the callback')
})

console.log('After timeouter')
console.log('..now heading off to other parts of the program!')
console.log('==================')
