# JavaScript Fundamentals

## Problems
- [Problem 1](#problem-1)
- [Problem 2](#problem-2)
- [Problem 3](#problem-3)
- [Problem 4](#problem-4)
- [Problem 5](#problem-5)
- [Problem 6](#problem-6)
- [Problem 7](#problem-7)

### Problem 1
Write a function called stringMultiply that takes two numbers, a string (of numbers, eg "123"), and callback function as arguments.

Return the callback function with the two numbers (those arguments) multiplied together as one argument, and the string turned into an array of integers.

Define a variable and in it store the result of arrayMultiply when called with 2, 2, "123", and an anonymous function that takes the multiplication result and the array as arguments, and then multiplies each element in this array by that result. When you console.log this variable to screen it should produce [ 4, 8, 12 ].

### Problem 2
Write a function called arrayMultiplyAgain that takes a number and an array as arguments, and returns each element in the array multiplied by the number.

Now write a second function called moreArrayMultiply that takes three arguments: a number, an array, and a function: (eg. num, arr, funct). Have this function return the result of number and array when called as arguments to arrayMultiplyAgain which you passed in as an argument.

Define a variable and in it store the result of the second function when called with 2, [1, 2, 3], and the first function you created. When you console.log this variable to screen it should produce [2, 4, 6].

### Problem 3
Implement your own version of the .map method.

Define a function that takes a callback and provides the same functionality as the .map function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

The advanced version is to extend the Array prototype (and the simpler version to have the function take the array as an argument).

### Problem 4
Implement your own version of the .filter method.

Define a function that takes a callback and provides the same functionality as the .filter function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

The advanced version is to extend the Array prototype (and the simpler version to have the function take the array as an argument).

### Problem 5
Define an object that has two keys, one called 'buy' and the other called 'sell'. These will have the value of an anonymous function that takes no arguments, and that simply returns a string. The function associated with 'buy' will return "I want to buy!!", and the other returns "I want to get out!!"

Define a function called originalFunction that takes two arguments, a number and an object, which you could call 'functionObject'. If the number is divisible by 2 then the function returns the functionObject's 'buy' function, and otherwise returns the 'sell' function.

Now call this function with a number and the object that you created as arguments, and store the result in a constant called bitcoinDecision. Now work out how to get the string to display to the screen.

### Problem 6
This will show the way JS functions when acting synchronously.

I want you to now make a function called looper. This takes one argument which is a callback function. To be clear, this function you are making looks like any other function that has one argument, but we know that the argument is going to be a callback function which can often be rendered 'cb' (eg, `const functionName = (cb) => { etc)`.

In the body of the looper function first start a timer with this code:
```javascript
console.time('looper')
```
I want you to insert a for loop that iterates 1000000000 times. Do nothing within that loop (or something if you like). Immediately after the loop log out "After loop!" and end the 'looper' timer. Then return your callback with no arguments.

Now run looper with only the callback as an argument (and as mentioned this takes no arguments itself). Within the callback end the console.time, and then return `console.log("Finished 6 in the callback")` (which will return undefined, but it's not relevant for this).

Loops in JS are synchronous, so the functioning of the program stops while the loop is running. The code in the callback is run after the outer function's code is completed.

Now write this code after your looper function is called:
```javascript
console.log("After looper")
console.log("..now heading off to other parts of the program!")
console.log("==================")
```
Take note of the timing and order that things are logged.

### Problem 7
Copy and paste the code you wrote in the previous example. Change all instances of 'looper' to 'timeouter'. Here we are going to run some code in the main function that is asynchronous, and see the difference in behaviour. Instead of the loop followed by the console.log, put this code:
```javascript
setTimeout(function() {
  console.log('After setTimeout!')
  console.log("..now passing through to the cb..")
  return cb()
  }, 6000)
```
`setTimeout` is one of the asynchronous aspects of JS, and so the code behaves differently. Take note of the order that things are logged to the terminal. To see this clearly, run both Problem 6 and 7 in the same file and watch as they log to the terminal.