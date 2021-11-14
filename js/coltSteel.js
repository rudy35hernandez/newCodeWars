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

function hashMap(str){
 
    let hash = {}
  
    
    for(let i = 0; i < str.length; i++){
      let char = str[i].toLowerCase()
      if(/[a-z0-9]/.test(char)){
      if(hash[char] > 0){
        hash[char]++
      } else {
        hash[char] = 1
        };
      }
    }
    return hash
  }
  
  console.log(hashMap("who you think you messing with"))


  //// refactored

  function charCount(str){
      let obj = {}

      for(let char of str){
          char = char.toLowerCase()
          if(/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1;
          }
      }
      return obj
  }


  /* create a function that takes in two arrays of numbers, if every number in arr1 is squared, and if every number
  appears in arr2 (1 for each), then it will return true. The order of the numbers do not matter.
  
  ex. same([1,2,3], [9, 1, 4]) /// true
  ex. same([1, 3, 1], [1, 9]) // false

  */

/// this is O(n2)
  function same(arr1, arr2){
      if(arr1.length !== arr2){
          return false
      }

      for(let i = 0; i < arr1.length; i++){
          let correctIndex = arr2.indexOf(arr1[i] ** 2)
          if(correctIndex === -1){
              return false
          }
          arr2.splice(correctIndex, 1)
      }
      return true
  }
 
/// refactored to make it O(n)   

//////// FREQUENCY COUNTER //////////////////

  function same1(arr1, arr2){
      if(arr1.length !== arr2.length){
          return false
      }

      let frequencyCounter1 = {};
      let frequencyCounter2 = {};
      for(let val of arr1){
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
      }
      for(let val of arr2){
          frequencyCounter2 = (frequencyCounter2[val] || 0) + 1
      }

      for(let key in frequencyCounter1){
          if(!(key ** 2 in frequencyCounter2)){
              return false
          }
          if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
              return false
          }
      }
      return true
  }


  //////// ANAGRAM CHALLENGE WITH FREQUENCY COUNTER PATTERN ////////////
  
  /* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram
  is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
  You must use the frequency counter.

  */

  function anagramChech(str1, str2){
      /// first, easiest way to prove false is to check if the length of both strings do not match
      if(str1.length !== str2.length){
          return false
      } else {
          let frequency = {};
          for(let val of str1){
              frequency[val] = (frequency[val] : 0) + 1
          }
          for(let i = 0; i < str2.length; i++){
              let letter = str2[i]
              if(!frequency[letter]){
                  return false
              } else {
                  frequency[letter] -= 1
              }
          }
          return true
      }
  }

  // easier way to solve
  function anagram2(str1, str2){
    return str1.toLowerCase().split('').sort('').join('') === str2.toLowerCase().split('').sort().join('')
  }

  console.log(anagram2("what", "hWta"))


  /* the next pattern that is covered is the MULTIPLE POINTERS PATTERN

  A challenge that embodies this is is the sumZero algorith problem.

  Details: Write a function called sumZero which accepts a sorted array of integers. The function should find the 
  FIRST pair where the sum is 0. Return an array that includes both values that sum to 0 or undefined if a pair
  does not exist.

  */

  function sumZero(arr){
  // naive solution where you run a loop inside of a loop. Time complexity would be O(n**2) / not good
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            } else {
                return undefined
            }
        }
    }
  }

  console.log(sumZero([-3, -2, -1, 0, 1, 2, 3,]), [-3, 3])
  console.log(sumZero([-2, 0, 1, 3])) // should return undefined
  console.log(sumZero([1, 2, 3]))// should return undefined