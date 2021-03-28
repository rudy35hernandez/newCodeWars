

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

  
  /*

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
                        Strings codewars for week May 18 - May 25

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  */

  /*

  1. It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is 
  going to make the most money?

  Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

  If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money 
  and must receive only his stated salary.

  Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and 
  Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust). 
  */

  function bonusTime(salary, bonus) {
// your code here
function bonusTime(salary, bonus) {
  // your code here
  let more = salary * 10;
    return bonus ? `£${more}` : `£${salary}`
  } 
}

/*

2. Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

function sumMix(x){
  return x.map(item => Number(item)).reduce((a,b) => a + b, 0)
}


/*

/*

3. An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

var isAnagram = function(test, original) {
  let string1 = test.toLowerCase().split('').sort().join('')
  let string2 = original.toLowerCase().split('').sort().join('')
  return string1 == string2 ? true : false
};


/*

4. Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

var capitals = function (word) {
	let arr = word.split('')
  return arr.map((letter, index) => letter === letter.toUpperCase() ? index : letter).filter(item => Number.isInteger(item))
};


/*

5. Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

*/  

function capitalize(s){
  let array = [];
  let odds = s.split('').map((item, index) => index % 2 ? item : item.toUpperCase()).join('')
  let even = s.split('').map((item, index) => index % 2 !== 0 ? item.toUpperCase() : item).join('')
  array.unshift(even)
  array.unshift(odds)
  return array
};

/*

6. anotha 1


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                             String methods, descriptions and examples of them                            //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/*

1. charAt()

Description: charAt is a string method aimed to close in on a particular character in a string. When you put insert
a number in the parameter, that number is the index of the character in the string.

Ex. 1

let name = 'Rudy'

name.charAt(2) //// returns 'd' because d is at index 2.

Ex. 2

name.charAt(6)  //// returns '' because there is no character at the index

Ex. 3

You can use it in a template literal as well

let sentence = `The name ${name} has the letter ${name.charAt(1) at index 2.`}

*/

//////////////////////////////////////////////////////////////////////

/*

2. charCodeAt()

Description: This string method returns an integer between 0 - 65535 representing the UTF-16 code unit at the
given index.

Ex. 




*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

3. concat()

Description: concat is used to combine strings; can be multiple

Ex.1

let string1 = 'Rudy'

let combine = string1.concat(' Hernandez') /// This will return 'Rudy Hernandez' if you call on combine

Ex. 2

We can also combine two variables as well

let string2 = ' Hernandez'

let combine2 = string1.concat(string2) /// if combine2 logged, we'll get 'Rudy Hernandez'

Ex. 3
Now, lets say we want to concat more than 2 strings together

let string1 = 'Hello'
let string2 = 'World'

let greeting = string1.concat(' ', string2) /// if greeting is logged, we will get 'Hello World'

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

4. includes()

Description: This method is very similar to the array method. Like the array method, it iterates through the entire
string to see if what's passed in the parameter, is in the string. It will return a boolean. You can add two
parameters, (searchFor, startFromIndex)

Ex. 1

let name = 'Rudy Hernandez'
console.log(name.includes('u')) returns true because u is in the string

Ex. 2

console.log(name.includes('h')) /// This will return false! The includes method is lowerCase/upperCase specific

Ex. 3

You can also use a variable for the search parameter

let sentence = "I really love eating at new places"
let word = 'love'

console.log(sentence.includes(word, 10)) /// returns false, because 'love' is not included after index 10. IF
I replace the 10 with nothing, or a 0, it will return true.

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

5. indexOf()

Decription: indexOf() takes in two parameters, the first being the specific item you're searching for, and the
index start. If you do not include an index start, it defaults to 0. This will return the index number

Ex. 1

let greeting = "Hello everyone, welcome to my home!"
console.log(greeting.indexOf('e')) /// This will return 1, because 'e' appears for the first time at index 1.

Ex. 2

console.log(greeting.indexOf('e', 3)) /// This will return 6, because it's the index of the first 'e' after index
3.

Ex. 3
let word = "home"
console.log(greeting.indexOf(word)) /// This will return 30. It is the index at which 'home' starts.

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

6. match()

Description: match is a string method that takes in a regex (regular expression object), it looks for the items in
the string, it then returns those items in an array

Ex. 1

let name = 'Rudy Hernandez'
let cap = /[A-Z]/g
console.log(name.match(cap)); //// will return ["R", "H"] because those are the two capital letters in name.

Ex. 2
let cap1 = /Ru/g
console.log(name.match(cap1)) returns ["Ru"]

Ex. 3
let cap2 = /ru/g
console.log(name.match(cap2)) returns null because there is no part in the string where 'ru' exists.

HOWEVER

let cap3 = /[ru]/g
console.log(name.match(cap3)) // returns ['u', 'r'] It finds 'u' first because it comes up first, then it finds r
in hernandez.

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

7. repeat()

Description: The parameter takes in a value which is a number, that value is the amount of times you want that 
string to be repeated

Ex. 1

let again = 'say it again! '
console.log(again.repeat(3)) /// returns 'say it again! say it again! say it again! '

Ex. 2

console.log(`I love it when you say that! ${again.repeat(3)}`)

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

8. replace()

Description: replace takes in two parameters (string/regex, newSubString/replacerFunction). The first parameter
is what you wish to replace. The second is what you wish to replace it with. It only replaces the FIRST match 
unless your regex has g, the global search

Ex. 1

let sentence = 'I really hate it when people talk at the movies; people should know to be respectful'
console.log(sentence.replace('people', 'jerks')) 

returns "I really hate it when jerks talk at the movies; people should know to be respectful"

Ex. 2

const regex = /People/i
console.log(sentence.replace(regex, 'jerks'))

returns "I really hate it when jerks talk at the movies; people should know to be respectful"

//This one is pretty tough when you start getting in the replacerFunction//

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

9. search()

Description: the search() method takes in regex as a parameter. When the first item is found that matches that 
regex, it will return the index number for you. Similar to indexOf IMO

Ex. 1

let name = 'ruDy HernanDez'
let firstIndex = /[A-Z]/g
console.log(name.search()) ///// This returns 2, because index 2 is 'D', the first capital letter found in the name

Ex. 2

const period = /[.]/g
console.log(name.search(period)) /// returns -1 because it doesnt exist


*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

10. slice()

Description: slice() allows two parameter, the first being the starting index, followed by where you want the slice
to end. If you only use one parameter, it uses that number as the starting Index, all the way till the end of the
string.

Ex. 1

let name = 'Rudy Hernandez'
let firstName = name.slice(0, 4) <<<<<<<<<<<<<< using two parameters
console.log(firstName)  //// this will return 'Rudy'

Ex. 2

let lastName = name.slice(5)   <<<<<< Using one parameter
console.log(lastName) ///// returns 'Hernandez'   

Ex. 3

You can also iterate backwords by using a negative number
console.log(name.slice(-9)) /// will also return 'Hernandez'

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

11. split()

Description: This one has been one of the most used methods for codewars. Split will split a string into an array 
filled with substrings in correct order.
The type of split depends on the pattern in the parameter you set forth. You can add a second parameter to add
a limit of substrings in the new array.

Ex. 1

let name = 'Rudy Hernandez'
console.log(name.split('')) /// returns ['R', 'u', 'd', 'y', '', 'H','e','r','n','a','n','d','e','z']

Ex. 2

console.log(name.split(' ')) /// returns ['Rudy', 'Hernandez'] since the split appears at the empty space ' ',
thats where the split begins.

Ex. 3

console.log(name.split(' ', 1)) /// returns ['Rudy'] because the limit is 1 element for the array

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 

12. substr()

Description: This method seems to be very similar to slice. Like slice, substr can take in two parameters, the
first being the start index, and the second being where you want to stop. It will create a substring with the 
startIndex being the first character, and the character in the index before the stopIndex. If only one parameter
is passed, it will take it as the startIndex and it will return everything at and after that index.

Ex. 1

let sentence = "I love to play basketball"
console.log(sentence.substr(2)) /// returns 'love to play basketball'

Ex. 2

let name = 'Rudy'
console.log(`${name} ${sentence.substr(2)}`) /// returns 'Rudy love to play basketball'

Ex. 3
Like slice, this can also take a negative integer to start backwards

console.log(sentence.substr(-4)) /// returns 'ball'

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

13. toLowerCase()

Description: toLowerCase() is a string method that will change your string's characters lower-case. This method
is very straight forward

Ex. 1

let name = "Rudy HernanDEz"
console.log(name.toLowerCase()) /// returns "rudy hernandez"

Ex. 2

let changeCase = name.toLowerCase() 
console.log(changeCase) /// again, this returns "rudy hernandez", just showing you can use it while assigning a new
variable.

Ex. 3

let backwardsName = "zEDnanreH yduR"

console.log(backwardsName.split('').reverse().join('').toLowerCase()) //// This returns "rudy hernandez", just
showing that it could be used with other methods in the same line.

*/

/*

14. toUpperCase()

Description: This method is exactly like the one before, only this time we change strings to uppercase letters.

Ex. 1

let name = 'rudy hernandez'
console.log(name.toUpperCase()) //// returns "RUDY HERNANDEZ"

Ex. 2 

let upperCaseName = name.toUpperCase() 
console.log(upperCaseName) //// returns "RUDY HERNANDEZ"

Ex. 3
Lets say i ONLY want to change the second character of each word to upperCase. Any other current uppercase letters
are left alone.

let sentence = "the only time you should not push to github, is if you're out getting to not git got"

console.log(sentence.split(' ').map(item => item.substr(0,1) + item.charAt(1).toUpperCase() + item.substr(2)).join(' ')) 

/// returns
'tHe oNly tIme yOu sHould nOt pUsh tO gIthub, iS iF yOu're oUt gEtting tO nOt gIt gOt'

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

15. trim()

Description: This method is used to remove blank spaces from a string.

Ex. 1

let greeting = "  Hello everyone, welcome to our lovely home.     "
console.log(greeting.trim())  /// returns "Hello everyone, welcome to our lovely home."

Ex. 2
What if I just want to erase the beginning?
console.log(greeting.trimStart()) ///  "Hello everyone, welcome to our lovely home.     "

Ex. 3
What if I only want to delete the blank space at the END?
console.log(greeting.trimEnd()) /// returns "  Hello everyone, welcome to our lovely home."
*/

