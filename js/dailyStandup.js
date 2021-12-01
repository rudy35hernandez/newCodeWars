
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

function seven(m){

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

