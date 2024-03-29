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
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
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

//////// Easiest solution IMO
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


////////////////////////////////////////////////////
////// CORRECT SLIDING WINDOW SOLUITON  ///////////
//////          O(n) solution           ///////////
////////////////////////////////////////////////////

/// With this solution, instead of adding all the numbers with each iteration, were only going to subtract
/// the first index of the num group, then add the next number in num group.
/// 
/// Ex.                 ([1, 4, 32, 7, 3, 6], 3)
/// first iteration-      c  c  c   =  37
/// second iteration-    -c        + c = 43
/// All we did was subtract 1, then added 7, instead of adding 4+32+7 all over again

function maxSubArrSum2(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num){
    return null
  }
//// This is the first iteration, and we only go as far in the index as 1 number before num (32)
  for(let i = 0; i < num; i++){
    maxSum += arr[i]
    //// maxSum becomes 37
  }

  tempSum = maxSum;
  /// tempSum becomes 37
  for(let i = num; i < arr.length; i++){
    //// We start our loop at index 3 which is (7)
    tempSum = tempSum - arr[i - num] + arr[i];
                  ///arr[3-3] = arr[0] which is 1
    /// 43 = 37 - 1 + 7  /// we get 1 because arr[3 - 3] === index 0 which is 1
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
};




// Find the longest sequence of unique characters ("hellothere") /// (lother) would be the longest 






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////// DIVIDE AND CONQUER ALGORITHMS ////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* 

Given a sorted array of integers, write a function called search, that accepts a value and returns the index
where the value passed to the function is located. If the value is not found, -1

*/

// MY SOLUTION, VERY EASY

function search(arr, val){
  if(!arr.includes(val)){
    return -1
  } else {
    return arr.indexOf(val)
  }
}


///////////////// COLT STEELS DIVIDE AND CONQUER SOLUTION //////////////////////////
//////////// THIS ONLY WORKS IF ARRAY IS SORTED!!!!!!!!!!!!!!////////////////////

function search(arr, val){
  let min = 0;
  let max = arr.length - 1;

  while(min <= max){
    let middle = Math.floor((min + max) / 2)
    let currentElement = arr[middle]
    
    if(array[middle] < val){
      min = middle + 1
    } else if(array[middle] > val){
      max = middle - 1
    } else {
      return middle
    }
  } 
  return -1
}

 console.log(search([2, 4, 5, 20, 100, 202, 222, 250], 20))



 //////////////////////////////////////////////////////////////////////////////////////////////////

 ///////////////////////////////        RECURSION      ////////////////////////////////////////////

 //////////////////////////////////////////////////////////////////////////////////////////////////

 


 // Meaning? A function that calls itself. WE NEED A BASE CASE SO IT STOPS. If not, it will continue
 // to run forever. Also, we need a different input each time also. 


 /// Count down function using recursion

 function countDown(num){
   if(num <= 0){
     console.log('All done');
     return  /////// this is important so the function ends, even if we arent returning anything
   }
   console.log(num);
   --num
   countDown(num) /// or remove line above and just use countDown(num -1)
 }



 /// Second function. Sum range. This adds up every number up to the number you use in the argument

 function sumRange(num){
   if(num === 1) return 1;
   return num + sumRange(num-1)
 }

 console.log(sumRange(3))
 /* explained in the call stack way
    return 3 + sumRange(2)
                  return 2 + sumRange(1) /// this meets our base case
                                 return 1

*/

 /// for loop way

 function sumRange(num){
   let total = 0
   for(let i = 0; i <= num; i++){
     total += i
   }
   return total
 }

 //// Now, lets write a factorial function using recursion

 function factorial(num){
   if(num === 1) return 1;
   return num * factorial(num - 1)
 }


 //// problems that may arise?

 //// No base case set. Forgetting to return or returning the wrong thing. This leads to stack overflow.


 //////////////////////////// Helper Method Recursion //////////////////////////////////////////////////

 /// These have two functions. The outer function, and inside our recursion function.

 /// FIND ODDS IN ARRAY USING RECURSION

 function findOdds(arr){
   let result = [];

    function oddsHelper(inputArr){
      if(inputArr.length === 0){
        return ;
      }

      if(inputArr[0] % 2 !== 0){
        result.push(inputArr[0])
      }
       oddsHelper(inputArr.slice(1))
    }
    oddsHelper(arr)
    return result
 }

//// PURE RECURSION SOLVING THE SAME PROBLEM

function findOdd(arr){
  let newArr = [];
  if(arr.length === 0){
    return newArr
  };

  if(arr[0] % !== 0){
    newArr.push(arr[0])
  }
  newArr = newArr.concat(findOdd(arr.slice(1)));
  return newArr
}

///// Challenges

/// find the power of a number. function will have a base and a exponent in parameter

function power(base,exponent){
  if(exponent === 0) return 1;
  return base * power(base, exponent-1)
}

/// product of arr (get the total of each number in arr multiplied by the next)

function product(arr){
  if(arr.length === 0){
    return 1
  }

  return arr[0] * product(arr.slice(1))
}

/// do the fibonacci sequence in recursion

function fib(num){
  if(num <= 2) return 1;
  return fib(num - 1) + fib(num + 2)
}









////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// SEARCHING ALGORITHMS //////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Linear Search. find the index of a val in an arr

function linearSearch(arr,val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return i
    }
  }
  return i
}



//////// THIS IS COLT STEELE's SOLUTION, maybe use divide and conquer?

function binarySearch(arr, val){
  let min = 0;
  let max = arr.length - 1;

  while(min <= max){
    let middle = Math.floor((min + max) / 2);
    if(arr[middle] < val){
      min = middle + 1
    } else if(arr[middle] > val){
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}


// Naive string search. Take a long str and a short str. See how many times the short str appears.
// Ex. "Hello yellow is my fav color, its mellow", "ello"  || it appears 3 times

function subStrOccurrence(long, short){
  let total = 0;

  for(let i = 0; i < long.length; i++){
    for(let j = 0; j < short.length; j++){
      if(short[j] !== long[i + j]){
        break;
      } 
      if(j === short.length -1){
        total++
      }
    }
  }
  
  return total
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// Bubble Sorting/Sorting Algorithms ///////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

      
                                      /// BUBBLE SORT ///

// Not used very often but it is still important. IT IS USED WHEN THERES VERY LITTLE ITEMS NEED TO BE SORTED

function bubbleSort(arr){
  let noSwaps;///
  for(let i = arr.length; i > 0; i--){
      noSwaps = true; ////////// This breaks the loop when there is noSwap
    for(let j = 0; j < i-1; j++){
      if(arr[j] > arr[j + 1]){
        /// swap
        let temp = arr[j]
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        
        noSwaps = false;
      } 
    }
    if(noSwaps) break;
  }
  return arr
}



                                /// Selection Sort ///

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let lowest = i
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[lowest]){
        lowest = j
      }
    }
      if(i !== j){
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp
      
      }
  }
  return arr
}


                                  /// Insertion Sort ///

function insertionSort(arr){
  for(let i = 1; i < arr.length; i**){
    let currentVal = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > currentValue; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal
  }
  return arr
}



////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////       CRAZIER SORT ALGORITHMS    ///////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////  MERGE SORT  ////////////////////////////////////////////////////////

                    /////////////// MERGING SORTED ARRAYS /////////////////////
                  // BIG O //
        // time complexity O(n log n)
        // space complexity: worst case O(n log n) /  average O(n)


 /// IF THE TWO ARRAYS ARE ALREADY SORTED       

function merge(arr1, arr2){
  let total = [];

  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      total.push(arr1[i]);
      i++
    } else if(arr2[j] < arr1[i]){
      total.push(arr2[j]);
      j++
    }
  }
  while(i < arr1.length){
    total.push(arr1[i])
    i++
  }
  while(j < arr2.length){
    total.push(arr2[j])
    j++
  }
  return total
}


                         /////////////////// MERGE SORT /////////////////////////
          //// THIS IS WHEN WE NEED TO SORT AN ARRAY

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle));
  return merge(left,right)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////// QUICK SORT /////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function pivot(arr, start = 0, end = arr.length + 1){
  let pivot = arr[start];
  let swapIndex = start;

  for(let i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIndex++
    }
  }
}


const numIslands = (grid) => {
  let counter = 0;

  const dfs = (i,j) => {
    if( 
      i >= 0 &&
      j >= 0 &&
      i > grid.length &&
      j > grid[i].length &&
      grid[i][j] === '1'
    ) {
      grid[i][j] === '0'
      dfs(i + 1, j);
      dfs(i, j + i);
      dfs(i-1, j);
      dfs(i, j-1)
    }
  }

  for(let i = 0; i < grid.length; i+=1){
    for(let j = 0; j < grid[i].length; j+=1){
      if(grid[i][j] === '1'){
        counter += 1;
        dfs(i,j)
      }
    }
  }
  return counter
}

counter = 0

const dfs = (i,j) => {
  if(
    i >= 0 &&
    j >=0 &&
    i > grid.length &&
    j > grid[i].length &&
    grid[i][j] === '1'
  ) {
    grid[i][j] === '0';
    dfs(i + 1, j); // top
    dfs(i, j + 1); // right
    dfs(i-1, j); // down
    dfs(i, j-1); // left
  }

  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      if(grid[i][j] === '1'){
        counter++
        dfs(i,j)
      }
    }
  }
  return counter
}