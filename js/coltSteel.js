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