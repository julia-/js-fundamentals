// Define an object that has two keys, one called 'buy' and the other called 'sell'. These will have the value of an anonymous function that takes no arguments, and that simply returns a string. The function associated with 'buy' will return "I want to buy!!", and the other returns "I want to get out!!"
// Define a function called originalFunction that takes two arguments, a number and an object, which you could call 'functionObject'. If the number is divisible by 2 then the function returns the functionObject's 'buy' function, and otherwise returns the 'sell' function.
// Now call this function with a number and the object that you created as arguments, and store the result in a constant called bitcoinDecision. Now work out how to get the string to display to the screen.

const functionObject = {
  buy: () => 'I want to buy!!',
  sell: () => 'I want to get out!!'
}

function originalFunction(num, obj) {
  return num % 2 === 0 ? obj.buy : obj.sell
}

const bitcoinDecision = originalFunction(2, functionObject)

console.log('Decision: ', bitcoinDecision())