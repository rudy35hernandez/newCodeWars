
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