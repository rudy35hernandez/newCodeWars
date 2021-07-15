//Create a function that returns the capitilization of a name. No Arrays, No REGEX!
//leon ~> Leon
//bob ~> Bob
//John ~> John

function capName(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}



/*

Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"

*/

function truncate(str, maxLength){
    return str.length > maxLength ? str.slice(0, maxLength - 1) + '...': str 
}

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function newString(s1, s2){
    let noDuplicates = [...new Set(s1), ...new Set(s2)]
    let lastUnique = [...new Set(noDuplicates)]
    return lastUnique.sort().join('')
  }
  
  console.log(newString('alkjdfkjjs', 'wieokljsdf'))
  console.log(newString('adgk', 'fnmwad'), 'adfgkmnw')