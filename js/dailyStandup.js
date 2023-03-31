
/*
July 7, 2021

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

const { number } = require("prop-types")


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

July 14, 2021

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

July 15, 2021

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

July 16, 2021

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

July 19, 2021

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
Test.assertEquals(high('take me to semynak'), 'semynak'); 

*/

function high(x){ ///////////////// GOT A TON OF HELP FROM INDIFFERENT
  let alphabet = " abcdefghijklmnopqrstuvwxyz"
  const wordScore = word => word.split('').reduce((a, letter) => a + alphabet.indexOf(letter), 0)
  let highestWord = ""
  let highestCount = 0
    x.split(' ').forEach(el => {
      const scoreCheck = wordScore(el)
     if(scoreCheck > highestCount){
       highestWord = el
       highestCount = scoreCheck
     }
    })
    return highestWord
    
      
  }

  /*

  July 20, 2021

  The goal of this exercise is to convert a string to a new string where each character in the new string 
  is "(" if that character appears only once in the original string, or ")" if that character appears more than 
  once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should 
encode XXX", the "XXX" is the expected result, not the input!

*/

function duplicateEncode(word){ /// solved myself!!!!!!!!!!!!!!!!!
  let arr = word.toLowerCase().split('')

    return arr.map(letter => arr.indexOf(letter) === arr.lastIndexOf(letter) ? '(' : ')')
    .join('')
}

/*

July 21, 2021

In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the 
first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

Test.assertDeepEquals(solve([15,11,10,7,12]),[15,7,12,10,11]);
Test.assertDeepEquals(solve([91,75,86,14,82]),[91,14,86,75,82]);
Test.assertDeepEquals(solve([84,79,76,61,78]),[84,61,79,76,78]);
Test.assertDeepEquals(solve([52,77,72,44,74,76,40]),[77,40,76,44,74,52,72]);
Test.assertDeepEquals(solve([1,6,9,4,3,7,8,2]),[9,1,8,2,7,3,6,4]);
Test.assertDeepEquals(solve([78,79,52,87,16,74,31,63,80]),[87,16,80,31,79,52,78,63,74]);

*/

Yet to solve this!!!


/*

July 22, 2021

Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of 
alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by 
'27', '28' and '29' respectively.

All inputs will be valid.

Test.assertEquals(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
Test.assertEquals(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
Test.assertEquals(switcher(['4', '24']), 'wc'); 

*/

function switcher(x){ /// got this solution on my own
  let alphabet = ' zyxwvutsrqponmlkjihgfedcba!? '
  return x.map((num, index, arr)=> alphabet[Number(num)]).join('')
}

/*

July 23, 2021

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character 
in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the 
given string.

All inputs will be valid.

Test.assertSimilar(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
Test.assertSimilar(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 
'volcano', 'up', 'what']); 
Test.assertSimilar(last('take me to semynak'), ['take', 'me', 'semynak', 'to']); 

*/


function sumDigits(number) {
  return number.toString()
    .replace('-',' ')
    .split('').map(num => Number(num))
    .reduce((acc,num)=> acc+num,0)
}


/*



Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

*/

function findSum(n) {
  let total = 0
  for(let i = 0; i <= n; i++){
    if(i % 3 == 0 || i % 5 == 0){
      total += i
    }
  }
  return total
}


/*

July 26, 2021

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns 
the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
    Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
    Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
    Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")



*/

function arrayDiff(a, b) {
  return a.filter(num => !b.includes(num))
}


/*

July 27, 2021

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even 
numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);

*/

function sortArray(array) {
  let odd = array.filter(num => num % 2 !== 0).sort((a,b) => a-b)
  return array.map(num => num % 2 ? odd.shift() : num)
  
  }

  /*

  July 28, 2021

  The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument 
  and return the two highest numbers within the array. The returned value should be an array in the format [second 
  oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there 
are two or more oldest age, then return both of them in array format.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]


*/

function twoOldestAges(ages){
  return ages.sort((a,b)=> a-b).slice(-2)
}


/*

July 29, 2021

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

var capitals = function (word) { /// forgot about the Number.isInteger method. Had to look it up
  return word.split('')
    .map((letter,index) => letter == letter.toUpperCase() ? index : letter)
    .filter(el => Number.isInteger(el))
}      


/*

July 30, 2021

You will be given an array of strings and your task is to remove all consecutive duplicate letters from each 
string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars',
'picaniny','hubububo']);
Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo',
'flodoromonlighters','chuchchi']);

*/

function dup(s) { // Needed a little bit of help. I KNEW what methods were needed to solve the problem but
  ///                I did not know that the entire solution needed to be wrapped up from the first map to end.
  ///                When it is not wrapped, it creates 3 different arrays, one for each word.
  return s.map(word => word.split('').filter((letter,i,arr)=> letter !== arr[i - 1]).join(''))
  }

  
/*

Aug 2, 2021

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining 
numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

Test.assertEquals(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

*/

function findDeletedNumber(arr, mixArr) { /// I did some playing around with this. Below is a much EASIER solution
  return Number(arr.filter(num => mixArr.indexOf(num) === -1).toString())
}

function findDeletedNumber(arr, mixArr) { ////////// This solution is SOOOOOO much easier. 
  let total1 = arr.reduce((acc, num) => acc + num,0)
  let total2 = mixArr.reduce((acc,num)=> acc + num,0)
  return total1 - total2
}

/*

Aug 3, 2021

Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, 
or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings 
sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.

*/

function dbSort(a){
  let numbers = a.filter(num => typeof num === "number").sort((a,b)=> a-b)
  let letters = a.filter(letter => typeof letter === "string").sort()
  return [...numbers, ...letters]  // you also use numbers.concat(letters)  (more common???)
}



/*

Aug 4, 2021

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the 
numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

function gimme (inputArray) { //// i got help by using the slice method to clone the original array
  let cloned = inputArray.slice(0)// I initially tried to just create a new variable and sort the org array, but this
  let middle = cloned.sort((a,b)=> a-b)[1] // changed the original array and sorted it as well
  return inputArray.indexOf(middle)
  
  }

  /*

Aug 5, 2021

Write a function that takes an array of strings as an argument and returns a sorted array containing the same 
strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide 
how to order multiple strings of the same length.

*/

function sortByLength (array) { /// did this on my own
  // Return an array containing the same strings, ordered from shortest to longest
  
  return array.sort((a,b)=> a.length - b.length)
};

  /*


Aug 6, 2021

Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you 
won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing:

*/

function absentVowel(x){
  let alpharr = ["a", "e", "i", "o", "u"]
  let stringarr = [...x]
  let missing = alpharr.filter((letter, index, arr) => stringarr.indexOf(letter) === -1 ).join('')
  return alpharr.indexOf(missing)
}

/*

Aug 7, 2021

Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each 
element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1

*/


function averageLength(the) { 
  let avg = Math.round(the.map(word => word.length).reduce((acc,num,index,arr) => (acc+num) ) / the.length)
  return the.map(word => word[0].repeat(avg))
}


/*

Aug 9, 2021

Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible 
by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out 
“Fizz Buzz”.

*/

function fizzBuzz(n){
  let output = []
  for(let i = 1; i <= n; i++){
    if(i % 2 === 0 && i % 3 === 0){
      output.push('fizzbuzz')
    } else if(i % 2 === 0){
      output.push('fizz')
    } else if(i % 3 === 0){
      output.push('buzz')
    } else {
      output.push(i)
    }
  }
  return output
}


/* 

Aug 10, 2021

Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse 
Method (well brute force it first, but then no reverse method)!

*/

let mystring = 'rudy'

function reverseIt(str){
  let arrStr = [...str]
  let empty = []
  for(let i = arrStr.length; i >= 0; i--){
    empty.push(arrStr[i])
  }
  return empty.join('')
}

// console.log(reverseIt(mystring))


/*

Aug 11, 2021

Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)

*/

function maxCharacter (str){
  let dictionary = {}
  for(let i = 0; i <= str.length; i++){
    if(dictionary[str[i]]){
      let count = dictionary[str[i]]
      dictionary[str[i]] = count + 1
  } else {
    dictionary[str[i]] = 1
  }
}
  let maxCount = 0;
  let maxCharacter = null;

  for (let letter in dictionary) {
    if (dictionary[letter] > maxCount) {
      maxCount = dictionary[letter];
      maxCharacter = letter;
    }
  }

  return maxCharacter;
}

console.log(maxCharacter("jammmmmmming"), "m")

/*

Aug 12, 2021

Given a string of words or phrases, count the number of vowels.

No Regex! Unless that is your brute force...

*/



function numOfVowels(word){
  let count = 0
  let vowels = "aeiou"
  for(let character of word.toLowerCase()){
    if(vowels.includes(character)){
      count++
    }
  }
  return count
}



/*

Aug 13, 2021

Given an array of items, reverse the order.

No reverse method! Unless that is your brute force first...

*/

function reverseArray(arr){
  let newArr = []
  for(let i = arr.length; i >= 0; i--){
    newArr.push(arr[i])
  }
  return newArr.slice(1)
}

// the class solution

function reverseArr(arr){
  for(let i = 0; i < arr.length / 2; i++){
    const temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }
  return arr
}


/*

Aug 16 2021

Given a phrase, reverse the order of the characters of each word.

describe("Reverse Words", () => {
 it("Should reverse words", () => {
  assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
 });
});

No Reverse Method! Unless that is your brute force...

*/


let phrase = "hello everyone i am rudy"

function reverseWords(str){
 return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

// console.log(reverseWords(phrase))


function reverseWLoop(str){ /// class solution
  let revArr = [] /// creating an array to put the words in
  str.split(' ').forEach(word => { /// splitting the words into array and doing a foreach to run loop for all words
    let reversedWord = '' /// creating a blank var to push all words backwords
    for(let i = word.length - 1; i >= 0; i--){ /// run a loop on all words backwords. 
      reversedWord += word[i] /// Add each letter to reverseWord
    }
    revArr.push(reversedWord)  //// push each word in empty revArr. Its still in the for loop so it's adding every
  })                           //// word, not just one
  return revArr.join(' ')      //// to this point, we have an array of all words needed, we just join them here
}

console.log(reverseWLoop(phrase))


/*

Aug 17, 2021

Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note 
from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });

it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint in in", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
 });
});


*/

function ransomNote(str, note){
  let hash = {}
  note.split(' ').forEach(word => {
    if(hash[word]){
      let count = hash[word]
      hash[word] = count + 1
    } else{
      hash[word] = 1
    }
  }) //////////// I did up to this point, had help below
  const splitStr = str.split(' ')
  let possible = true
  
  splitStr.forEach(word => {
    if(hash[word]){
      hash[word]--;
      if(hash[word] < 0) possible = false;
    } else possible = false
  })
  return possible
}

/*

Aug 18, 2021

Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
});

*/

function twoSum(array, sum){
  const pairs = [];
  const store = {}

  for (let part1 of array) {
    const part2 = sum - part1;
    // if (store.indexOf(part2) !== -1){
    //    pairs.push([part1, part2]);
    // }
    if(!store[part2]){
      store[part1] = 1
    }else{
      pairs.push([part1,part2])
    }
  }
  return pairs;
};


/*

Aug 19, 2021 

You are given an array of prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the 
future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5

Input: prices = [7,6,4,3,1]
Output: 0

*/

function maxProfits(arr){
  let min = Number.POSITIVE_INFINITY; /// This creates the greatest number the memory can hold
  let max = 0  ///// we are setting the max number at 0 to be able to increase it while iterating

  for(let i = 0; i <= arr.length; i++){ /// your normal for loop
    if(arr[i] < min){ //// here we are checking if the current number is less than min (first one will always be)
      min = arr[i] /// min now becomes the first number in the array. It continues to be the min until a smaller 
                  //// number is reached
    } else if(arr[i] - min > max){ /// here, if the number the loop is at minus min is greater than max, 
                                /// then max becomes that number minus min
      max = arr[i] - min 
    }
  }
  return max
}

/* Here we will break down everything
arr = [9, 1, 4, 7, 5] 
Step 1: 9 becomes the new min automatically. 
Step 2: Next, 1 is less than min (9), so it becomes the new min. 
Step 3: Next num, 4 is greater than min (1) so we go to the else if statement. 4 - min (1) is greater than max (0)
        so 4 - 1 becomes the new max(3).
Step 4: 7 is greater than min so we skip to else if. 7 - min (1) is 6 which is greater than max(3), so max becomes
        6. 
Step 5: Last number, 5, is greater than min so we skip to else if. 5 - min(1) is 4, not greater than max(6), so we
        move on. Since it is the last number in the array, max remains 6 which is our answer.

*/


/* 

Aug 20, 2021

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element 
always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

function majElement(arr){
  let hash = {} //// to keep track of all nums and its occurences
  let count = 0; /// starting the count at 0
  let majVal = arr[0] 
  
  for(let i = 0; i < arr.length; i++){ /// looping through the arr
    if(!hash[arr[i]]){ /// when running the loop, if it doesnt appear more than once, it sets it to 1.
      hash[arr[i]] = 1
    } else{
      hash[arr[i]]++  /// if it appears more than once, then here we increment the count each time.
    }
  }
   for(const nums in hash){ /// here im just looping the key values, we can call them anything, but it's in reference
                            //// to the hash object we created, it's looping through the numbers
     if(hash[nums] > count){ //// conditional, if the key value is more than count (0, at the moment)
       count = hash[nums]; /// count now becomes the first number it loops, until it reaches the one with highest
                          /// value
       majVal = nums
     }
   }
   return majVal
 }

 //// SINCE WE KNOW IT APPEARS MORE THAN n/2 OF THE TIME, HERE IS A MUCH EASIER SOLUTION. BUT OOOONLY IF THE 
 //CHALLENGE STATES THAT IT APPEARS MORE THAN n/2 OF THE TIME

 function maxOccurence(arr){
   let nums = arr.sort()
   return nums[Math.floor(nums.length/2)]
 }


/*

Aug 23, 2021

Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0

*/

function goodPairs(arr){
  const hashmap = {}
  let count = 0
  
  for(const num of arr){
    if(hashmap[num]){
      count += hashmap[num]
      hashmap[num] += 1
    } else {
      hashmap[num] = 1
    }
  }
  return count
}


/* 

Aug 24, 2021

Given an integer array nums, return true if any value appears at least twice in the array, and return false if 
every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

function multiplesPresent(arr){
  let newOne = [...new Set(arr)] /// this is creating a new array with unique numbers
  if(newOne.length !== arr.length){ /// here we have an if statement to compare lengths of arrays. If equal,
                                    /// there are no multiples. If unequal, that means there were multiples
    return true
  } else {
    return false
  }
}


function multiplesPresent(arr){
  let hashmap = {} /// making a hashmap
  let count = 0 /// starting count at 0, incrementing it when duplicates found
  
  for(let i = 0; i < arr.length; i++){ //// looping through arr
    if(hashmap[arr[i]]){
      count = hashmap[arr[i]]
      hashmap[arr[i]] = count + 1
    } else {
      hashmap[arr[i]] = 1
    }
  }
  for(const [key, value] of Object.entries(hashmap)){
    return (key, value) > 1 
  }
}


/*

Aug 25, 2021

you're given strings jewels representing the types of stones that are jewels, and stones representing the stones 
you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have 
are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.

*/

function getStones(str, str2){
  let count = 0 /// create a count for it
  for(let letter of str2){ // we are looping through str 2, letter is like i in a for loop
    if(str1.includes(letter)){ /// checking each letter, if it is a letter included in str1, it ups the count
      count++ //// incrementing the count with each
    }
  }
  return count
}

/// running it as a regular for loop

function checkStones(str1, str2){
  let count = 0
  for(let i = 0; i <= str2.length; i++){
    if(str1.includes(str2[i])){
      count++
    }
  }
  return count
}

/*

Aug 27, 2021

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number
is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3

*/

function fibonacci(num){  
  let arr = [0,1] /// we start off with array 0 and 1 already created, because this will only return 0 and 1
  for(let i = 2; i <= num; i++){ /// here, we start the conditional of i being 2, and if the num is less or equal 
                                 /// to 2, we run the code on the next line, if not, we skip and run the last command
  arr[i] = arr[i - 1] + arr[i - 2] //// here if conditional is met, lets say num is 2, we would get back 1 b/c
                                  /// arr[2] = arr[]
  }                  
  return arr[num]
}



/*

Aug 31,2021

Same problem as the last daily standup, which was the fibonacci algorithm. Only this time, we want it
solved in with the recursion method

*/

function fibonacci1(num){
  if(num <= 2){
    return 1
  } else {
    return fibonacci1(num - 2) + fibonacci1(num - 1)
  }
}

console.log(fibonacci1(4))


/* 

Sep 1, 2021

Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers 
less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

#Your task

You have to create the function factorial that receives n and returns n!. You have to use recursion.

*/

/// Just for practice, i solved it the brute force way to see if I was still fresh with my methods

function factMult(num){
  let count = 1
  if(num == 0){
    return 0
  } else {
    for(let i = 1; i <= num; i++){
      count *= i
    }
  }
  return count
}

/// This is the recursion method, which I am still having a little trouble understanding

function factorialRecursion(num){
  return num < 2 ? 1 : num * factorialRecursion(num - 1)
}

/// explanation?  lets say the number is 5

/* 
5 is greater than 2, so we skip the first conditional and jump to the next 

5 * factorialRecursion(5 - 1) = 20 (count is now 20)

20 * factorialRecursion(4 - 1) = 60 (count is now 60)

60 * factorialRecursion(3 - 1) = 120 (count is 120)

120 * factorialRecursion(2-1) = 120 

*/


/*

Sep 2, 2021

Factorial

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

Test.assertEquals(mygcd(30,12),6)
Test.assertEquals(mygcd(8,9),1)
Test.assertEquals(mygcd(1,1),1)

*/


////////// Find the greatest common denominator between both numbers in the parameters.
////////// Must use recursion for this solution



function great(x,y){  /// This was all Leon, but he explained how it was done

  return y === 0 ? x : great(y, x % y) //// here, we have a conditional, return x if y = 0.
              /// the way it works, in this recursion case, we flip the numbers, y goes in the place of
              /// x, and y becomes x % y.
              /// lets run 30, 12 for Ex.   great(12, 30 % 12) 

              ///                                 x   y      
              ///                 becomes   great(12, 6)

              /// we run it again       return y === 0 ? x : great(6, 12 % 6 )            

              ///                                 x  y
              ///                 becomes   great(6, 0)     //// since we've reach y === 0, we return x(6)
  
}


/*

Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.

An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the 
first person in line is also the first one who gets out. 

Waiting Lines

In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue 
constructor we are creating, so we should be able to create new instances of the Queue.

The enqueue method takes in the item as a parameter, while the dequeue method does not.
The size method simply returns the number of items in the queue.

Wait, what?
To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
To dequeue an item means means to remove the item at the front, or head, of the queue.
In a queue, we remove the item the least recently added.
JavaScript Methodology
Queues can be implemented in JavaScript using arrays.

You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

As long as the tests pass, go for it!


*/

class Queue{ //// this is a FIFO method .
  constructor(){
    this.queue = [] /// we create our empty array for our currently empty queue
  }

  enqueue(el){    ///// This method here pushes (to the back) something to the queue, in the case, el
    this.queue.push(el)
  }

  dequeue(){  //// This method in our class, shifts out the first item in the array (FIFO)
    return this.queue.shift()
  }

  size(){   //// This method gives you the length, or count of how many are in the queue
    return this.queue.length
  }
}

let q1 = new Queue()  //// q1 is the name of our queue


/* 

10/6/2021

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.


*/
/// create a new string, add one by one with a for loop
/// create an empty variable to add on to it as it loops
/// since all string in parameters are equal in length, i can just use one for the for loop
/// return the variable that WAS empty after loop completes
function tripleTrouble(one, two, three){
  let newString = ""
  for(let i = 0; i < one.length; i++){
    newString += one[i] + two[i] + three[i]
  }
  return newString
 }


/*

10/7/2021

Create a function that takes in a word and returns the word with the first letter capitalized.

Don't worry about numbers, special characters, or non-string types being passed to the function. The string 
lengths will be from 1 character up to 10 characters, but will never be empty.

*/

/// return the word with first letter capitalized
/// we can create a variable that takes the first letter only and capitalizes it
/// we can then return that variable plus the string sliced at 1.

function capitalizeWord(word) {
  let capital = word[0].toUpperCase();
   return capital + word.slice(1)
 }



 /*

 10/8/2021

 create a function that removes the first and last characters of a string. You're given one parameter, the 
 original string. You don't have to worry with strings with less than two characters.

Ex.
'eloquent' => 'loquen'
'country' => 'ountr'

*/

function removeChar(str){
  return str.slice(1, str.length-1)
};


/*

10/12/2021

Repeat question to warm up!
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

*/

function sumMix(x){        // Number goes here, or else it would add it as a string instead of number
  return x.reduce((sum, num) => Number(num) + sum,0)
}

/*

10/13/2021

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the 
students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)

*/

// Our parameter will take in an array of numbers
// Since we know we need to get the average, we need to add up all numbers and divide by the amount of numbers
// first, we will add up all of the numbers with the map.reduce method.
// after adding up all of the numbers, we need to divide it by the array.length
// after getting the total, we can add the Math.floor method to round down to the nearest integer

function getAverage(marks){
  return Math.floor(marks.reduce((sum, num) => num + sum,0) / marks.length)
}

/*

10/14/2021

You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task 
will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every 
other number occurs twice.

repeats([4,5,7,5,4,8]),15)
repeats([9, 10, 19, 13, 19, 13]),19)
repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
repeats([5, 10, 19, 13, 10, 13]),24)

*/

// So, we know that our parameter will take in an array of numbers
// First thing we want to do is get rid of all of the numbers that occur more than once. We'll use filter for this.
// To remove all repeats, a simple way is to use the indexOf and lastIndexOf arr method. We compare

function nonRepeatsSum(arr){
  arr.filter((num, index, array) => array.indexOf(num) === array.lastIndexOf(num))
     .reduce((sum, num) => sum + num,0)
}

/// Lets add a second solution with for loops
// first, lets set up a tracker that we will use to add the unique numbers, well call it count
// lets loop through the arr with for loop
// we will again use the indexOf and lastIndexOf method to only pass through the unique numbers
// after each loop, we will start adding the total to count
// last, we will return count

function nonRepeatsSumLoop(arr){
  let count = 0
  for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
      count += arr[i]
    }
  }
  return count
}

/*

10/15/2021

Given an array of digital numbers, return a new array of length number containing the last even numbers from 
the original array (in the same order). The original array will be not empty and will contain at least "number" 
even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
GO!
*/

// We are creating a function with two parameters, an arr, and a number.
// The number will be the length of the new array we are creating. 
// We have to loop through the arr and find all even numbers
// we can then use slice with the arr.length - the 2nd parameter?

function evenNumbers(arr, num){
  let evenArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      evenArr.push(arr[i])
    }
  }
  return evenArr.slice(evenArr.length - num)
}

/// another way using array methods only

function evenNumber2(arr,num){
  return arr.filter(num => num % 2 == 0).slice(-number)
}


/*

Oct 18, 2021

Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are 
[1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra 
outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)


*/

// Test case [[1, 2], [4, 4], [5, 6, 6]] // should return 4

// This one is knowing a bit about math to get total possibilities
// First, we want create a new array and subarrays with no duplicates inside the subarrays
//

function possibilites(arr){
  ///     This removes all duplicates from the subarrays. arr becomes [[1,2], [4], [5, 6]]
  ///     We the add the length method at the end to get length of each subarr
  ///     unique now is [2, 1, 2]
  let unique = arr.map(num => [...new Set(num)].length);
  ///     Now we just multiply all numbers together to get the total possibilities
  return unique.reduce((acc,num)=> acc * num,1) 
}


/*

Oct 19, 2021 challenge

Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

nthSmallest({3,1,2} ,2) ==> return (2) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)

*/

// We want to make a function that takes two parameters, an array, and a number.
// The array needs to be sorted to be able to choose by index
// since arrays start at zero, the number in our argument needs to be subtracted by one

function nthSmallestNum(arr, num){
  // first lets sort the array and store it in a new variable
  let sortedArr = arr.sort((a,b) => a-b)
  return sortedArr[num-1]
}

/// we can even make this shorter

function nthSmallestNum2(arr,num){
  return arr.sort((a,b)=> a-b)[num-1]
}

/*

Oct 20, 2021

The goal of this exercise is to convert a string to a new string where each character in the new string is 
"(" if that character appears only once in the original string, or ")" if that character appears more than once 
in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

// 1. First, the challenge tells us to ignore case for letters, so lets change the entire string to lower case
// 2. Also, we need to change it to an array to target each individual letter with map method
// 3. Now that we have an arr of letters, we will map through it and check to see if a letter appears more than once,
// we will use the indexOf to see if it equals lastIndexOf
// 4. Once we return our new characters, we need to convert the array back to a string, we'll use join method.


function duplicateEncode(word){
  let lowerWord = word.toLowerCase().split('')
  let newArr = []
  lowerWord.forEach((letter, index, arr) => {
    if(arr.indexOf(letter) === arr.lastIndexOf(letter)){
      return newArr.push('(')
    } else {
      return newArr.push(')')
    }
  })
  return newArr.join('')
}

// Shorter answer 

function duplicateEncode2(word){
  return word.toLowerCase().split("")
  .map((letter, index, arr) => arr.indexOf(letter) === arr.lastIndexOf(letter) ? "(" : ")")
  .join('')
}

// ONE more solution using a tree, then mapping based on whether key value is greater than 1

function duplicateEncode3(word){
  let wordArr = word.toLowerCase().split('')
  let tree = {}
  wordArr.forEach(letter => {
    if(tree[letter]){
      let count = 0;
      tree[letter] += count + 1;
    } else {
      tree[letter] = 1
    }
  })
  let newStr = wordArr.map(function (letter) {
    return tree[letter] > 1 ? ")" : "("
  }).join('')
  return newStr
}

/*

Oct 24, 2021

Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

*/

/// first lets set up a function 

function reverseCase(str){
  // first, lets reverse the word order
  let reverseStr = str.split(' ').reverse().join(' ');
  /// first, lets split the string letter by letter in array to use array methods
  return reverseStr.split('')
  /// with map, we will target every single letter, and we'll turn L-case to U-case and U-case to L-case
  .map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase())
  /// lastly, we'll join the letters back to return it to a string
  .join('')
}

/// lets create test cases

console.log(reverseCase("sTRING Example"), "eXAMPLE String")
console.log(reverseCase("Yes mAN"), "Man yES")

/*

Oct 26, 2021

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final 
character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in 
the given string.

All inputs will be valid.

last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak'), ['take', 'me', 'semynak', 'to']

*/

/// first, we need to declare our function and use a str as a parameter

function sortByLast(str){
  /// we need to make sure we split the str (sentence) into an array with an element for each word. Let's use split method
  let strArr = str.split(' ');
  /// Now that we have an array of words, we need to target the last character for each word. We cant reverse 
  /// then sort because then it will sort it completely and not just by last letter and position. Let's use 
  /// charCodeAt method
  strArr.sort((a,b) => {
    let sortedArr = a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
    /// we return the sorted by last letter array.
    return sortedArr
  })
}


/*

Oct 27, 2021

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining 
numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

*/

/// First, lets add up both arrays by using reduce methods and assign them each to a variable name
/// After we have the total of each, we can run a conditional to see if an arr is empty, if it is, just return 0
/// If it isnt, we will get the missing number by subtracting the first reduced arr by the second

function findMissingNum(sortedArr, mixedArr){

  /// first, lets set up a conditional to return 0 if the array is empty
  if(!sortedArr.length){
    return 0
  } else {
    let sortedTotal = arr.reduce((sum, num) => sum + num,0)
    let mixedTotal = arr.reduce((sum, num) => sum + num,0)

    return sortedTotal - mixedTotal
    
  }
}

/*

Oct 28, 2021

Implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

*/

// First, we need to create a function that will delete all occurrences of numbers in array a that are in arr b
// We know we want to return an array with no b elements in a, so Filter would be a good method
// The best option for comparing likeness for two arrays would be to use indexAt(elem) === -1 (this will check if an element does NOT exist)

/// lets set up our function declaration

function subtractArr(a, b){
  return a.map(num => b.indexAt(num));
}


console.log(subtractArr([1,2], [1]), [2]);
console.log(subtractArr([2,2,1,4], [2]), [1, 4]);
console.log(subtractArr([5,5,1,1,2], [5,1]), [2]);


/*

Oct 30, 2021

You need to create a function that when provided with a triplet, returns the index of the numerical element 
that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

/// First thing we need to do is sort the array to be able to grab the middle index. 
/// We don't want to mutate the original array, so lets clone it, using slice.
/// After we clone it, we'll create one more variable to grab the middle number.
/// Now that we have the middle number in a variable, we can return the answer by 
/// calling on the org array, with indexOf(middle)

function middleIndex(arr){
  let clone = arr.slice(0)
  let middle = clone.sort((a,b)=> a-b)[1]
  return arr.indexOf(middle)
}


/// test cases
console.log(middleIndex([4, 6, 7]), 0) /// 4 is the middle number, so index is 0
console.log(middleIndex([1, 4, 7]), 1)
console.log(middleIndex([3, 9, 6]), 2)


/*

Nov 2, 2021

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even 
numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

*/

function sortTheOdds(arr){
  let odds = arr.filter(num => num % 2 !== 0).sort((a,b) => a-b)
  return arr.map(num => num % 2 !== 0 ? odds.shift() : num)
}

/// test cases

console.log(sortTheOdds([4, 2, 3, 1, 6, 9]), [4, 2, 1, 3, 6, 9])
console.log(sortTheOdds([7, 1]), [1, 7])
console.log(sortTheOdds([5, 1, 3, 6, 9, 2, 7]), [1, 3, 5, 6, 7, 2, 9])


/*

Nov 3, 2021

Given an array of strings of the same letter type. Return a new array, which will differ in that the length of 
each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1

*/

/// edge cases to ask for - Can numbers be in the array? Can there be null? Does case matter for characters?
/// Now that we get all edge cases out of the way, we need to get the length of all characters. We also need to use math round for non integers
/// After we get the length of all characters, we need to divide the length by the array length and assign it to a variable.
/// Now that we have a variable that holds the average, we can use the repeat method after grabbing the first char in an element

function avgLengthArr(arr){
  let avg = Math.round(arr.join('').length / arr.length)
  return arr.map(letters => letters[0].repeat(avg))
}

console.log(averageLength(['u', 'y']), ['u', 'y'])
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc'])
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee'])


/*

Nov 4, 2021

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For 
example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

*/

function removeConsecutiveDuplicates(str){
  let strArr = str.split(' ')
  let newArr = []
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i] !== strArr[i - 1]){
      newArr.push(strArr[i])
    }
  }
  return newArr.join(' ')
}

console.log(removeConsecutiveDuplicates("hello hello"), "hello")
console.log(removeConsecutiveDuplicates("hello to hello hello to") "hello to hello to")
console.log(removeConsecutiveDuplicates("the the best was was the was"), "the best was the was")


/*

Nov 8, 2021

You will be given an array of strings and your task is to remove all consecutive duplicate letters from each 
string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
dup(["kelless","keenness"]), ['keles','kenes'])

*/

// first, we need to join the arrays together to create one big string, but we'll separate them with a space in the join method
// next, we need to create a variable that will be empty, this is where we will push our new string which will not contain duplicates
// we then run a for loop, this will only pass through letters that did not appear right before that letter
// we will add these letters to the empty string, and in the end, lets split them again to create the array once again.

function remPrevDupl(arr){
  let joinedArr = arr.join(' ');
  let newStr = ""
  for(let i = 0; i < joinedArr.length; i++){
    if(joinedArr[i] !== joinedArr[i - 1]){
      newStr += joinedArr[i]
    }
  }
  return newStr.split(' ')
}


/* 

Nov 10, 2021

This is the palindrome algorithm, but unlike past challenges, this one can only have letters and numbers. Lower/
upper case should be ignored.
All punctuation and symbols should be ignored also.

*/

function palindromeUpdated(str){
  /// first let split the str to create an arr and make it all lower case since upper/lower is ignored
  let strArr = str.toLowerCase().split('')
  // next we create a variable that contains all ALLOWED str characters to be evaluated, those not in here will be ommitted
  let alphabet = 'abcdefghijklmnopqrstuvwxyz123456789'
  /// next we create a new variable that will contain the filtered string
  let newStr = strArr.filter(char => alphabet.includes(char)).join
  /// now we compare 
  return newStr === newStr.split('').reverse().join('')
}

console.log(palindromeUpdated("race car."), true)
console.log(palindromeUpdated("1 eye for of 1 eye."), false)


/* 

Nov 12, 2021

Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowles but one. 
Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

*/

/// first lets create the function and add some test cases
/// Next we create a variable that will hold all vowels in the indexes needed for the test
/// Next we'll run a loop for each letter in vowels, and test it against the str to see if it does NOT exist,
/// then we join it.
function missingVowelIndex(str){
  let vowels = "aeiou";
  const missing = vowels.filter(letter => str.indexOf(letter) === -1).join()
  return vowels.indexOf(missing)

}

console.log(missingVowelIndex("ll I do is hve fun"), 0)
console.log(missingVowelIndex("I love to have fn in the sn"), 4)


/*

Create a function that takes in a string as one parameter, and a number as a second parameter.
With this function, return the entire string if the length of the string is less than or equal to the number
in the second parameter. If the string is longer, return the str with the length up to the number in the parameter
followed by "..."

*/
// this is a O(n) solution, we can slice it instead a to make it a o(1)
function shortenStr(str, num){
  if(str.length <= num){
    return str
  } else {

  }
  return str.split('').filter((letter, index, arr)=>index <= num-1).join('') + "..."
}

console.log(shortenStr("Hello everyone", 5) "Hello...")
console.log(shortenStr("Way to go team!", 30) "Way to go team!")

// O(1) solution

function shortenStr(str,num){
  if(str.length <= num){
    return str
  } else {
    return str.slice(0,num) + "..."
  }
}


/*

nov 15, 2021

Given a number as an input, print out every integer from 1 to that number. However, when 
the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s 
divisible by both 2 and 3, print out “Fizz Buzz”.

*/


function fizzAgain(num){
  for(let i = 1; i <= num; i++){
    if(i % 2 === 0 & i % 3 === 0){
      console.log("fizzbuzz")
    } else if(i % 2 === 0){
      console.log("fizz")
    } else if(i % 3 === 0){
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}

console.log(fizzAgain(6))


/* 

Nov 16 2021

Count all the occurring characters in a string. If you have a string like aba, then the result should be
 {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

/// Ask if numbers should be counted, ask if punctuation should be counted.
/// Ask if the string will contain anything other than letters
/// Ask if upper case and lower case matters
/// etc

function getOccurance(str){
  /// creating our object to keep count
  let hash = {};
  /// we're going to loop str
  for(let val of str){
    hash[val] = (hash[val] || 0) + 1
  }
  return hash
}

/*
Nov 17, 2021

Given a string of characters as input, write a function that returns it with the characters reversed. 
No Reverse Method (well brute force it first, but then no reverse method)! 

*/

function reverseStr(str){
  let newStr = ""
  for(let val of str){
    newStr = val + newStr
  }
  return newStr
}

//// solved using regulare for loop
function reverseStr2(str){
  let newStr = '';
  for(let i = str.length - 1; i >= 0; i--){
    newStr += str[i]
  }
  return newStr
}


/*

Nov 18, 2021

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones 
you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have 
are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.

*/

/// So first thing I want to do is turn both parameters into arrays
/// After creating arrays, a neat trick is to use the filter method with the include method inside
/// At the end, we add .length to the end to get the total number of jewels

function numOfJewels(jewels, stones){
  /// first lets create the arrays
  let jewelsArr = jewels.split('');
  let stonesArr = stones.split('');

  /// Now lets use our filter method

  return stonesArr.filter(stone => jewelsArr.includes(stone)).length
}


/* There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get 
into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are 
probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return 
integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

/// First, we need figure out how to map through all arrays to return the total between index 0 minus index 1
/// To do this, we need to run a map method through all the arrays, and within the map, we can run a reduce method
/// After we reduce each array, we have to reduce one more time to get the totals from each array.
/// Example, [1, 3], [9, 2], [4, 5]
///            [-2],   [7],   [-1]
///                     4

function numbers(arr){
  /// since we know there are only two numbers per array, we can target index 0 - index 1 specifically
  let totals = arr.map(numbers => numbers.reduce((acc, num, index, arr) => arr[0] - arr[1]))
  /// now that we have to totals from each array in one array, we will sum them all up with reduce once again
  return totals.reduce((sum, number)=> sum + number,0)
}






console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17)


/*

Nov 19, 2021

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one 
contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for 
each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string 
(in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

*/

/// Since I know we have to compare both arrays, I will create a for loop to run through every index
/// Along with a for loop, I also want to create a variable called score which keeps count of the students score
/// After running the for loop, I need to create 3 conditionals, first, if the answer is empty, do not change score
/// Second conditional, if the answer is correct, I add 4 points to the score
/// Last conditional, if the answer is incorrect, subtract a point

/// The last part of the algorithm will check if the score is less than 0, if it is, it will return 0, if its 
/// greater, it will return the score

function checkExam(array1, array2) {
  let score = 0;
  for(let i = 0; i < array2.length; i++){
    if(array2[i] === ""){
      score += 0;
    } else if(array2[i] === array1[i]){
      score += 4;
    } else {
      score += -1
    }
  }
  return score < 0 ? 0 : score
 }


 console.log(checkExam(["a", "b", "d", "b"],["a", "b", "d", "b"]))
 console.log(checkExam(["a", "b", "d", "b"],["a", "b", "", "b"]))
 console.log(checkExam(["a", "b", "d", "b"],["b", "b", "c", "b"]))


 /*

 My grandfather always predicted how old people would get, and right before he passed away he revealed 
 his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens 
to you.

*/

/// First thing I want to do is create an arr out of the parameters to easily target each number
/// I will then run a map method to square each number, after squaring each number, i will use the reduce method
/// to get the total
/// After getting the total, I will grab the square root with the Math.sqrt method
/// Once square rooted, i will divide the number by 2, and then use the Math.floor method to round down

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1,age2,age3,age4,age5,age6,age7,age8];
  let total = arr.map(num => num ** 2).reduce((sum, num) => sum + num)
  return Math.floor(Math.sqrt(total) / 2)
}

console.log(predictAge(65,60,75,55,60,63,64,45), 86);


/*

Nov 22, 2021

Your task is to write function factorial.

Directions: Write a function that takes in a number as a parameter. The function takes the number and 
multiplies every number before it up to the point you reach the number.
For example, if the number passed in is 2- 1*1*2
                                        5- 1*1*2*3*4*5

*/

/// For this function, I want to add a variable that will keep the sum after each loop.
/// I will use a for loop for this and multiply each number the accumalated sum. The loop must start at 1 
/// or else it will just return 0

function factorial(n){
  let sum = 1;
  for(let i = 1; i <= n; i++){
    sum *= i;
  }
  return sum
}

console.log(factorial(1), 1);
console.log(factorial(3), 6);
console.log(factorial(7), 5040)


/// So apparently i did it wrong, i was not supposed to use a for loop, a factorial is a solution where 
/// the functions parameter is changed each time it runs until it reaches its goal

function factorial2(n){
  return n ? n * factorial2(n - 1): 1
}


/*
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an 
argument. This function must return another function, which takes a single integer as an argument and returns a new 
array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.

Here's a nice Youtube video about currying, which might help you if this is new to you.

*/

// I did some research about currying and it's a function that takes a parameter, and returns another function
// with the next parameter, and another function with the next parameter, and so forth

let multiplyAll = 
  arr => 
    multiplyBy => 
      arr.map(num => num * multiplyBy)

// console.log(multiplyAll([4, 2, 1])(3), [12, 6, 3])
// console.log(multiplyAll([2, 7, 4])(7), [14, 49, 28])
// console.log(multiplyAll([6, 9, 10])(2), [12, 18, 20])


/* 

Nov 24, 2021

Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high 
and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the 
left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's 
fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

*/

/// First I want to create a string for left and right, and the index + 1 will reflect the points of each
/// I want to run a for loop that will go through each letter
/// In the loop, I want to create a conditional that will push the letter into the correct array, one array
/// for the right side, and one array for the left side. 
/// Once I have all letters in their correct spaces, I will run a map function that will return each letter
/// by the points it represents. Then I will run a reduce method that will return the total points of each array
/// LASTLY, I will finish it off with a ternary that will return the correct result of the match

function alphabetWar(fight){

  function alphabetWar(fight){
    let left = "0sbpw"
    let right = "0zdqm"
    
    let leftArr = [];
     let rightArr = [];
    
    for(let i = 0; i < fight.length; i++){
      if(fight[i] == "s" || fight[i] === "b" || fight[i] == "p" || fight[i] == "w"){
        leftArr.push(fight[i])
      } else if(fight[i] === "z" || fight[i] == "d" || fight[i] === "q" || fight[i] === "m") {
        rightArr.push(fight[i])
      }
    }
     
     let rightTotal;
     let leftTotal
     
       if(rightArr.length === 0){
       rightTotal = 0
   }  else {
        rightTotal = rightArr.map(letter => right.indexOf(letter)).reduce((sum, num) => sum + num)
     }
   //   return rightTotal
       if(leftArr.length === 0){
       leftTotal = 0
       } else{
       leftTotal = leftArr.map(letter => left.indexOf(letter)).reduce((sum, num) => sum + num)
       }
     
     return rightTotal > leftTotal ? "Right side wins!" : leftTotal > rightTotal ? "Left side wins!" : "Let's fight again!"
    
   }

}

console.log(alphabetWar("z") , "Right side wins!" );
console.log(alphabetWar("zdqmwpbs") , "Let's fight again!" );
console.log(alphabetWar("zzzzs"), "Right side wins!" );
console.log(alphabetWar("wwwwww"), "Left side wins!" );


/* 

Nov 25, 2021

A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, 
subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a 
number known to be divisible by 7 is obtained; you can stop when this number has at most 2 digits because 
you are supposed to know if a number of at most 2 digits is divisible by 7 or not.

The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible 
by 7.

Examples:
1 - m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; thus, since 35 is divisible by 7, 371 is divisible by 7.

The number of steps to get the result is 1.

2 - m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7 and 7 is divisible by 7.

3 - m = 372 -> 37 − (2×2) -> 37 − 4 = 33 ; thus, since 33 is not divisible by 7, 372 is not divisible by 7.

4 - m = 477557101->47755708->4775554->477547->47740->4774->469->28 and 28 is divisible by 7, so is 477557101. 
The number of steps is 7.

Task:
Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) 
of numbers, the first being the last number m with at most 2 digits obtained by your function (this last m will 
  be divisible or not by 7), the second one being the number of steps to get the result.

Forth Note:
Return on the stack number-of-steps, last-number-m-with-at-most-2-digits

Examples:
seven(371) should return [35, 1]
seven(1603) should return [7, 2]
seven(477557101) should return [28, 7]

*/ 

/// This one was tough, I had to get help online for the solution

function seven(m){
  let count = 0;
  while(m > 99){
    m = parseInt(m/10) - (2 * (m % 10));
    count++
  }
  return [m, count]
}

console.log(seven(1021), [10, 2])
console.log(seven(1603), [7, 2])
console.log(seven(371), [35, 1])
console.log(seven(483), [42, 1])


/*

Nov 26, 2021

Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:

[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

Note: You will be always given non-empty array containing Positive values.


*/

/// First thing I want to do is sort each array to move the lowest number to index 0
/// After sorting the array, I want to run another map method to bring back 3 arrays still, but only index 0 
/// for each array. 
/// Once we have mapped and returned index 0 in each array, we want to run a reduce method to return the sum of 
/// of the first index (lowest integer) of each array

function sumOfMinimums(arr){
  let sorted = arr.map(array => array.sort((a,b) => a-b));
  return sorted.map(array => array[0]).reduce((sum, num) => sum + num)
}




console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9);
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)



/*

Nov 27, 2021




/*

Nov 29, 2021

Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 

*/

//// First thing I want to do is create a hash map to keep a count of each letter that appears in the string
/// After creating the hash, wee will run a for in loop for the string to get the count
/// After that we want to run a for of loop for the hash map, and in the hash map, I will keep count of the letter
/// that appears the most by creating a maxChar variable and a count variable. the highest count will equal 
/// the maxChar and it will return it
function maxCharacter2(str){
let hash = {}
for(const val of str){
  hash[val] = (hash[val] || 0) + 1
}
  let count = 0;
  let maxChar;

  for(let char in hash){
    if(hash[char] > count){
      count = hash[char];
      maxChar = char
    }
  }
  return maxChar
}

console.log(maxCharacter("hello"), "l")
console.log(maxCharacter("mississipi"), "s")
console.log(maxCharacter("javascript"), "a")


/*

Nov 30, 2021

Given an integer array nums, return true if any value appears at least twice in the array, and return false if 
every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

/// First thing I want to do is create a hash map to list each items occurance
/// After I create the empty object for hash, I want to run a for of loop to get the occurance of each integer
/// Once my hash is created, I want to create a variable called multiple with a value of false. 
/// Then, I want to run a for in loop, with the conditional to check if any value is greater than one. If there 
/// are values greater than one, then I will return true, if not, return false

function appearsTwice(arr){
  let hash = {};
  for(let val of arr){
    hash[val] = (hash[val] || 0) + 1;
  }
    let multiple = false;
    for(let val in hash){
      if(hash[val] > 1){
        multiple = true
      }
    }
    return multiple
}

console.log(appearsTwice([1,2,1,1]), true)
console.log(appearsTwice([1,2,3]), false)
console.log(appearsTwice([1,4,9,2,1]), true)

/// A much shorter solution but use up more memory

function appearsTwice2(arr){
  let unique = [...new Set(arr)];
  return unique.length !== arr.length
}


/*

Dec 1, 2021

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.

*/

/// So the algorithm is supposed to return a number.
/// Every letter has a value, 1-26, a = 1, z = 26.
/// First thing I want to do is create a variable named alphabet and start at 0abcde...
/// Then, I want to change that string to an array, map it and return the value for each letter
/// Then reduce the numbers and add them up

function wordsToMarks(string){
  let alphabet = '0abcdefghijklmnopqrstuvwxyz';
  return string.split('').map((letter,index,arr)=> alphabet.indexOf(letter)).reduce((sum, num) => sum + num,0)
}

/*

Dec 2, 2021

Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

*/

/// Im thinking I want to use a for loop (start at 1) and cube each number, and add it a variable named total;
/// In the end, I will return the total variable that will hold the sum

function sumCubes(n){
  let total = 0;
  for(let i = 1; i <= n; i++){
    total += i ** 3;
  }
  return total
}

/*

Dec 3, 2021

Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10 = 50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

*/

/// first thing i want to do is create an empty array to hold all the sums of the numbers multiplied
/// Next, i want to loop through the array, multiply each index by the next, then push the sum to the empty arr
/// Now that I have my list of sums, i can just return the maximum num with Math.max(...arr)

function adjacentElementsProduct(array) {
  let arr = []
  
  for(let i = 0; i < array.length-1; i++){
    arr.push(array[i]*array[i+1])
  }
  return Math.max(...arr) /// or arr.sort((a,b)=> b-a)[0]
}


/* 

Dec 4, 2021

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element 
always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

/// brute force way, I want to create a hash, then a count variable to keep track of the highest occurance
/// for each key, then return that key


function majorityElement(nums) {
   let hash = {};
   for(let val of nums){
       hash[val] = (hash[val] || 0) + 1
   }
 let count = 0
 let maxChar;
   for(let num in hash){
     if(count < hash[num]){
         count = hash[num];
         maxChar = num
     }
       }
   return maxChar
  
};

/// find a linear solution, this is a 0(n) solution


/*

12/5/2021

Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note 
from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });

it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint in in", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
 });
});

*/

/// what I am thinking is that I want to create a hash map to keep a number of the total amount of each character
/// that appears in the magazine.
/// Once I get my hash, I will use a for of loop on the ransom note and subtract 1 from each key value, if it goes
/// below 0, that means the magazine does not have enough letters needed.

function ransomNote2(ransomNote, magazine){
  let hash = {};
  for(let char of magazine){
    if(hash[char]){
      hash[char] = (hash[char] || 0) + 1;
    }
  }
  let possible = true;

  for(let letter of ransomNote){
    if(hash[letter]){
      --hash[letter]
    } else {
      possible = false
    }
  }
  return possible
}

console.log(ransomNote2("aabb", "aab"), false);
console.log(ransomNote2("the one", "one the"), true)


/* 

Dec 6, 2021

iven an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
});

*/

/// Brute force thinking, nested for loop to grab two values that equal given number

function twoSum(arr, sum){
  let answer = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === sum){
        answer.push([arr[i], arr[j]])
      }
    }
  }
  return answer
}

//// Lets try to use a hashmap solution!

/// first, I want to create an empty object for my hashmap
/// then I want to create an empty arr variable named pairs
// Next, I will use a for of loop on the arr, and create a variable named num2 which will equal sum - looped num
/// Next, I will check if the object contains the num2 variable, if it doesnt the looped number will go in the obj
/// If it is in there, we will push the looped number and num 2 into the empty arr
function twoSum2(arr, sum){
  const hash = {};
  const pairs = [];
  for(let num of arr){
    const num2 = sum - num;
    if(!hash[num2]){
      hash[num] = 1
    } else {
      pairs.push([num], [num2])
    }
  }
  return pairs
}

/*

Dec 9, 2021

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each 
number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

*/

/// had to review old notes, forgot how to solve this one.
/// First, you want to create an arr variable with [0,1], this is so it will return 0 and 1 for those inputs
/// next, we want to run a forloop and set i to 2. 
/// We then want arr[i] = arr[i-1] + arr[i-2], since input should equal previous two nums sums
/// we then return arr[num]

function fibAgain(n){
  const arr = [0,1];
  for(let i = 2; i <= n; i++){
    arr[i] = arr[i-1] + arr[i-2]
  }
  return arr[n]
}


/*


/* 

Dec 14, 2021

This time, lets solve it using recursion

*/

function fibo2(n){
  if(n < 2){
    return n
  }

  return fibo2(n-2) + fibo2(n-1)
}


/* 

Dec 15, 2021

In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the 
number given. The number will be passed in as a string of only digits. It should return a five digit integer. 
The number passed may be as large as 1000 digits.

*/

/// Questions ///
/// Can the argument have letters? 
/// Can it have negative numbers?
/// Will there be any decimals?
/// Do we return it as a number and not a string?

/// pseudo code ///
/// I want to create an empty arr that will contain all possible 5 digit combinations in sequence
/// for loop the str to push each 5
/// map through all arrays and join the 5 digits to form 1 number
/// sort the arrays from greatest to least
/// return the first arr (greatest)

function greatestConsecutive(str){
  let arr = []
  let digitsArr = digits.split('')
  for(let i = 0; i < digitsArr.length; i++){
    arr.push([digitsArr[i], digitsArr[i+1], digitsArr[i+2], digitsArr[i+3], digitsArr[i+4]])
  }
  return Number(arr.map(combo => combo.join('')).sort((a,b) => b-a)[0])
}

console.log(greatestConsecutive('1234567890'), 67890);
console.log(greatestConsecutive('1234567898765'), 98765);
console.log(greatestConsecutive('731674765'), 74765)



/*

Dec 15, 2021

Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 
are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special steps needed to obtain a 
palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is 
not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

Example
For example, start with 87:

*/

/// We know we need to run some type of loop to keep adding the total whenever the number isnt a palindrome.
/// Create a variable that will contain the final result of the number that it is a palindrome
/// Make sure we add conditional to keep loop running if the total isnt a palindrome

function numberPalindrome(num){
  /// finish algorithm if the original number is palindrome
  let numStr = num.toString()
  if(numStr === numStr.split('').reverse().join('')){
    return 0
  }
  /// setting up my counter
  let total = 0;
  /// setting up my do while loop
  while(num.toString() !== num.toString().split('').reverse().join('')){
  /// we are updating num to equal this every time the loop condition is true 
    num = num + Number(num.toString().split('').reverse().join(''));
    total++
  }
  return total

}

console.log(numberPalindrome(88), 0)
console.log(numberPalindrome(1), 0)
console.log(numberPalindrome(87), 4)


/*

Dec 24, 2021

Given an input of an array of digits, return the array with each digit incremented by its position in the array: 
the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions 
from 1 (and not 0).

Your result can only contain single digit numbers, so if adding a digit with it's position gives you a 
multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
Examples
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2

*/

/// First thing that needs to be done is to map the original array and add up num by it's index + 1
/// Once we have the sum, we want to map again so we can turn the nums into a string, that way we can target 
/// last index of the string.
/// Once we have the last index targeted, we want to return it as a number by using the built in Number method


function numPlusIndex(arr){
  return nums.map((num, index, arr) => num + (index + 1))
  .map(number => number.toString())
  .map(num => Number(num[num.length - 1]))
}

console.log(numPlusIndex([3,2,1,5]), [4,4,4,9])
console.log(numPlusIndex([9, 2, 6, 8, 3]), [0, 4, 9, 2, 8])
console.log(numPlusIndex([5, 9, 2, 8]), [6, 1, 5, 2])


/*

Dec 28th, 2021

This kata is the first of a sequence of four about "Squared Strings".

You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
or printed:

vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 
Task:
Write these two functions
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
Note:
The form of the parameter fct in oper changes according to the language. You can see each form according to 
the language in "Sample Tests".

Bash Note:
The input strings are separated by , instead of \n. The output strings should be separated by \r instead of \n.
See "Sample Tests".

*/

function vertMirror(str) {
  // Your code
  return str.split('\n')
  .map(line => line.split('').reverse().join(''))
  .join('\n')
}
function horMirror(str) {
  // Your code
  return str.split('\n')
  .reverse()
  .join('\n')
}
function oper(fct, s) {
  // Your code
  return fct(s)
}

/*

Dec 30, 2021

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a 
whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

/// First thing im thinking is create a var that is an empty string to add all of my lines of "+" signs.
/// Next, I want to create a variable to contain the "+" once. I will use this later.
/// Next, create a for loop with the integer being the end point i < integer.
/// In the for loop, I will add "+" times the integer amount. I will use the repeat method
/// At the end of the repeat method, I will also add "/n" to it to create the space.
/// Each time I run the loop, I will add that piece of code to my empty str.
/// Lastly, I will return that variable that was empty at first.
/// Forgot, I will return this variable with slice(0, -1) to remove the final /n

function generateShape(integer){
  let str = "+"
  let outcome = ""
  for(let i = 0; i < integer; i++){
    empty += str.repeat(integer)+"\n"
  }
  return outcome.slice(0, -1)
}

/*
 
Jan 1, 2021

Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement 
below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.

*/

/// What I first want to do is create a conditional that quickly returns 0 if n is less than 2.
/// Next, I want to create a variable named total that would contain the final value of red dots.
/// Next, I want to create a variable that contains a string of "rr", this would be the substitute for the red dots.
/// Now, I want to run a for loop that starts at 2, with each loop, I will add the str variable to total each time
/// Now that I have all the "rr" iterations I need in the total variable, I can just return the length of total,
/// this would get me the total number of red dots.

function countRedBeads(n){
  if(n < 2){
    return 0
  }
  
  let total = ""
  let redDot = "rr"
  for(let i = 2; i <= n; i++){
    total += redDot
  }
  return total.length
}

console.log(countRedBeads(3), 4)
console.log(countRedBeads(1), 0)
console.log(countRedBeads(2), 2)

////// Much easier solution

// function countRedBeads(n){
//   return n < 2 ? 0 : (n * 2) - 2
// }


/*

Jan 4, 2021

Notes
Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive

Digit Duplications could occur , So also consider it when forming the Largest

Input >> Output Examples:
maxNumber (213) ==> return (321)
Explanation:
As 321 is _The Maximum number _ could be formed from the digits of the number 213

*/

/// Questions and pseudo code ////
/// Can there be negative numbers passed?
/// What I want to do is turn the number into a string, split into an arr, then use the sort method to sort them
/// from greatest to least, once theyre sorted, join them again and use the Number method to turn the str into 
/// an integer

function maxNumber(n){
  let arrN = n.toString().split('')
  return Number(arrN.sort((a,b)=> b-a).join(''))
}

console.log(maxNumber(1322), 3221)
console.log(maxNumber(783129), 987321)
console.log(maxNumber(32164), 64321)


/*

Jan 3, 2021

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super 
(the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

*/

/// questions and pseudo code ////
/// Is 'y' a vowel in this case? Yes
/// will the word only contain letters?
/// Does letter case matter? Upper case/lower case? No it doesnt 
/// What I am thinking is creating a new empty arr called vowels
/// Run a for loop with the word length being the loop
/// If the letter matches any one of the vowels, push the index to the vowels arr.
/// Since we are not starting from index 0 in our returned arr, we will push i + 1 in the vowels arr.
/// Lastly return vowels array

function vowelIndices(word){
    let newWord = word.toLowerCase()
    let vowels = []
  for(let i = 0; i < word.length; i++){
    if(newWord[i] == "a" || newWord[i] === "e"|| newWord[i] === "i" || newWord[i] === "o" || newWord[i] === "u" || newWord[i] === "y"){
      vowels.push(i+1)
    }
  }
  return vowels
}


console.log(vowelIndices("amazing"), [1, 3, 5])
console.log(vowelIndices("sun"), [2])
console.log(vowelIndices("mmm"), [])


/* another solution that I had at my fingertips but just couldnt figure out earlier

function vowelIndices(word){
  let vowels = "aeiouyAEIOUY"
  let wordArr = word.split('');
  return wordArr.map((letter, index, arr) => vowels.includes(letter) ? index+1 : "").filter(el => el)
  }

  */


  /*

  Jan 6, 2021

  #Get the averages of these numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number 
and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array.

Have fun coding it and please don't forget to vote and rank this kata! :-)

*/

/// Questions and pseudo code ///
/// Are we only dealing with whole numbers to start? 
/// For our answers, do we return whole numbers, with decimals, round up or down?
/// To be clear, each number is replaced by the average of the original number and the following number.
/// The last number does not have a number following it, so the last number we return in the array is the
/// last integer and the second to last integer's average

//// From the very beginning, I want the function to end with an empty arr if there are less than 2 integers
//// with our beginning array, or if the arr is null, so we'll add a conditional for that.
//// Next, i want to create a variable called avg that contains an empty arr which will accept our answers
//// I want to run a for loop for this with the arr.length being the loop
//// Each loop, I want to push (arr[i] + arr[i+1]) / 2 into avg
//// In the end, return avg, but when we retun it, we omit the last integer by using slice, Or we can just
//// run the loop with i < numbers.length - 1

function averages(numbers){
  if(!numbers || numbers.length < 2){
    return []
  }
  let avg = []
  for(let i = 0; i < numbers.length; i++){
    avg.push((numbers[i] + numbers[i+1]) / 2)
  }
  return avg.slice(0, -1)
}


console.log(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2])
console.log(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0])
console.log(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5])


/*

Jan 10, 2022

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to 
its value.

Examples
explode("312"); // => "333122"
explode("102269"); // => "12222666666999999999"

*/

// First thing I want to do create an empty variable that would add each iteration from my for loop.
// What I am thinking is running a for loop to go through each number.
// I want to use the repeat method to add each iteration the number of times of its own value
// We need to make sure that we use the Number built in method since the numbers are in string form

function explode(s) {
  let newStr = ""
  for(let i = 0; i < s.length; i++){
    newStr += s[i].repeat(Number(s[i]))
  }
  return newStr

}

console.log(explode("142"), "1444422");
console.log(explode("0372"), "333777777722");
console.log(explode("912"), "999999999122");

/*

Jan 11, 2022

One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a 
password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0)

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"

*/

// The first thing I want to do is create a new arr with only the first letters of each word
// The trick to use is .split(' ').map(word => word[0])
// We can then create a new var called password that would accept the for loop iterations
// We will then create a for loop with if/else conditions to see if they match the letter we need to replace with
// numbers. The ones that don't match stay the same.
// We then return the password variable

function makePassword(phrase){
  let phraseArr = phrase.split(' ').map(word => word[0])
  let password = ''
  for(let i = 0; i < phraseArr.length; i++){
    if(phraseArr[i] ==="i"|| phraseArr[i] === "I"){
      password += "1"
    } else if(phraseArr[i] === "o" || phraseArr[i] === "O"){
      password += "0"
    } else if(phraseArr[i] === "s" || phraseArr[i] === "S"){
      password += "5"
    } else {
      password += phraseArr[i]
    }
  }
  return password
}

console.log(makePassword("Give me liberty or give me death"), )
console.log(makePassword("Keep Calm and Carry On"), )


/*

Jan 12, 2022

A new school year is approaching, which also means students will be taking tests.

The tests in this kata are to be graded in different ways. A certain number of points will be given for each 
correct answer and a certain number of points will be deducted for each incorrect answer. For ommitted answers, 
points will either be awarded, deducted, or no points will be given at all.

Return the number of points someone has scored on varying tests of different lengths.

The given parameters will be:

An array containing a series of 0s, 1s, and 2s, where 0 is a correct answer, 1 is an omitted answer, and 2 is an 
incorrect answer.
The points awarded for correct answers
The points awarded for omitted answers (note that this may be negative)
The points deducted for incorrect answers (hint: this value has to be subtracted)
Note: The input will always be valid (an array and three numbers)

Examples
#1:

[0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9
because:

5 correct answers: 5*2 = 10
1 omitted answer: 1*0 = 0
1 wrong answer: 1*1 = 1
which is: 10 + 0 - 1 = 9

#2:

[0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)  -->  3
because: 4*3 + 3*-1 - 3*2 = 3

*/

/// Questions and pseudo code ///

// Can we expect every number in our starting array to be 0, 1, and 2?
// If there are numbers other than those three, do we have to ignore them?
// Can the final answer be a negative number? Or do we cut the score off at 0?
// Will there only be one array to start?

// What I am thinking is I want to create a hash map to get the value of each numbers' occurance
// I then need to create a conditional named total, which will keep track of the total score
// After creating the hash map, i want to add a conditional that would multiply the occurance by either
// right, omit or wrong, and it would add on that sum to our tracker (total)
// Lastly, I return total

function scoreTest(str, right, omit, wront){
  let hash = {};
  for(let val of str){
      hash[val] = (hash[val] || 0) + 1;
  }
    let total = 0
    for(let key in hash){
      if(key == "0"){
        total += right * hash[key]
      } else if(key == "1"){
        total += omit * hash[key]
      } else if(key === "2"){
        total -= wrong * hash[key]
      }
    }
  return total
}

console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1), 9);
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2), 3)



/*

Jan 13, 2022

Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help 
of examples):

Note: There is no newline in the end (after the pattern ends)

Examples
pattern(3) should return "1\n1*2\n1**3", e.g. the following:

1
1*2
1**3
pattern(10): should return the following:

1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10

*/

/// questions ///
// Can the given number be less that 1? If so, what should we return?
// Can the input be anything other than an integer?
// Is there a maximum number we can accept?

/// Pseudo code 
/// Before I do anything, I want to set forth a conditional that tests if n is 1, if so, itll return "1"
/// Next, we already have our output variable, so we will run a forloop with i starting at 1
/// Next, for each iteration, I want to add "1" and * times i - 1 by using repeat method, and then the number i
/// Once weve looped it all, itll return output

function pattern(n){
  if(n == 1){
    return "1"
  }
 var output="1";
  //being coder
  for(let i = 2; i <= n; i++){
    output += "\n"+'1' + '*'.repeat(i-1)+i.toString()
  }
 return output;
}

console.log(pattern(3), "1\n1*2\n1**3")
console.log(pattern(7),"1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7");
console.log(pattern(20),"1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8\n1********9\n1*********10\n1**********11\n1***********12\n1************13\n1*************14\n1**************15\n1***************16\n1****************17\n1*****************18\n1******************19\n1*******************20")


/*

Jan 14, 2022

Description:
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single 
space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"

*/

// questions //

// Are we only dealing with string containing letters?
// Can there be more than word returned?
// How do we handle numbers?

/// Pseudo code //
// First thing I want to do is create an empty arr that will accept all of the qualified words
// Next I want to make my starting string into an array with every word being an element, that way I can
// check every word individually in my for loop
// In my for loop, I will run a conditional for each word to check if the word contains no ! to add to the arr
// But if it does contain !, it must contain more than 1 to qualify to be added to the array
// I return '' if my arr is empty, but if its not, I just join my arr with (' ') to return the string with 
// the required spaces

function remove(string){
  
    let arrStr = string.split(' ')
    let newStr = []
    let check = "!"
   
    for(let i = 0; i < arrStr.length; i++){
      if(!arrStr[i].includes(check) || arrStr[i].indexOf(check) !== arrStr[i].lastIndexOf(check)){
        newStr.push(arrStr[i]) 
      }
    }
    if(!newStr){
      return ''
    } else {
      return newStr.join(' ')
    }
   
  }


console.log(string("Hi!"), "")
console.log(string("Hi! Hi!"), "")
console.log(string("Hi! Hi!! Hi!"), "Hi!!");

/*

Jan 17, 2022

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to 
target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

/// Can there be any negative numbers?
/// Can there be duplicates in the original array?

/// First option would be the brute force solution which is a nested for loop that checks every number
/// Once I find two elements that equal the target, I will push the indeces in an empty array


function twoSum(nums, target){
  let indeces = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++ ){
            if(nums[i] + nums[j] === target){
                indeces.push(i,j)
            }
        }
    }
    return indeces
}

console.log(twoSum([2,7,11,15], 9), [0, 1])
console.log(twoSum([3, 3], 6), [0, 1])
console.log(twoSum([3,2,4], 6), [1, 2])

/// Another solution I thought of was using the multiple pointers solution, where it was start at 0 and the end
/// First, id have to sort the arr, then use this method.

function twoSum(nums, target){
  let sorted = nums.slice(0).sort((a,b) => a-b);
    
    let start = 0;
    let end = sorted.length-1;
    let lastArr;
    
    while(start < end){
        let sum = sorted[start] + sorted[end];
        if(sum === target){
          return [nums.indexOf(sorted[start]), nums.lastIndexOf(sorted[end])]
        } else if(sum > target) {
            end--
        } else {
            start++
        }
            
        }
        return final
}

/// Even better solution for time complexity

function twoSum(nums, target){
  twoSum = function(nums, target) {
    let hash = {};
        nums.forEach((num, index) => {
            hash[num] = index
        })
        for(let i = 0; i < nums.length; i++){
            const complement = target - nums[i];

         if (hash[complement] !== undefined && hash[complement] !== i) {
            return [i, hash[complement]]
        }
    }
}
}

/*

jan 29, 2022

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

*/

function largestPairSum (numbers) {
  let sortedNumbers = numbers.sort((a,b) => a-b)
  return sortedNumbers.slice(sortedNumbers.length - 2).reduce((sum, num) => sum + num,0)

}

/*

jan 30, 2022

Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help 
to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of 
them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing 
element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

*/


function getMissingElement(superImportantArray){
  let sum = 0+1+2+3+4+5+6+7+8+9
  return sum - superImportantArray.reduce((sum, num) => sum + num,0)
}


/*

You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to 
attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.

*/

function countDevelopers(list) {
  return list.filter(obj => obj.language == "JavaScript" && obj.continent === "Europe").length
}

/*

Feb 1, 2022

Your job is to implement a function which returns the last D digits of an integer N as a list.

Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]

*/

/// First make conditionals for the special cases that the challenge gives you
/// Lastly, string the num, split the numbers to an array, map them back to integers, then slice with -d

function lastDigit(n, d) {
  
  
  
  if( d <= 0){
    return []
    
  }
  
    if(n.toString().length === 1){
    return [n]
  }
  

  
  if(d>n.toString().length){
    return n.toString().split('').map(num => Number(num))
  } else {
    return n.toString().split('').map(num => Number(num)).slice(-d)
  }
  

 
 
}






/*

Feb 2, 2022

You are going to be given a word. Your job will be to make sure that each character in that word has the exact 
same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 
0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only 
appears once!
"123abc!" is a valid word because all of the characters only appear once in the word.

*/

/// first thing I want to do is create a hashmap to get the count for each character
/// after the hashmap, I want to run a for val in hash loop to push every value into an arr
/// then I want to run a for loop to see if every value in the array is the same, if it is, return true, else false

function validateWord(s)
{
 
  let hash = {};
  
  for(let char of s.toLowerCase()){
    hash[char] = (hash[char] || 0) + 1
  }
  
  let totals = []
  for(let num in hash){
    totals.push(hash[num])
  }
  
  for(let i = 1; i < totals.length; i++){
    if(totals[i] !== totals[i-1]){
      return false
    }
  }
  return true

}




/*

Feb 3, 2022

The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s 
for 0s. For example:

onesComplement(1001) = 0110
onesComplement(1001) = 0110
For any given binary number,formatted as a string, return the Ones' Complement of that number.

*/





/*

Feb 4 2022

A History Lesson
The Pony Express was a mail service operating in the US in 1859-60.

Pony Express
It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before 
it was made obsolete by the transcontinental telegraph.

How it worked
There were a number of stations, where:

The rider switched to a fresh horse and carried on, or
The mail bag was handed over to the next rider
Kata Task
stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

Implement the riders method/function, to return how many riders are necessary to get the mail from one end to 
the other.

NOTE: Each rider travels as far as he can, but never more than 100 miles.



*/







/*

Feb 5, 2022

Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate 
arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their 
prototype?

*/

///simple solution. create two empty arrays, one for keys, one for values
/// run a for in loop on the object and push keys in key array, and values in values array
/// return an array with both arrays inside4

function keysAndValues(data){
  let keys = [];
   let values = [];
   
   for(let items in data){
     keys.push(items);
     values.push(data[items])
   };
   
   return [keys,values]
 }


 /*

 Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and 
  vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/

/// simple challenge. Were just going to run a for loop and if the letter is a, switch for b, if its b, switch for
/// a, if its anything else, just return that same letter

function switcheroo(x){
  let newStr = "";
    
    for(let i = 0; i < x.length; i++){
      if(x[i] === "a"){
        newStr += "b"
      } else if(x[i] === "b"){
        newStr += "a"
      } else {
        newStr += x[i]
      }
    }
    return newStr
  }





  /*

  feb 10, 2022

  Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting 
    from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1


*/

var findDigit = function(num, nth){
  let num1 = Math.abs(num)
  let numStr = num1.toString().split('').reverse()

  if(nth > numStr.length){
    return 0;
  }

  if(nth <= 0){
    return -1
  }


  for(let i = 0; i < numStr.length; i++){
     if(i === nth-1){
       return Number(numStr[i])
     }
    }
  }



/*

feb 7, 2022

It's your best friend's birthday! You already bought a box for the present. Now you want to pack the present 
in the box. You want to decorate the box with a ribbon and a bow.

But how much cm of ribbon do you need?

Write the method wrap that calculates that!

A box has a height, a width and a length (in cm). The ribbon is crossed on the side with the largest area. 
Opposite this side (also the side with the largest area) the loop is bound, calculate with 20 cm more tape.

  wrap(17,32,11) => 162
  wrap(13,13,13) => 124
  wrap(1,3,1) => 32
Notes:
height, width and length will always be >0

*/

/// I honestly could not figure out how the formula was made so I just tried different calculations with the 
/// test cases and figured out a solution by trial and error.

function ribbonLength(height, width, length){
  return 2 * (height + width + length + Math.min(height, width, length) + 10);
}

console.log(ribbonLength(17,32,11), 162);
console.log(ribbonLength(13,13,13), 124);


/*

feb 9, 2022

The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s 
for 0s. For example:

onesComplement(1001) = 0110
onesComplement(1001) = 0110
For any given binary number,formatted as a string, return the Ones' Complement of that number.

*/

function switch1And0(n){
  let answer = '';
  for(let i < 0; i < n.length; i++){
    if(n[i] === '1'){
      answer += '0'
    } else {
      answer += '1'
    }
  }
  return answer
}

console.log(switch1And0('11010'), '00101')
console.log(switch1And0('00011'), '11100')
console.log(switch1And0('0011100'), '1100011')


/*

Feb 10, 2022

In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know 
the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.

*/

/// Im thinking about using four test cases with if else statements. First starting with a test case for
/// 400, then one for 100, then one for 4, then everthing else. 
/// To test for it, I want to use the % to check if it equals to 0.

function leapYear(n){
  if(year % 400 === 0){
    return true
  } else if(year % 100 === 0){
    return false;
  } else if(year % 4 === 0){
    return true
  } else {
    return false
  }
}

console.log(leapYear(2000), true)
console.log(leapYear(1234), false)
console.log(leapYear(1984), true)


/*

Feb 11, 2022

Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example (Input --> Output)
0 --> 0
5 --> 5
10 --> 10

*/

/// First thing I want to get out of the way is eggs equaling 0, returns 0
/// Next, if a value % 8 === 0, I want to divide eggs by 8 and multiply by 5
/// Lastly, I can use Math.floor to round down when a number isnt divisible by 8, 
/// for example, Math.floor(20 / 8) would equal 2, then I would multiply

function boilTime(eggs){
  if(!eggs){
    return 0
  }

  return Math.ceil(eggs / 8) * 5
}

console.log(boilTime(8), 5)
console.log(boilTime(0), 0)
console.log(boilTime(22), 15)



/*

feb 12, 2022

Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]

*/

/// This is very easy using brute force. First, I want to turn the number into a string using toString()
/// Then I want to split(''), then use map to change every string number into an actual integer using Number

function arrayNumber(num){  
  return num.toString().split('').map(num => Number(num))
}

console.log(arrayNumber(235), [2,3,5])
console.log(arrayNumber(8437), [8,4,3,7])
console.log(arrayNumber(13), [1,3])


/*

Feb 28, 2021

A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular 
pattern. The individual elements in a sequence are called terms. 
A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... 
This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3
Your Task
Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the 
arithmetic series explained above. Whenn < 0 return the sequence with negative terms.

Examples
 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]

 */

 function sumOfN(n) {
  var array = [];
  array[0] = 0;
  for (var i = 1; i < Math.abs(n)+1; i++) {
    if (n > 0) {
      array[i] = array[i-1]+i;
    } else {
      array[i] = array[i-1]-i;
    }
  }
  return array;
};


/*

Mar 1, 2022

Given a list of integers, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.

*/

/// first i want to add ...arg to the parameters in order to combine the nums into an array
/// next I want to create an array of all integers 0-9
/// next i want to turn the numbers in parameter into a string, split them, sort them, then join them again

/// after I have this set up, I can run a filter method on the array for all integers, and use !includes to 
/// see which integers in allDigits are missing in the ...args

function unusedDigits(...arg){
  const allDigits = ["0", "1","2","3","4","5","6","7","8","9"]
  let nums = arg.map(num => num.toString()).join('')
  
  
  let ordered = nums.split('').sort((a,b)=>a-b)
  
  return allDigits.filter(num => !ordered.includes(num)).join('')
  
}


/*

Mar 2, 2022

Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a 
string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have 
enough letters.

*/

/// create an empty str called newWord
//// first thing is to check the length of arr of words, if it is empty, return ''
//// next, if the length is greater than 1, I want to run a for loop for the arr of words
//// each iteration, I want to add a letter to the newWord variable. Each letter will be the i (word it is on)
//// and i (letter of the word. ) So words[i][i]. First iteration will take letter 0 from words[0], next would
//// be letter 1 of word[1] and so forth. 
//// At last we will return the new word


function nthChar(words){
  let newWord = ''
 if(words.length === 0){
   return ""
 } else {
   for(let i = 0; i < words.length; i++){
     newWord+= words[i][i]
   }
 }
  return newWord
}

/*

mar 4, 2022

Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given 
year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays
(1986) == 1

*/

function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}

console.log()
console.log()


/*

March 27, 2022

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of 
these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

/// this is very similar to the fizz buzz algorithm. Only this time, instead of printing the number,
/// we want to add that number to a variable that will sum all of the numbers.

/// I want to create a variable called total and give it value of 0.
/// Just to get the negative numbers out of the way, I will run a conditional to see if number is less than 1,
/// if so, I will just return 0
/// Next i will run a for loop with the number variable which will use the number added in the argument.
/// Next I will run three conditionals, one to see if the number is divisible by 3 and 5, then one to see
/// if it is divisible by 3, then the last one to see if its divisible by 5. If it is, I will add it to total
/// Lastly, I will return total

function solution(number){
  let total = 0
  
  for(let i = 0; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0 ){
   total += 0
   }
  }
  return total
}

/*

March 28, 2022

Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd!alt!alt
Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the 
boys!alt!alt

Notes
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least 4 .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists .!alt
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

Input >> Output Examples:
menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 
Explanation:
Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .



*/

/// The first thing I want to do is separate evens and odds while sorting them, I will hold them in two diff
/// arrays.
/// Next, I want to use the new Set method to remove duplicates.
/// Lastly, I will concat both arrays with evens being first


function sortEvenAndOdds(arr){
  let even = [... new Set(arr.filter(num => num % 2 === 0).sort((a,b)=> a-b))]
  let odds = [... new Set(arr.filter(num => num % 2 !== 0).sort((a,b) => b-a))]

  return even.concat(odds)
}

console.log(sortEvenAndOdds([7,3,14,17]), [14,17,7,3])
console.log(sortEvenAndOdds([82,91,72,76,76,100,85]), [72,76,82,100,91,85])
console.log(sortEvenAndOdds([-17,-45,-15,-33,-85,-56,-86,-30]), [-86,-56,-30,-15,-17,-33,-45,-85])


/*
Apr 9, 2022

Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, 
a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in
the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for 
each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!

*/

// We are working with a nested array so make sure you target each individual array.
// First thing I want to do is create a variable called alphabet that has all the letters in the alphabet in order.
// Next thing I want to to do is use map to target all array and use toLowerCase for all.
// Next I want to split each array by each character that way I can target each character in each array.
// Next is where I create my nested map, I will use a map method with filter inside of it, returning only the
// letters who's index matches their index in the alphabet variable. 
// Lastly, I will add the .length method at the end to return the length of each sub array

function indexMatches(arr){
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return arr.map(word => word.toLowerCase().split('').filter((letter, i, arr)=> i == alphabet.indexOf(letter)).length)

}

console.log(indexMatches(["abode","ABc","xyzD"]))


/*

july 7, 2022

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with 
the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

*/

function powersOfTwo(n){
  let arr = []
  for(let i = 0; i <= n; i++){
    arr.push(2**i)
  }
    return arr
    }

    
    
/*

July 8, 2022

Return an integer with the length of the consecutive vowels found.

This is better explained with a couple of examples:

You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your 
way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. 
If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you 
ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive 
vowel, and so forth until you get to the 'o'. Return 4.

Note
For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.

Good luck!

*/

function getTheVowels(word) {
  let vowels = ["a", "e", "i", "o", "u"]
  
  let wordArr = word.split('')
  
  let count = 0
  
  for(let i = 0; i < wordArr.length; i++){
    if(wordArr[i] === vowels[0]){
      count++
      vowels.push(vowels.shift())
    }
  }
  return count
}


/*

July 9th, 2022

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

*/


/* 

Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
Eg:

Code wars -> C, w -> C W -> CW
Note: There will be at least two words in the given string!

*/

// First thing I want to do is split the string by word, and then I want to map the array and return the first
// char of each word and also use the upperCase method. Once mapped, I will join the letters back up to create
// the acronym.

function toAcronym(inp){
  return inp.split(' ').map(word => word[0].toUpperCase()).join('')
}


/* 

June 26, 2022

Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible 
by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out 
“Fizz Buzz”.

*/

// Run a for loop, add conditionals for all nums to see if they meet qualifications. make sure to run the 
// 3 && 5 conditional first to not mess up the console logg

function fizzBuzz22(num){
    for(let i = 0; i <= num; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
      } else if(i % 3 === 0){
        console.log("fizz")
      } else if(i % 5 === 0){
        console.log("buzz")
      } else {
        console.log(i)
      }
    }
}

console.log(fizzBuzz22(22))
console.log(fizzBuzz(45))


/* New Challenge 

Write a function that when given a URL as a string, parses out just the domain name and returns it as a 
string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet

*/

/// For this algo, we want to use replace multiple times for the url in order to remove https://, http://,
/// and www.

function printDomain(url){
  url = url.replace("https://", "")
  url = url.replace("http://", "")
  url = url.replace("www.", "")
  return url.split(".")[0]

}

console.log(printDomain("https://www.sup.com"))
console.log(printDomain("www.github.com/rudy35hernandez"))



/* New Challenge

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

*/

// Added them all up using reduce method. Also  use the Number built in method to turn strings into numbers

function addthemup(arr){
  return arr.reduce((acc, num) => acc + Number(num), 0)
}

console.log(addthemup([1, 4, "5", 22, "1"]))
console.log(addthemup)([4, 5, "11", "3"])



/* New Challenge

It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them. Easy ! You just need to 
write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)

*/

/// I want to use the reduce method to add up all the scores, then divide it by the arr.length. To round it down
/// I'll wrap the entire method with the Math.floor method

function avgScore(arr){
  return Math.floor(arr.reduce((acc, num) => acc + num, 0) / arr.length)
}

console.log(avgScore([1, 1, 1, 1, 1, 2]), 1)
console.log(avgScore([1,2,3,4,5,]),3)



/* New Challenge

You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task 
will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every 
other number occurs twice.

repeats([4,5,7,5,4,8]),15)
repeats([9, 10, 19, 13, 19, 13]),19)
repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
repeats([5, 10, 19, 13, 10, 13]),24)

*/

/// First thing I want to do is sort the array by least to greatest value to put all duplicates side by side.
/// Once I have it sorted, I will create an empty array to push non duplicates to array. I will run a for loop
/// with a conditionaly checking if the previous element or if the following element DO NOT MATCH. If they dont,
/// I will push the element to the new arr. Once the loop is finished, I will run a reduce method on the new arr.

function repeats(arr){
  let sorted = arr.sort((a,b) => a-b)
    
  let newArr = []
  
  for(let i = 0; i < sorted.length; i++){
    if(sorted[i] !== sorted[i - 1] && sorted[i] !== sorted[i+1]){
      newArr.push(sorted[i])
     }
    }
  return newArr.reduce((acc, num) => acc+num,0)
};


/* New Challenge

Given an array of digital numbers, return a new array of length number containing the last even numbers from 
the original array (in the same order). The original array will be not empty and will contain at least "number" 
even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

*/

/// First thing Id want to do is reverse the array, then Id run a for loop and push the amount of even numbers
/// that is required to complete the algorithm. Would I would also do is set up a counter equaled to the num 
/// parameter, once it goes down to 0, it will escape the for loop

function lastThreeEven(arr, num){
  const reversedArr = arr.reverse()
  const newArr = []
  for(let i = 0; i <= reversedArr.length; i++){
    if(reversedArr[i] % 2 === 0){
      newArr.push(reversedArr[i])
    }
  }
    return newArr.slice(0, num).reverse()
}


/* New Challenge
 
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. 
They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes 
are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

*/

/// For this challenge I want to use common sense. First, I need to remove all duplicates from the arrays, a way to 
/// do this is to map the array of arrays, and use the [...new set(arr)] method to return arrays with non duplicates.
/// Then I want to run another map method to return the length of each array. Once I get the length of each array,
/// I will use the reduce method, multiply them all with each other to return the number of unique array 
/// possibilities. Make sure to use the ,1 in the reduce method. Using the 0 will result in the return being 0.

function uniqueArrayPoss(arr){
  const nonDuplicates = arr.map(nums => [...new Set(nums)])
  return nonDuplicates.map(arr => arr.length).reduce((acc, nums) => acc * nums,1)
}


/* New Challenge 


Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

nthSmallest({3,1,2} ,2) ==> return (2) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

*/

//// Im thinking of using the sort method, from smallest to biggest, then using the num parameter and use it as
//// the [index-1] to return that index in the array

function nthSmallestInteger(arr, num){
  const sortedArr = arr.sort((a,b) => a-b)
  return sortedArr[num - 1]
}


/* Challenge

The goal of this exercise is to convert a string to a new string where each character in the new string 
is "(" if that character appears only once in the original string, or ")" if that character appears more than 
once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

/// Although I have not done this in a while, what I would do is create an object that keeps count of each 
/// time a letter appears. After creating the hash map, I would then use a for loop to check which key has a value
/// greater than 1 and return the ), if it appears once, I would return (.

/// Could not figure out how to solve using a hash map so I will try using the indexOf === lastIndexOf method 
/// instead

function duplicateOrNot(str){
  return str.split("")
         .map(letter => letter.toLowerCase())
         .map(letter => word.indexOf(letter) !== word.lastIndexOf(letter) ? ")" : "(")
         .join("")
}



/* Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

*/

/// I am thinking that the we need to use the split method to turn string into array. Next, we can run
/// a map method to target every character and change the case from lower to upper and vice versa.
/// Once that is completed, we can then join the string and split it once again but this time by word, not
/// letter. We can then use the reverse method to switch words around.


function reverseCaseAndWord(str){
  return str.split("")
  .map(letter => letter !== letter.toLowerCase() ? letter.toLowerCase() : letter.toUpperCase())
  .join("")
  .split(" ")
  .reverse()
  .join(" ")
}



/* New Challenge

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final 
character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the 
given string.

All inputs will be valid.

last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

*/ 

//// After trying indexOf, word[a.length - 1], nothing seemed to work. I even split, reversed, joined, split by 
//// word again, sorted, joined, all to find out that it would not keep things in order if they had the same 
//// last character. After some research, the solution was to use a.charCodeAt(a.length -1) and compare it to 
//// b. We still use the sort method, but charCodeAt was the solution.


function sortByLastLetter(x){
  return x.split(" ").sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

console.log(('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])


/* New Challenge

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining 
numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

*/

/// Just using simple logic, easiest way to solve this is to use the reduce method on both the first array and
/// the mixed array, then subtract the from the first array with the mixed array. This will get us the number
/// missing, and if there's none missing, it returns 0 like we want

function findMissingNumber(arr, mixedArr){
  return arr.reduce((acc, num) => acc + num,0) - mixedArr.reduce((acc, num) => acc + num,0)
}


/*

Implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

*/

/// What i want to use for this algo is the includes method. What I can do, is run a filter method on the 
/// original array, and then use the !includes method on the second array to return the items that do not appear
/// in the second array


function removeDupes(a, b){
  return a.filter(num => !b.includes(num))
}


/* 

Challenge for the day:

Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any 
  parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.


*/

/// pseudo code
/// Id first create a function declaration with the three arguments. 
/// The function should be short and sweet. Id return a ternary that checks for bool being true or false, if
/// true, it will return func1, if false, it returns func2


function ifFunction(bool, func1, func2){
  return bool ? func1() : func2()
}


/*

Challenge, level 6 KYU 

You are organizing an olympiad and would like to create an algorithm to determine the podium. Simple, isn't it!?
An olympiad is a tournament with few rounds. Each round brings more or less points to the players. Good luck!

Input
A score object, containing the scores of all players for each round. For exemple:

{
  'Emy': [8, 12, 1],    // Emy scored 8 points in the first round, 12 points in the second and 1 point in the third.
  'Paul': [2, 6, -9],   // Paul scored 2 points in the first round, 6 points in the second and -9 points in the third.
  'Sandra': [3, 9, 7],  // Sandra scored 3 points in the first round, 9 points in the second and 7 points in the third.
  'Sue': [10, 2, 0],    // ...
  'Yseult': [8, 9, 3]
}
Your task
Return the podium in this form:

{
  'gold': {
    'score': 21,
    'players': ['Emy']
  },
  'silver': {
    'score': 20,
    'players': ['Yseult']
  },
  'bronze': {
    'score': 19,
    'players': ['Sandra']
  }
}

*/

/* 

DESCRIPTION:
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/

function findOutliers(int){
  const even = int.filter(num => num % 2 === 0)
  const odds = int.filter(num => num % 0 !== 0)

  return even.length === 1 ? even[0] : odds[0]
}


/* 
Write a class Block that creates a block (Duh..)

Requirements
The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

Define these methods:

`getWidth()` return the width of the `Block`

`getLength()` return the length of the `Block`

`getHeight()` return the height of the `Block`

`getVolume()` return the volume of the `Block`

`getSurfaceArea()` return the surface area of the `Block`

*/

class Block {
  constructor(data) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }
  getWidth(){
    return this.width
  }

  getLength(){
    return this.averageLength
  }

  getHeight(){
    return this.height
  }

  getVolume(){
    return this.width * this.length * this.height
  }

  getSurfaceArea(){
    return 2 * ((this.width * this.length) + (this.width * this.height) + (this.height * this.length))
  }
}

/*

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

/// Id like to create three different variables containing the area code, prefix, and last 4 digits. I will do this
/// by implementing the filter method and filtering by the index of the numbers. Once that's done, I can create a 
/// string literal to form the phone number using the variables

function createPhoneNumber(numbers){
  const areaCode = numbers.filter((num, i, arr) => i < 3).join('')
  
  const prefix = numbers.filter((num, i, arr) => i > 2 && i < 6).join('')
  
  const lastFour = numbers.filter((num, i, arr) => i > 5).join('')
  
//   console.log(areaCode.join('').toString())
  
  return `(${areaCode}) ${prefix}-${lastFour}`
  
}


/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the 
position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid 
consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/

/// The easiest way to solve the problem is by using a nested for loops to run through every word with the 
/// nested loop. First I would split the sentence into an array, run a for loop, then a nested loop to test
/// the includes(i) method for every word. If it includes i (since its low to high), I will push that word into
/// a new and empty array. Once done, I will use the join method to turn the new array into a string

function order(words){
  
  let arrWords = words.split(' ')
//   console.log(arrWords)
  let arrangedWords = []
  
  for(let i = 0; i < arrWords.length+1; i++){
    for(let j = 0; j < arrWords.length; j++){
      if(arrWords[j].includes(i)){
        arrangedWords.push(arrWords[j])
      }
    }
  }
  return arrangedWords.join(' ')
//   console.log(arrangedWords)
}


/*

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/

/// My first thought is to create a variable that contains all the alphabet with the first index spot (0) being 
/// blank. This would make a = index 1 and b = index 2 and so forth.
/// After that, i need to drop all letters to lower case, split into array like this split("") so each character 
/// and empty space becomes an element
/// Once I do that, I can, I can run a map method to return each character element as the position number by using
/// the alphabet variable to compare the element to the alphabet and its position in the variable
/// We then run a filter method to get rid of all numbers less than 1.
/// Once we get the returned numbers for all, we join it back up with join(" ") and change back to a string with 
/// toString()

function alphabetPosition(text) {
  const alphabet = " abcdefghijklmnopqrstuvwxyz"
  
  let arrPos = text.toLowerCase().split("").map(letter => alphabet.indexOf(letter)).filter(num => num > 0)
  
  return arrPos.join(" ").toString()
  
}

/*

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/

/// For something like this, we need to create a variable called "total" with the value of 0 that keeps count for 
/// each multiplication that takes place, that way we can return that count at the end. 
/// First thing we need to do is turn the num into a string to be able to split the numbers in order to multiply
/// them.
/// Next thing to use is a while loop to keep running until the num is down to length of 1.
/// In the while loop, I will add the reduce method to multiply numbers with each other, and then add + 1 to total
/// each time it is ran.
/// Lastly, I will return "total" at the end, giving me the amount of times it was multiplied

function persistence2(num){
  const numStr = num.toString()
  const total = 0

  if(numStr <= 1){
    return 0
  }

  while(numStr.length > 1){
    numStr = numStr.split("").reduce((acc, num), acc * num, 1).toString()
    total++
  }
  return total
}


/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or 
more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and 
spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/

/// Im thinking of running a split(" ") method to create an element for each word.
/// Then I will run a map method to test for all words with a length shorter than 5, if it's shorter than 5, I will
/// return the word as is. If it's greater than 4, I will reverse that word by splitting it, reversing it, then
/// joining it again. Lastly, I join that array again with join(" ").

function spinWords(string){
  return string.split(" ")
          .map(word => word.length < 5 ? word : word.split("").reverse().join(""))
          .join(" ")
}



/*

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first 
word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, 
  also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

/// This may be a long winded answer but I need to create an abc variable that contains all letters lower and upper
/// Next I need to split the string by character, run a map method, return characters in abc, return a blank space
/// for those not in the abc.
/// Next I need to join the letters again, then split by word, map each word, if its after index one, I need to
/// split that word by each character, and index 0 will get a toUpperCase() and the rest stay the same.
/// Lastly I will join the letters back up, join the words, split them by word (" ") then join("")

function toCamelCase(str){
  const wordArr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  if(!str){
    return ""
  }
  
  const onlyLettersStr = str.split("").map((letter, index, arr) => wordArr.includes(letter) ? letter : " ").join("")
  const camel = onlyLettersStr.split(" ")
                .map((word, index, arr) => index === 0 ? word : 
                word.split("").map((letter,index) => index === 0 ? letter.toUpperCase() : letter).join("")).join(" ")
  return camel.split(" ").join("")

  /*

  You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too 
  early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its 
  citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of 
  one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single 
  block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a 
  function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want 
  to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', 
or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

function isValidWalk(walk) {
  if(walk.length > 10 || walk.length < 10){
    return false
  }
  
  let ns = 0
  let ew = 0
  
  for(let i = 0; i <= walk.length; i++){
      if(walk[i] === "n"){
        ns = ns + 1
      } else if(walk[i] === "s"){
         ns = ns - 1
      } else if(walk[i] === "e"){
        ew = ew + 1
      } else if(walk[i] === "w"){
        ew = ew - 1
      }
    }
      return ns === 0 && ew === 0

  }

  /* 

  New Challenge

  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other 
  elements.

  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

  */

  function moveZerosA(arr){

  }

  console.log(moveZerosA(arr))