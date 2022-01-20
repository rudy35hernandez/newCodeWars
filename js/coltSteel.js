// TIME COMPLEXITY //

/// Problem with time complexity, not reliable because you will most likely get different times with different
/// machines. Even the same machine will record different times.
/// For fast algo's, speed measurements may not be precise enough

//// BIG O SHORTHANDS ///

// 1. Arithmic operations are constant
// 2. Assignments are constant
// 3. Accessing elements in an Array (by index) or object (by key) is constant. Ex. arr[3]
// 4. In a loop, the complexity is the length of the loop times complexity of whatever happens inside the loop

/// Time Complexity (time it takes)

/// Space Complexity (the amount of memory taken up)

// Most primitives (booleans, numbers, undefined, null) are constant space
// Strings require O(n) space (where n is the string length)
// Reference types are generally O(n), where n is the length (for arrays), or the number of keys (for objects)

/////////////////////// Logarithms ////////////////////////

function hashMap(str) {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (hash[char] > 0) {
        hash[char]++;
      } else {
        hash[char] = 1;
      }
    }
  }
  return hash;
}

console.log(hashMap("who you think you messing with"));

//// refactored

function charCount(str) {
  let obj = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

/* create a function that takes in two arrays of numbers, if every number in arr1 is squared, and if every number
  appears in arr2 (1 for each), then it will return true. The order of the numbers do not matter.
  
  ex. same([1,2,3], [9, 1, 4]) /// true
  ex. same([1, 3, 1], [1, 9]) // false

  */

/// this is O(n2)
function same(arr1, arr2) {
  if (arr1.length !== arr2) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

/// refactored to make it O(n)

//////// FREQUENCY COUNTER //////////////////

function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2 = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
/////////////////////////////////////////////////////////////////////////////////////////////////



//////// ANAGRAM CHALLENGE WITH FREQUENCY COUNTER PATTERN ////////////


/////////////////////////////////////////////////////////////////////////////////////////////////

/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram
  is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
  You must use the frequency counter.

  */

function anagramChech(str1, str2) {
  /// first, easiest way to prove false is to check if the length of both strings do not match
  if (str1.length !== str2.length) {
    return false;
  } else {
    let frequency = {};
    for (let val of str1) {
      frequency[val] = (frequency[val] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      if (!frequency[letter]) {
        return false;
      } else {
        frequency[letter] -= 1;
      }
    }
    return true;
  }
}

// easier way to solve
function anagram2(str1, str2) {
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}

console.log(anagram2("what", "hWta"));

/* the next pattern that is covered is the MULTIPLE POINTERS PATTERN

  A challenge that embodies this is is the sumZero algorith problem.

  Details: Write a function called sumZero which accepts a sorted array of integers. The function should find the 
  FIRST pair where the sum is 0. Return an array that includes both values that sum to 0 or undefined if a pair
  does not exist.

  */

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////


  //////////////// MULTIPLE POINTERS START TO END ////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sumZero(arr) {
  // naive solution where you run a loop inside of a loop. Time complexity would be O(n**2) / not good
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      } else {
        return undefined;
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]);
console.log(sumZero([-2, 0, 1, 3])); // should return undefined
console.log(sumZero([1, 2, 3])); // should return undefined

//////////////////////////////////////////////////////////////////////////////////////////////



/// BELOW IS THE OPTIMAL SOLUTION USING MULTIPLE POINTERS PATTERN



//////////////////////////////////////////////////////////////////////////////////////////////
function sumZero2(arr) {
  /// first we initiate our start, for left we make it 0 (will be index 0)
  let left = 0;
  /// for the variable right, we make it arr.length - 1 (-1 because our index starts at 0 for arrays)
  let right = arr.length - 1;
  /// first we create the condtion, if left is less than right, run the following operations
  while (left < right) {
    /// We are creating a variable named sum that will add arr[left] and arr[right]
    let sum = arr[left] + arr[right];
    /// if the first iteration is 0, we found our solution and we return both numbers
    if (sum === 0) {
      return [arr[left], arr[right]];
      /// if the two numbers were NOT found, the condition here is if the sum of the two numbers are greater than 0
    } else if (sum > 0) {
      /// here, we subtract one from right, meaning we go down 1 index to see if its the number we need to make 0
      right--;
      /// the last condtion is if the sum was less that 0 (a negative number), we move 1 index up on the var left
    } else {
      left++;
    }
    /// If it does not find the answer, it loops all over again until left is no longer less that right
  }
}

/// time complexity for this is O(n)

/////////////////////////////////////////////////

/* Next algorithm is to find unique values in an array. For this question, all the values will be integers. 
Only return the values that appear once. 
We will be using the multiple pointers method again, only this time we're not going from left to middle and right to
middle. This time both our pointers will start from the left side 

DETAILS: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values
in the array. There can be negative numbers in the array, but it will always be sorted.
*/


/// I found many solutions, and I will type them out, then I will highlight his multiple pointers solution


function countUniqueValues(arr){
  let total = []
  
  for(let i = 0; i < arr.length; i++){
      if(!total.includes(arr[i])){
          total.push(arr[i])
      }
  }
  return total.length
}

function countUniqueValues(arr){
  let unique = [...new Set(arr)]
  return unique.length
}

///////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////// MULTIPLE POINTERS BOTH AT THE BEGINNING //////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////



/// Colt Steeles solution ///

/// set i = 0 to start the first pointer
/// set j to 1 and run a for loop
/// Check to see if arr[i] !== arr[j]
/// If it doesnt we move i up one and make arr[i] equal arr[j]

///      i
/// ex. [1, 1, 2, 3, 3, 3, 4]  
///         j

////  the first iteration does not meet the condition, so j skips to the next number which is 2, now it does
////  meet the condition so i moves up one index and changes it to 2 because arr[i] = arr[j]
//// i will ultimately reach index 3, so we will return i + 1 since arrays start at 0

function countUniqueValues(arr){
  let i = 0;

  for(let j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// SLIDING WINDOW //////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Find the the maxSubArraySum [1,2,5,2,8,1,5], 2 (largest sum of two consecutive numers) (8,2)

/// Brute force solution

function maxSubArraySum(arr, num){

  if(num > arr.length){
    return null
  }

  let max = -Infinity;
  for(let i = 0; i < arr.length - num + 1; i++){
    temp = 0;
    for(let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if(temp > max){
      max = temp
    }
  }
  return max
}






// Find the longest sequence of unique characters ("hellothere") /// (lother) would be the longest 

