

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

13. You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]

*/

function monkeyCount(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
      arr.push(i);
      
    }
    return arr
  }


  /*

  14. A hero is on his way to the castle to complete his mission. However, he's been 
  told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be 
  defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given 
  number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

*/

function hero(bullets, dragons){
    return bullets >= dragons * 2 ? true : false
 }

 /*

 15. Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

SQL: return results in a column named greeting

[Make sure you type the exact thing I wrote or the program may not execute properly]

*/

function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }
 