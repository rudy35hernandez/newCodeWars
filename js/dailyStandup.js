
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



/*

July 9, 2021

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 


/*




  

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

  */