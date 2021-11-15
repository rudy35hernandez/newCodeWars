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


  //////// ANAGRAM CHALLENGE ////////////
  
  /* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram
  is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

  