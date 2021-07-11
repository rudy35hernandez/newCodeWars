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
    
    6. All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish 
    must start and end with the same letters as the animal's name. For example, the great blue heron is bringing 
    garlic naan and the chickadee is bringing chocolate cake.
    
    Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate 
    whether the beast is allowed to bring the dish to the feast.
    
    Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish
    may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not 
    contain numerals.
    */
    
    
    function feast(beast, dish) {
      return beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1] ? true : false
    }
    
    
    /*
    
    7. new challenge
    
    
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