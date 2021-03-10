

/* Codewars */

/* 

1. Complete the square sum function so that it squares each number passed into it and then sums the results
together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

function squareSum(numbers){
    return numbers.map(item => item ** 2).reduce((a, b) => a + b, 0)
   }
     


/*

2. Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
var vowelsCount = 0;
vowelsCount = Array.from(str).filter(item => 'aeiou'.includes(item)).length;
return vowelsCount;
}



/*
3. Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

function squareSum(numbers){
return numbers.map(item => item ** 2).reduce((a, b) => a + b, 0)
}


/*

4. Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

*/
function countSheeps(arrayOfSheeps) {
return arrayOfSheeps.filter(Boolean).length;
}


/*

5. Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5 
*/

function litres(time) {
return Math.floor(time * .5)

}

/*

6. Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most 
creative hello world you can think of? What is a "hello world" solution you would want to show your friends?
*/

let greet = () => 'hello world';



/*
7. Given a non-empty array of integers, return the result of multiplying the values together in order. 
Example:  [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x){
return x.reduce((acc, currValue) => acc * currValue, 1)
}



/* 

8. Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. */

function basicOp(operation, value1, value2)
{
let sum;
sum = eval(`${value1} ${operation} ${value2}`)
return sum
}

/*

9. The first century spans from the year 1 up to and including the year 100, The second - from 
the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in. */

function century(year) {
return Math.ceil(year / 100)
}


/* 

10. Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are 
positive, non-zero digits. */

function isDivisible(n, x, y) {
if(n % x === 0 && n % y === 0){
  return true
  } else {
    return false
  }
}


/* 

11. Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

function countPositivesSumNegatives(input) {
if(input == undefined || input.length == 0){
  return []
  } else {
  let positives = input.filter(item => item > 0).length
  let sumNeg = input.filter(item => item < 0).reduce((sum, item) => sum + item, 0);
    return [positives, sumNeg]
  }
}

/* 

12. lock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

*/

function past(h, m, s){
return (s * 1000) + (m * 60000) + (h * 3600000)
}

/* 

13. Test

*/