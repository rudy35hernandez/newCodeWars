
/*
July 7, 2021

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/


function squareSum(numbers){
    return numbers.map(num=> num ** 2).reduce((sum, num)=> sum + num)
  }
  
  /*


/*

July 7, 2021

Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],
[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra 
outcomes are just duplicates.

Test.assertEquals(solve([[1,2],[4],[5,6]]),4);
Test.assertEquals(solve([[1,2],[4,4],[5,6,6]]),4);
Test.assertEquals(solve([[1,2],[3,4],[5,6]]),8);
Test.assertEquals(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);

*/

  function uniqueArrays(arr){
      let unique = arr.map(num => [...new Set(num)].length)
      return unique.reduce((acc, num)=> acc*num)
  }

/*

July 9, 2021

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 


*/


function sumMix(x){
  return x.map(num => Number(num)).reduce((acc, num)=> acc+num)
}

  

/*

July

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


  /*

  July 12, 2021

  Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

*/

function noConsecutiveDuplicates(str){
    return str.split(' ').filter((word, index, arr) => word !== arr[index -1]).join(' ')
}

/*

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet


*/

function domainName(url){
    return url.replace('http://', '').replace('https://','').replace('www.','').split('.')[0]
  }

  //// Have yet to learn hashmaps, but apparently we will be using that to solve above challenge in a more advanced
  ///  way.


  /*

  Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

  */

function stringTransformer(str) {
    let wordsReversed = str.split(' ').reverse().join(' ')
    let reversed = wordsReversed.split('').map((word)=>{
      if(word == word.toLowerCase()){
        return word.toUpperCase()
      } else if(word == word.toUpperCase()){
        return word.toLowerCase()
      }
    })
    
    return reversed.join('')
  }

  // better solution, I had it, but I kept getting syntax errors in the ternary statement this way

  function stringTransformer(str) {
    return str.split(' ')
      .reverse().join(' ')
      .split('')
      .map(word => word == word.toLowerCase() ? word.toUpperCase() : word.toLowerCase())
      .join('')
}

/*

Count all the occurring characters in a string. If you have a string like aba, then the result should be 
{'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count (string) {  
  let wholeCount = {}
  let arrIt = string.toLowerCase().split('')
   arrIt.forEach(letter => {
     if(wholeCount[letter]){
    let total = wholeCount[letter]
    wholeCount[letter] = total + 1
       } else {
         wholeCount[letter] = 1
       }
     
   })
  return wholeCount
}


/*

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
Test.assertEquals(high('take me to semynak'), 'semynak'); 

*/

function getScore(str){
  
}