/// Creating a recursion algo that adds 'e' at the end of each element in array until it reaches the set point you add

function joinArr(arr, joinElement){ 
  
    function recursion(index, endGoal){ /// this is our recursion function inside our function, parameter is index, which start is 0, and endgoal is empty string.
      endGoal += arr[index] /// everytime the recursion function is called, we're adding arr[index] to the empty string. 
      if(index === arr.length - 1){ /// here we set our condtion. If index reaches the arrays length-1 we return the next line
        return endGoal  //// here we return the endGoal (the filled out string once it reaches arr.length - 1)
      } else {
        return recursion(index + 1, endGoal + joinElement) /// if the index is still before the conditional index, we run the recursion function again, only this time start from index + 1, and we start with endGoal (at the point it's at) + joinElement which is ('e'). To put this in perspective, the second time recursion is ran, endgoal will be at 'se', and by the time we finish the function, we'll have 'secre'
      }
    }
    return recursion(0, '')
  }
  
  console.log(joinArr(['s', 'cr', 't cod', ' :) :)'], "e"))


  /////////////////// Linear Search for an item in an array ///////////////////////////

  /*

  Create a function that takes two arguments, the first argument will be an array, the second argument will be a
  number. We want the function to search through the array in linear fashion. If the number exists in the array,
  return the index of the array. If it does not exist, return the index as -1

  */


  function bringBackIndex(arr, num){
    let index = -1;
     arr.forEach((arrItem, i) => {
       if(arrItem === num){
         index = i
       } 
     })
    return index
  }
  
  console.log(bringBackIndex([3, 5, 10, 91, 101, 120], 90))

  