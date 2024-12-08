# Unexpected Null Value in Function Parameter

This repository demonstrates a common JavaScript error: attempting to access a property of a null or undefined object. The `foo` function takes a parameter `x` and attempts to return its length. If `x` is null, this will result in a `TypeError`. 

The solution demonstrates how to handle the null case using a conditional statement to check if `x` is null before accessing its `length` property. 

## How to reproduce
1. Clone this repository.
2. Run `bug.js`.
3. Observe the TypeError when calling `foo` with a null parameter. 
4. Run `bugSolution.js` to see the corrected function. 