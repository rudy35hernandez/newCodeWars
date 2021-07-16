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

  /// Easier WAY!!!

  const newString2((s1,s2) => [...newSet(s1+s2)].sort().join(''))


  
// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

function 