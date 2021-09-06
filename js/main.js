

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

let greet1 = () => 'hello world';



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

function greet2(name){
    return `Hello, ${name} how are you doing today?`;
  }



  /*

  16. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can 
  be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.

*/
 
// Sum Numbers
// Sum Numbers

function sum (numbers) {
    return numbers.reduce((sum, num) => (sum + num),0);
      
  }

  /* 

  17. This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

  */

    var a = "code"
    var b = "wa.rs"
    var name = a + b;


    /*
    
    18. How do you freeze an object/class to prevent changes? Lets name this class MrFreeze
    */

    var MrFreeze = {name: 'Mr Freeze'}

    Object.freeze(MrFreeze);


    /*
    
    19. Complete the solution so that it reverses all of the words within the string passed in.

    */

    function reverseWords(str){
  
        return str.split(/\s+/).reverse().join(' ')
    }


    /* 

    20. I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
     I'll appreciate for your help.

    P.S. Each array includes only integer numbers. Output is a number too.

    */

    function arrayPlusArray(arr1, arr2) {
        return arr1.reduce((sum, num) => sum + num, 0) + arr2.reduce((sum, num) => sum + num, 0); //something went wrong
      }


      /*

    21. Implement a function which convert the given boolean value into its string representation.

    Note: Only valid inputs will be given.

      */

    function booleanToString(b){
        return b.toString()
    }


    /*

    22. Create a function which answers the question "Are you playing banjo?".
    If your name starts with the letter "R" or lower case "r", you are playing banjo!

    The function takes a name as its only argument, and returns one of the following strings:

    name + " plays banjo" 
    name + " does not play banjo"
    Names given are always valid strings.

    */

    function areYouPlayingBanjo(name) {

        return name[0] == 'r' || arrayName[0] == 'R' ? name + ' plays banjo' : name + ' does not play banjo'
      }

    

    /*

    23. Write a function which calculates the average of the numbers in a given list.

    Note: Empty arrays should return 0

    */

    function find_average(array) {
        return array.reduce((sum, num) => sum + num,0) / array.length;
      }


    
    /*

    24. Given a string of digits, you should replace any digit below 5 with '0' and any 
    digit 5 and above with '1'. Return the resulting string.
 
    */

    function fakeBin(x){
      let above5 = x.split('');
      return above5.map(num => num >= 5 ? 1 : 0).join('');
    }

  

    /* 

    25. Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) 
    array/vector of integers list as input and outputs, respectively, the largest and lowest number in that 
    array/vector.

    */ 

    var min = function(list){
    
      return Math.min(...list)
  }
  
  var max = function(list){
      
      return Math.max(...list);
  }


  /* 

  26. Build a function that returns an array of integers from n to 1 where n>0.

  Example : n=5 >> [5,4,3,2,1]

*/

const reverseSeq = n => {
  let empArr = []
  for(let i = 1; n >= i; n-- ){
    empArr.push(n);
  }
  return empArr;
};


/* 

27. Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

function disemvowel(str) {
  return str.replace( /[aeiouAEIOU]/g, '' );
}


//// another soluition i saw that was pretty cool using array methods


/*
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

*/


/*

28. You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

*/

function check(a, x) {
  return a.includes(x)
}


/*

29. Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is 
composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical 
structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be 
valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

*/

function DNAtoRNA(dna) {
  return dna.replace( /[T]/gi, "U")
}

//other solution

// function DNAtoRNA(dna){
//   return dna.split('T').join('U')
// }


/*

30. The function is not returning the correct values. Can you figure out why?

getPlanetName(3); // should return 'Earth'

*/

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}



/*

31. Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the 
paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
Waiting for translations and Feedback! Thanks!

*/

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}


/*

32. You will be given a sequence of objects representing data about developers who have signed up to attend 
the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
write a function that returns the average age of developers (rounded to the nearest integer). In the example 
above your function should return 50 (number).

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.


*/

//////////////////// I did not solve myself. I had no idea where to begin //////////////////////
function getAverageAge(list) {
  return Math.round(list.reduce((sum,obj) => sum + obj.age, 0) / list.length);
}


/*

33. Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/


function points(games) {
  let points = 0;
   games.map(g => {
    if(g[0] == g[2]){
     points += 1;
    } else if(g[0] > g[2]){
      points += 3;
      }
  }) 
  return points;
}


/*

34. Write a function which converts the input string to uppercase.

*/

function makeUpperCase(str) {
  return str.toUpperCase()
}


/* 

35. Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)

*/

function sumArray(array) {
  return array ? array.sort((a,b) => a-b).slice(1, array.length - 1).reduce((sum, item)=> sum + item,0) : 0
}


/* 

36. After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight
 for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental 
makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

*/

function rentalCarCost(d) {
  let cost = 40;
  let total = d * cost;
  
  if(d >= 3 && d < 7){
    return total - 20;
  } else if(d >= 7){
    return total - 50;
  } else{
    return total
  }
  
}

/*

37. You were camping with your friends far away from home, but when it's time to go back, you realize 
that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car 
runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function
that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if 
it is possible and false (0 in Prolog) if not. The input values are always positive.

*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? 1 : 0
};


/*

38. You are going to be given a word. Your job is to return the middle character of the word. If the word's 
length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test 
cases due to an error in the test cases). You do not need to test for this. This is only here to tell you 
that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/ 


////I did not figure this out on my own :(((((((((((
function getMiddle(s)
{
  let position;
  let length;
  
  if(s.length % 2 === 1){
   position = s.length / 2
    length = 1
  } else {
    position = s.length / 2 - 1
    length = 2
  }
  return s.substring(position, position + length)
}

/*

39. There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may 
add your point to the given array!

*/

function betterThanAverage(classPoints, yourPoints) {
  let classAvg = classPoints.reduce((sum, points) => sum + points) / classPoints.length;
   return yourPoints > classAvg ? true : false
 
}


/*

40. Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

function squareDigits(num){
  let changeIt = num.toString().split('').map(number => number ** 2).join('')
  return Number(changeIt)
}



/*

41. You have cultivated a plant, and after months of hard work, the time has come to reap the flowers of 
your hard work. When it was growing, you added water and fertilizer, and kept a constant temperature. It's 
time check how much your plant has grown.

A plant is represented horizontally, from the base to the left, to the end to the right:

---@---@---@
The stem is represented by hyphens -, and the flowers are represented by symbols. A plant always starts with 
the stem, and always ends with flowers.

Four parameters will be given. The four parameters are:

seed (string) - determines the type of flowers generated by the plant.
water (integer) - each unit of water extends the portion of stem between the flowers. It also gives how many 
times the stems + flower clusters should be repeated
fert (integer) - each unit of fertilizer increases the amount of flowers, grouped in clusters
temp (integer) - if the temperature given is in the range of 20°C and 30°C, the plant grows normally, otherwise, 
all the flowers die except for one flower at the end of the stem.
Given the above parameters, your task is to return a string representing the plant.



*/

// had to unlock solutions :(((( //

function plant(seed, water, fert, temp){
  //your code here
  return 20 <= temp && temp <= 30 ? ("-".repeat(water) + seed.repeat(fert)).repeat(water) : "-".repeat(water * water) + seed;
 }


 /* 

 42. In this little assignment you are given a string of space separated numbers, and have to return the 
 highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

 */

function highAndLow(numbers){
  let makeNumbers = numbers.split(' ').sort((a,b) => b-a)
console.log(makeNumbers)

let highest = makeNumbers[0]
let lowest = makeNumbers[makeNumbers.length -1]

let answer = `${highest} ${lowest}`
return answer
}


//// better answer!!! I should have gotten this! ///
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  
}


















 /****************************************************************************************************

///////////////////////////////ARRAY METHODS/////////////////////////////
//         Homework for 5 array methods         ////////////////

******************************************************************************************************/

/*

1. Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth 
(2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, 
he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, 
check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/

String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}




/* 

2. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function 
that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. 
Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case

*/

function isIsogram(str){
  let allLower = str.toLowerCase();
  let arr = allLower.split('');
  let duplicate = arr.filter((letter, index) => arr.indexOf(letter)!== index);
   return duplicate.length > 0 ? false : true;
  }



  /* I made this 2 again because it's an 8 kyu and it was very easy 
  2. Write a function that takes an array of words and smashes them together into a sentence and returns the
  sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each 
  word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

  Example
  ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

  */


    // Smash Words
function smash (words) {
  return words.join(' ')
  
};



/* 

3. Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for 
the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one 
side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never 
empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA" 

*/

function DNAStrand(dna){
  return dna.replace(/[A]/g, "t").replace(/[T]/g, "a").replace(/[G]/g, "c").replace(/[C]/g, "g").toUpperCase()
}


/*

4. Usually when you buy something, you're asked whether your credit card number, phone number or answer 
to your most secret question is still correct. However, since someone could look over your shoulder, you 
don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

*/

function maskify(cc) {
  if(cc.length > 4){
    let last4 = cc.slice(cc.length -4)
    let str = cc.slice(0, -4)
    let arr = str.split('').map(item => item = "#").join('')
    return arr + last4
    
  } else {
    return cc
  }
} 

//// WAYYYYYYYYYYYYYYYY EASIER WAY

function maskify(cc){
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4)
}



/* 

5. ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but 
exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/


function validatePIN (pin) {
  if((pin.length == 4 || pin.length == 6) && Number.isInteger(Number(pin))){
    return true
  } else{
    return false
  }
}

////////// WAIT A SECOND. MINE DID NOT WORK FOR EVERYTHING

function validatePIN (pin) {
  
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);
    
  if(isCorrectLength && hasOnlyNumbers){
    return true;
  }
  
  return false;

}


/*

6. Complete the solution so that it returns true if the first argument(string) passed in 
ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

function solution(str, ending){
  return str.endsWith(ending)
}


/*

7. Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}




/////////////////////////////////ARRAY METHODS/////////////////////////////
//         Homework for 5 array methods         ////////////////


/* 

1. Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

*/

function countBy(x, n) {
  var z = [];
  for(let i = 1; i <= n; i++){
    let answer = x * i
      z.push(answer)
  }
  return z;
}


/*

2. Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 
positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers.sort((a,b) => a-b);
return sorted[0] + sorted[1]
}

/*

3. Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.:

*/

function rowSumOddNumbers(n) {
  return Math.pow(n, 3)
}

/*

4. Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

*/

function oddOrEven(array) {
  let total = array.reduce((sum, count) => sum + count,0) 
  return total % 2 == 0 ? "even" : "odd";
}


/*

5. The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, 
comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the 
one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to 
write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there 
are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, 
return an empty array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]

*/

function removeSmallest(numbers) {
  numbers = numbers.slice(); //copy the array
  numbers.splice( numbers.indexOf(Math.min.apply(null, numbers)),1)
  return numbers;
}





/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                    5 more Array Methods for Homework

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
            

/* 

1. Story:

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't 
give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it 
for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]

*/

function minMax(arr){

  let sorted = arr.sort((a,b) => a-b)
  
  let {0 : a ,[sorted.length -1] : b} = sorted

  return [a, b]
}


/// Easier answer that i should have gotten!!!
/// return [arr.Math.min(...arr), arr.Math.max(...arr)]


/*

2. Write a function to split a string and convert it into an array of words. For example:

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

*/

function stringToArray(string){
  return string.split(' ')
}


/*

3. Don't give me five!

In this kata you get the start number and the end number of a region and should return the count 
of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an 
easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

*/

function dontGiveMeFive(start, end)
{
  let count = 0;
  for(let i = start; i <= end; i++){
    if(i.toString().includes('5') === false){
      count++
    }
  }
  return count
}


/*

4. The two oldest ages function/method needs to be completed. It should take an array of numbers as its 
argument and return the two highest numbers within the array. The returned value should be an array in the
format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there 
are two or more oldest age, then return both of them in array format.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

*/

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  let sorted = ages.sort((a, b) => b-a)
  
  return [sorted[1], sorted[0]]
}


/*

5. Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

*/

var number=function(array){
  /// returns empty array if there are no elements
 if(array.length === 0){
   return []
   
   ///// If it is not empty, it runs map function with letter and index
   ///// Since index starts at 0 for arrays, we must add the 1
 } else {
  return array.map((letter, index) => (index + 1) + `: ${letter}`)
  }
}


///////////////////////////////////////////////////////////////////////
/////////    Homework Questions  //////////////////////////////////////

/* 
1. map()

Map returns the same amount of properties in an array with any changes or elements you ask of it.
Syntax    arr.map(item, index, array)

Ex. Lets say I want to return an array of numbers with all numbers being multiplied by 2
 
Ex. 1
array.map(num => num * 2)           <<<<<<< Will multiply all numbers by return and return updated array

Ex. 2
return numbers.map(names => names.toLowerCase()))  <<<< This will return all elements back with all lowercase letters

Ex. 3
Lets say you have array of objects 

const items = [
  {name: "bike", price: 100},
  {name: "couch", price: 200},
  {name: "television", price: 100}
]

return items.map(item => item.name) <<<< Returns all the item names for you

*/

//////////////////////////////////////////////////////////////////////////////////////////////

/*
2. Reduce()

Reduce evaluates all of the elements in an array and returns a value based on what you ask it to do.
Syntax  arr.reduce(accumulator, current value, current index, source array)

Ex. 1

lets say we want the sum of all numbers in an array

    arr.reduce((sum, current) => sum + current,0)   <<< Adding the 0 starts the count at 0, important to add
    in some cases.

Ex. 2

lets say we want to multiply all of the items together and get the sum

    arr.reduce((sum, current) => sum * current,1)

Ex. 3

This time, we're going to add all the numbers in the array and round it to the nearest whole number
  let numbers = [5.4, 2.1, 5, 0.6]
  arr.reduce((sum, current) => sum + Math.round(current), 1)

*/
////////////////////////////////////////////////////////////////////////////////

/*

3. Filter()

Filter iterates through an array, and it will return the items that pass the qualifications you ask of it

Syntax    arr.filter(item, index, array)

Ex. 1

Lets say i want to return all the numbers that are greater than 4 in an array

   return arr.filter(item => item > 4)

Ex. 2

Now, lets say I want to filter an array of numbers to return numbers greater than 4, but only the elements with
an INDEX greater than 4 as well

    return arr.filter((item, index) => item > 4 && index > 4)

Ex. 3

Lets say we have an array of objects

  const item = [
  {name: "bike", price: 100},
  {name: "couch", price: 200},
  {name: "television", price: 101},
  {name: "microwave", price: 150}

What if I want to grab all the items with a price lower or equal to 100

    item.filter(items => items.price <= 100)
]

*/

///////////////////////////////////////////////////////////////////////////////////////////////

/*

4. forEach()

forEach is a little different than the above because it does not return anything on its own. But, like the forLoop
it iterates through a whole array

Syntax 
arr.forEach(item, index, array)

Ex. 1

let names = ["nas", "jay-z", "gibbs", "benny"]

Grab all the names for the rappers

names.forEach(name => {
  console.log(name)
})

Ex. 2

names.forEach((name, index) => {
  console.log(`${name} is at index ${index}`)
})

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

5. Sort()

Sort can be used to create order in an array. For example, using array.sort() will place all arrays in alphabetical
order if they are all strings. If there is a mixture between numbers and strings, the numbers will be placed first,
followed by the strings in alphabetical order. This can be tricky though if it is just an array of numbers. You 
need to add some extra code to sort numbers, because it always goes off the index 0 in an array name. 15 will
be placed before 2 by just using sort. Lets look at it


Ex. 1

let names = ["joe budden", "Ghostface", "Styles"]

names.sort()  //// will return Ghostface, joe budden, styles


Ex. 2

let numbers = [4, 6, 12, 111, 45]

numbers.sort() //// returns [111, 12, 4, 45, 6]

Ex. 3  
Here, we will add extra code to handle numbers properly with sort

numbers.sort((a, b) => a-b) //// returns [4, 6, 12, 45, 111]


/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

6. slice()

Slice allows you to extract certain elements in an array. You can add one parameter to slice from that index till
the end, or you can add two parameters with the first being the start index and the second being the cutoff point.
(HEADS UP, the cutoff point (second parameter) is not included in the new array.) Also, the original array is not
changed.

Ex. 1

let numbers = [1, 5, 33, 22, 15, 53]

numbers.slice(2) //// return [33, 22, 15, 53]

Ex. 2 

numbers.slice(1, 5)  //// returns [5, 33, 22, 15]

Ex. 3
We can also work from the end by using -numbers for the index

numbers.slice(-3, -1) /// returns [22, 15]

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

7. pop()

Pop will remove the last element from an array! 

let fruits = ["apple", "orange", "watermelon", "kiwi", "peach", "strawberry"]

Ex. 1

fruits.pop() /// if you console log fruits ["apple", "orange", "watermelon", "kiwi", "peach"]

Ex. 2

If we do it again, it will again remove the last item on the current list

Ex. 3

We can assign a variable to the item that is being popped and call on it later

(Lets say we're working with the original array)

let lastFruit = fruits.pop()
console.log(lastFruit) ///// logs "strawberry"
console.log(fruits.pop()) does the same thing


////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

8. shift()

Shift is just like pop, but it instead removes the first element in an array, not the last

let fruits = ["apple", "orange", "watermelon", "kiwi", "peach", "strawberry"]

Ex. 1

Lets remove the first item

fruits.shift() /// if log fruits, we will get ["orange", "watermelon", "kiwi", "peach", "strawberry"]

Ex. 2

If we run it again, it will remove orange since it is now the first item

Ex. 3

Like pop, we can assign a variable to the shift item. (Going off the original array)

let firstFruit = fruits.shift() //// if we log firstFruit we get "apple"
console.log(fruits.shift()) does the same thing


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

9. push

Push is the opposite of pop. It will add a new element to the END of an array

let fruits = ['apple', 'orange', 'banana']

Ex. 1

fruits.push('cherries') /// if we log fruits, it will now return ['apple', 'orange', 'banana', 'cherries']

Ex. 2 

We can also name variables prior to using push, then push that variable in

let newFruit = 'coconut'

fruits.push(newFruit) ////  If we log fruits, we get  ['apple', 'orange', 'banana', 'cherries', 'coconut']

Ex. 3

Another way we can use push, is by add a variable like count, then calling it to get the number of elements in
the array
(origina array)

let count = fruits.push('kiwi')

if we log count we get back 4. IDK why this does that, but it counts all elements and returns the total

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

10. unshift()

Unshift is just like push, only now it adds elements at the BEGINNING of an array

let fruits = ['apple', 'orange', 'banana']


Ex. 1

fruits.unshift('pear') //// if we log fruits, we get  ['pear', 'apple', 'orange', 'banana']

Ex. 2

We can also name variables prior to using push, then push that variable in

let newFruit = 'coconut'

fruits.unshift(newFruit) ////  If we log fruits, we get ['coconut', 'pear', 'apple', 'orange', 'banana']

Ex. 3

if we unshift 2 items, it adds it in the order of the unshift

fruits.shift('pineapple', 'cherry') /// if we log fruits >>> ['pineapple', 'cherry', 'coconut', 'pear', 'apple', 'orange', 'banana']

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*

11. includes()

Includes, like the string method, iterates through in an array to see if what you type in the parameter is 
included somewhere in the array. You can also add a second parameter to set a starting index point. It returns
either true or false

let foods = ["tacos", "burgers", "sandwiches", "pitas"]

Ex. 1

foods.inludes("tacos") //// this will return true

Ex. 2
 
foods.includes("acos") //// tnis will return false

Ex. 3

foods.includes("burgers", -2) //// since starting begins at sandwhiches, this will return false!

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*

12. indexOf()

indexOf() searches for whatever variable you pass in the parameter, and it return for you the index in the array

let foods = ["tacos", "burgers", "sandwiches", "pitas", "tacos"]

Ex. 1

foods.indexOf("burgers") //// will return 1

Ex. 2 
What if the item in the parameter does not exist???

foods.indexOf("chips") //// this will return -1

Ex. 3

On this next example, we're looking for tacos with the parameter of index on 2

foods.index("tacos", 2) //// This will return 4. Because the index starts at 2, the first tacos 
does not fit the requirement. So it selects the index for the next "tacos" AT or AFTER index 2

*/

//////////////////////////////////////////////////////////////////////////////////////////////


/*



/////////////////////////////////////////////////////////////////////////////////////////////////

        /* Practice Questions 



1. One:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//////Answer////////
function multiplyTogether(arr){
  return arr.reduce((sum, currentNum) => sum * currentNum, 1)
}

///////////////////////////////////////////////////////////////////////////////////////////

2. Two:
You will be given an array of all the family members' ages, in any order. The ages will be given in 
whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with 
[youngest age, oldest age, difference between the youngest and oldest age].

//////////////////////answer

function oldYoung(arr){
  let newArr = []
  let youngest = Math.min(...arr)
  let oldest = Math.max(...arr)
  let difference = oldest - youngest;
  newArr.unshift(difference)
  newArr.unshift(oldest)
  newArr.unshift(youngest)
  return newArr;
  
}

///////////////////////////////////////////////////////////////////////////////

Three:
Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
Example:
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6

/////Answer//////////

function highAndLow(arr){
  let sorted = arr.sort((a,b) => a-b)
  sorted.shift()
  sorted.pop()
  return sorted.reduce((sum,num) => sum + num,0)
}

/////////////////////////////////////////////////////////////////////////////////////////////////

/* 

/////////////////////////////////New Week/////////////////////////////////////////////////////////

/*



You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving 
the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


*/

function sortArray(array) {
  let odd = array.filter((item) => item % 2 !== 0).sort((a,b) => a - b)
  return array.map((item) => item % 2 ? odd.shift() : item )
  }

  
  

////////////////////////////////////////////////

            /* Codewars still going */

/*

8. Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1') 

*/

function removeUrlAnchor(url){
  /// used search method to find the 
  let theIndex = url.search("#")
  if(url.includes("#")){
    return url.slice(0, theIndex )
     } else {
       return url
     }
    
}


/*

9. Happy Holidays fellow Code Warriors!
Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique 
alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf 
then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from 
consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up 
to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

*/

function sortGiftCode(code){
  //TODO 
  return code.split('').sort().join('')
}


/*

10. write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

*/

function stringy(size) {
  let str = "";
  for(let i = 0; i < size; i++){
   if(i % 2 === 0){
     str += "1"
   } else {
     str += "0"
   }
  }
  return str
  
}



/*

11. A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

*/

var isSquare = function(n){
  for(let i = 0; ; i++){
    let square = i * i;
    if(square === n){
      return true
    } else if(square > n){
      return false
    }
  }
     }

     ///// much easier solution
     function isSquare(n) {
      return Math.sqrt(n) % 1 === 0;
    }

  
  /*

  12. Your task is to make a function that can take any non-negative integer as an argument and return it with 
  its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

  */

function descendingOrder(n){
  let stringIt = n.toString();
  let sorted = stringIt.split('').sort((a,b)=> b - a).join('');
  return Number(sorted)
}


/*

13. Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. 

*/

function findShort(s){
  let theLength = s.split(' ').map(words => words.length).sort((a,b) => a-b)
  return theLength[0]
  
}


/*

14. Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean 
and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
  let arrayStr = str.split('');
  let xLength = arrayStr.filter((letter) => {
    if(letter == "x" || letter == "X"){
      return letter
    }
  })
  let oLength = arrayStr.filter((letter) => {
    if(letter == "o" || letter == "O"){
       return letter
       }
  })
  if(xLength.length == oLength.length){
    return true
  } else {
    return false
  }

}

//// should of thought of this answer
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


function xOString(str){
let x = str.match(/x/gi)
let o = str.match(/o/gi)
return(x && x.length == o && o.length);
}


/*

15. In this kata you will create a function that takes a list of non-negative integers and strings and returns 
a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

function filter_list(l) {
  return l.filter(element => typeof element == 'number')
  } 


  /* 
  
  16. Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and 
numeric digits that occur more than once in the input string. The input string can be assumed to contain 
only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

  */

function duplicateCount(text){ ////// could not figure this out, found answer online
  return text.toLowerCase().split('').filter((val, i, arr) => {
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}



/*

17. In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 
2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the 
town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter 
percent is 2 you have to convert it to 0.02.

*/

function nbYear(p0, percent, aug, p) {
  // Initialise array.   
  let finalCatch = []
  let percentage = percent / 100;
  
  for(var p0; p0 < p; p0+=p0*percentage+aug){ //// had to use var p0, would not work if i put let p0 in loop
      let currentValue = p0 + p0 * percentage + aug;
       finalCatch.push(currentValue);
  }
  return finalCatch.length;
}

/////SHOULD HAVE GOTTEN THIS ANSWER

function nbYear(p0, percent, aug, p) {
  let count = 0
  while(p0 < p){
    p0 += p0*(percent/100)+aug;
    count++
  }
return count
}

/*

18. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and 
including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

*/

function getSum( a,b )
{
  if(a === b){
    return a
  } else if(a > b){
    let sum = 0
    for(let i = b; i <= a; i++){
      sum += i
  }
    return sum
  } else if(b > a){
    let sum = 0
    for(let i = a; i <= b; i++){
      sum += i
    }
    return sum
  }
  }

  /* 
  
  19. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer 
  number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
and month 11 (November), is part of the fourth quarter.

  */

const quarterOf = (month) => {
  // Your code here
   if(month >= 1 && month <= 3){
     return 1
  } else if(month >= 4 && month <= 6){
    return 2
    } else if(month >= 7 && month <= 9){
      return 3
    } else if( month >= 10 && month <= 12){
       return 4
      }
}

/*

20. Write function bmi that calculates body mass index 
(bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {
  let total = weight / (height ** 2)
  if(total <= 18.5){
    return "Underweight"
  } else if(total <= 25){
    return "Normal"
  } else if(total <= 30){
    return "Overweight"
  } else if(total > 30){
    return "Obese"
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*                                                   Objects                                           /*
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

21. Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding 
countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you 
already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy 
and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you 
have it in your database. It should default to English if the language is not in the database, or in the event 
of an invalid input.

The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied

*/

function greeting(language){
  let database = {
    english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
  }
  return database[language] === undefined ? "Welcome" : database[language]
}


/*

Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

*/ 

var Ball = function(ballType) {
  // your code goes here
  if(ballType === undefined){
    this.ballType = "regular"
  } else{
    this.ballType = ballType
  }
  
};

/*

Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints. Each
pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first 
index will be greater than the previous and that there will be no duplicates.

Task
Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum 
value.

Example
Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8

*/

function pipeFix(numbers){
  let newArray = []
  let lowest = Math.min(...numbers)
  let highest = Math.max(...numbers)
  
  for(let i = lowest; i <= highest; i++){
    newArray.push(i)
  }
  return newArray
}


/*

Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a ? true : false
}


/*

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/


function longest(s1, s2) {
  // your code
  let combined = [...s1, ...s2].sort()
  
  let unique = [...new Set(combined)].join('')
  return unique
}


/*

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is 
non-negative.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect square

*/

function findNextSquare(sq){
  if(Math.sqrt(sq) % 1 !== 0 ? -1){
    return -1
  } else {
    let nextSq = Math.sqrt(sq) + 1;
    return nextSq ** 2
  }
}

/*

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers 
having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the 
second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:

arithmetic(5, 2, "add")      => returns 7
arithmetic(5, 2, "subtract") => returns 3
arithmetic(5, 2, "multiply") => returns 10
arithmetic(5, 2, "divide")   => returns 2.5
ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2

*/

function arithmetic(a, b, operator){
  if(operator === "add"){
    return a + b;
  } else if(operator === "subtract"){
    return a - b;
  } else if(operator === "multiply"){
    return a * b;
  } else {
    return a / b
  }
}

///another solution using case switch

function arithmetic(a, b, operator)
  switch(operator){
    case "add":
      return a+b;
      break;
    case "subtract":
      return a-b;
      break;
    case "multiply":
      return a*b;
      break;
    case "divide":
      return a/b;
      break;
  }

/*

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

function stray(numbers) {
  let chips = numbers.sort((a,b) => a - b)
  
  if(chips[0] === chips[1]){
    return chips[chips.length -1]
  } else if(chips[0] !== chips[1]){
    return chips[0]
  }
}


/*

A challenge i was given in an interview. I did not get it right! The had to help me through it.

Please create a function that takes in a string, with that string, break down the different characters that in the
string, and return how many occurences there are of each character in an object.

*/

  function getEachCharacterCount(sentence){
    let arrayIt = sentence.toLowerCase().split('')
    let dictionary = {}

    arrayIt.forEach(letter => {
        if(dictionary[letter]){
      let count = dictionary[letter]
      dictionary[letter] = count + 1
        } else {
          dictionary[letter] = 1
        }
    })
      console.log(dictionary)
  }


  /*

  Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can 
be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

*/

function friend(friends){
  return friends.filter(friend => friend.length == 4)
}

/*

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with 
an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, 
handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information for a single 
potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List<List>

Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member 
is to be placed in the senior or open category.

Example Output
["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/


function openOrSenior(data){ ///// How I tried to do it
  return data.map((d) => (d[0] > 54 && d[1] > 7) ? 'Senior' : 'Open')
}

function openOrSenior(data){  //// good solution I saw online
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
}

/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples
divisors(4)  = 3  // 1, 2, 4
divisors(5)  = 2  // 1, 5
divisors(12) = 6  // 1, 2, 3, 4, 6, 12
divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30
*/

function getDivisorsCnt(n){
    let divisors = [];
  for(let i = 1; i <= n; i++){
    if(n % i === 0){
     divisors.push(i)
    }
   
  }
  return divisors.length
}

/*

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

*/

function noOdds( values ){
  return values.filter(num => num % 2 == 0)
}


/*

Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

maxMultiple (10,50)  ==> return (50)
Explanation:
(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

maxMultiple (37,200) ==> return (185)
Explanation:
(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .

Playing with Numbers Series
Playing With Lists/Arrays Series
Bizarre Sorting-katas
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!

*/

function maxMultiple(divisor, bound){
  let numbers = []
  for(let i = 1; i <= bound; i++){
    if(i % divisor == 0){
      numbers.push(i)
    }
  }
  return numbers[numbers.length -1]
}

/*

Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, function should returns 0

Examples

sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4
This is the first kata in the series:

Sum of a sequence (this kata)
Sum of a Sequence [Hard-Core Version]

*/

const sequenceSum = (begin, end, step) => {
  let count = 0
  for(var i = begin; i <= end; i+=step){
     count += i 
  }
  return count
};

/*
  Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array 
  or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
  
*/

function solution(nums){
  if(nums == null){
    return []
  } else{
    return nums.sort((a,b)=> a-b)
  }
}


/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                           July Daily Standup
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
July 7, 2021

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/


function squareSum(numbers){
  return numbers.map(num=> num ** 2).reduce((sum, num)=> sum + num,0)
}

/*

July 8, 2021

Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],
[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

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


*/

function sumMix(x){
 return x.reduce((sum, acc) => sum + Number(acc),0)
}




/*Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the 
squares of each element in a is strictly greater than the sum of the cubes of each element in b.

*/



function solution(a, b){
  firstSum = a.reduce((sum, el) => sum + el**2,0)
  secondSum = b.reduce((sum, el) => sum + el**3,0)
  return firstSum > secondSum
} //i think this is it

console.log(solution([1,3,3,5], [2,3,4])) //44 vs 
console.log(solution([1,2,3], [2]))


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

Create a function that takes in a string and removes all of the empty spaces. Here's the catch, we have to create
two solutions, with one using the filter method!

*/

function removeSpaces(str){ /// easiest way!!!
  return str.split(' ').join('')
}



function removeSpaces2(str){ /// easiest filter way
  return str.split('').filter(letter => letter !== " ").join('')
}

function removeSpaces3(str){ ///// using match in your filter
  return str.split('').filter(letter => letter.match(/[a-z]/gi)).join('')
}

function removeSpaces4(str){ /// using replace
  return str.replace(/\s/g, '')
}


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

July 12, 2021

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

////

/* 

make every other letter capitalized

*/

function everyOther(str){
  let newArr = str.split('')
  return newArr.map((letter,i)=> i % 2 ? letter.toUpperCase() : letter.toLowerCase()).join('')
}

/*

6 kyu

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

function findOdd(A) {
  //happy coding!
  let dictionary = {}
  let numberIt = A.map(num => num.toString())
  numberIt.forEach(num => {
    if(dictionary[num]){
      let count = dictionary[num]
      dictionary[num] = count + 1
    } else {
      dictionary[num] = 1
    }
  })
  return Number(Object.keys(dictionary).filter(num => dictionary[num] % 2))
}

/*
Create a function that takes in an array, and a target as its parameters. The arrays will contain a set of numbers,
and in that array, two of those numbers, when added, will add up to the target number that is in the parameter. 
Grab the the indeces of both numbers that equal the target number.

*/

function getTarget(arr, target){
  
}


/*

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of 
each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
Let's assume that all numbers in the input will be integer values.

*/

function sumDigits(number) {
  return number.toString()
    .replace('-',' ')
    .split('').map(num => Number(num))
    .reduce((acc,num)=> acc+num,0)
}

/* 

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
	// 
  return s.toLowerCase().split('')
    .map((letter, index, arr)=> letter.repeat((index) + 1) + '-')
    .map((letter, index, arr)=> letter.charAt(0).toUpperCase() + letter.slice(1))
    .map((letter, index, arr)=> arr[arr.length -1] ? letter.slice(0, letter.length -1) : letter)
    .join('-')
                                    
  }


  /*

  Number of people in the bus
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which 
represent number of people get into bus (The first item) and number of people get off the bus (The second item) 
in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are 
probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the 
return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.

*/

var number = function(busStops){
  let gotOn = busStops.map(num => num[0]).reduce((acc, num) => acc + num)
  let gotOff = busStops.map(num => num[1]).reduce((acc, num) => acc + num)
  
  return gotOn - gotOff
}

/*

You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any 
string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string

*/


function mxdiflg(a1, a2) {
  // your code

if(a1.length == 0 || a2.length == 0){
  return -1
}
let x = a1.sort((a, b) => a.length - b.length)
let y = a2.sort((a,b) => b.length - a.length)

let bigY = y[0].length - x[0].length
let bigX = x[x.length - 1].length - y[y.length - 1].length

 if(bigY > bigX){
   return bigY
 } else{
   return bigX
 }
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

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

// Return an array
function fizzbuzz(n){
  let empty = []
for(let i = 1; i <= n; i++){
  if(i % 3 == 0 && i % 5 === 0){
    empty.push("FizzBuzz")
  } else if(i % 5 === 0){
    empty.push("Buzz")
  } else if(i % 3 == 0){
    empty.push("Fizz")
  } else{
    empty.push(i)
  }
}
  return empty
}


/*

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined 
as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the 
Fighter objects.

Example:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}


*/

function declareWinner(fighter1, fighter2, firstAttacker) {
  const a = [fighter1, fighter2].find((fighter)=> fighter.name === firstAttacker)
  const b = [fighter1, fighter2].find((fighter)=> fighter.name !== firstAttacker)

  return Math.ceil(b.health / a.damagePerAttack) <= Math.ceil(a.health / b.damagePerAttack) ? a.name : b.name
}


/*

Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0

*/

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var sum = 0;
    var str = "";
    if (count === 0) {
      return "0=0";
    } else if (count < 0) {
      return count + "<0";
    } else {
      for (var i = 0; i < count; i++) {
        sum += i;
        str += i + "+";
      };
    sum += count;
    str += count + " = " + sum;
    return str;
    };
  };

  return SequenceSum;

})();


/*

Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers 
are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the 
left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only 
integers.

Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) 
adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. 
An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise 
an Issue if you see such a list being tested.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the 
input array.

*/

function arrSorted(arr){ 
 let sortedArr = arr.slice(0) /// here we clone the arr using slice. If I used sort here, it would mutate original arr
 sortedArr.sort((a,b) => a-b) /// here we sort them in ascending order on new arr, leaving original untouched
 return arr.every((num, index) => num == sortedArr[index]) /// this is tricky, but its looping to see if every
                                                          /// num in the original array, from Index 0, matches
                                                          /// the sortedArr num, starting at index 0.
}

//other good solutions

function arrSorted2(arr){
  for(let i = 0; i <= arr.length-1; i++){
    if(arr[i] > arr[i+1]){
      return true
    } else {
      return false
    }
  }
}

// my fav solution

function arrSorted3(arr){
  return arr.join('') === arr.sort((a,b) => a-b).join
}


/*

ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence 
converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create 
this V A P O R W A V E effect.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

*/

function vaporcode(string) { /// got it myself but took a while
  let sent = ''
  for(let i = 0; i < string.length; i++){
    if(string[i] !== ' ')
    sent += string[i] + "  "
  } 
  return sent.toUpperCase().trim()
  }


  /*

Aug 28, 2021 (self practice kata 7)

  The aim of this kata is to split a given string into different strings of equal size (note size of strings is 
  passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive

*/

function splitInParts(s, partLength){
  let newStr = '' /// created an empty string to return new one with partLength space
  for(let i = 0; i < s.length; i++){ /// reg for loop
    if(i % partLength === 0){ //// here, we create the condition for where we want the space
      newStr += ` `+s[i] /// the kata asks for a space before the letter to be added to empty str
    } else {
      newStr += s[i]  /// if its not a letter that meets the condition, add it to string as is
    }
  }
  return newStr.slice(1) /// I couldnt get the newStr to return without a space at index 1 so i just sliced it at 1
}

/*

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

*/

var number=function(array){
  let newArr = []
  if(array.length === 0){
    return []
  } else {
  for(let i = 0; i <= array.length -1; i++){
    newArr.push(i+1 + ": " + array[i])
    }
  }
  return newArr
}

//// easier solution

var number=function(array){
  return array.map((letter,index,arr) => index+1 + `: ${letter}` )
}

/*

Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

*/
/// The function will take a string. The string may be filled with letters and non alphabet characters.
/// We need to return the string in reverse. And we also need to remove non alphabet letters in the string
/// that we return

function reverseLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz' //// created a library of items that are only alphabet characters
  
  return str.split('') /// split the str into an array, character by character
            .filter(letter => alphabet.includes(letter)) /// here we filter through and only return items in the alphabet
            .reverse() //// we then reverse the array as 
            .join('')
}


/*

Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple 
of three.

Return n if the input is already a multiple of three, and return null/nil/None/-1 if no such number exists.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9

*/

function prevMultOfThree(n){
  let strNum = n.toString()
 return  n === 0 ? null : n % 3 == 0 ? n : prevMultOfThree(Number(strNum.slice(0, strNum.length-1)) ) /// you can remove strNum.lenght -1 and just use -1 
}


/*

Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits 
only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

*/

function minValue(values){
  let newValues = [...new Set(values)] /// This will remove all the duplicates and return a new arr with numbers
                                        /// only appearing once
  return Number(newValues.sort((a,b)=> a-b).join(''))  /// here we sort the numbers from least to greatest
}


/*

