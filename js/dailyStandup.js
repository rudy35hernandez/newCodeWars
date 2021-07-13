
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(arr){
    let total = arr.reduce((acc, sum) => acc + sum,0)
    return total % 2 === 0 ? 'even' : 'odd'
  }
  
  console.log(oddOrEven([4, 1, 2])) /// odd
  console.log(oddOrEven([2, 4, 6])) /// even

/*

Create a function that takes in a string that will contain a mix of upper case and lower case letter. If
the string contains more upperCase letter than lowerCase, return the string in all upperCase. Same rule applies 
if there are more lowerCase letters. If there are an equal ammount of lowerCase and upperCase letters, return
the string in lowerCase letter.

*/

function lowerVsUpper(str){
    let upper = str.split('').filter(letter => letter === letter.toUpperCase())
    return str.length / 2 >= upper.length ? str.toLowerCase() : str.toUpperCase()
  }

  

/*

You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task 
will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every 
other number occurs twice.

Test.assertEquals(repeats([4,5,7,5,4,8]),15);
Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);

*/

function sumOfNonRepeats(arr){
    let nonRepeats = arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num))
    return nonRepeats.reduce((acc, sum) => acc+sum,0 )
  }