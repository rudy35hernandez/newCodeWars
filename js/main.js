

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

5 String Methods for class!!!!

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




