let clue = {
    characters: ["Rudy", "Erika", "Adam", "Rudy Jr"],
    location: "Los Angeles",
    weapons: [
      "Knife", 
      "gun", 
      "bat", 
      "pepper-spray"
    ]
  }
  
  clue.room = "kitchen"
  clue.killer = "Seth"
  clue.time = 5
  clue.characters.push("Dolores")
  
  // console.log(clue.weapons.map(item => item))
  
  
  
  
  
  ///////Storing a value by reference/ value. who remains Mrs White, it does not change to Mr White
  
  ///  What is a primitive value? String, number, boolean, null, undefined. When you pass primitive values it makes a copy every time.
  
  
  /// Non primitive? Object, array, function, promise.  When you store a value, its by reference
  
  
  
  
  
  
  
  
  
  ////// DESTRUCTURING /////////
  
  // This is array destructuring, it lets you assign values to multiple variables by order
  
  
  
  const [first1, second1] = [true, false]
  
  // console.log(first1)
  
  //// For objects, the names have to match, unlike the arrays above. Order doesnt matter here, it only goes by the name
  
  let {first2, second2} = {first2: "Rudy", second2: "Hernandez"}
  
  
  const {weapon, room} = {"name": "Rusty", "room": "kitchen", "weapon": "candlestick"}
  
  // console.log(room)
  
  
  ///EXAMPLES
  
  // Combine with spread/rest operator 
  var [a, ...b] = [1,2,3]
  //console.log(a,b) => 1 [2,3]
  
  //swap variables with temp and without temp
  
  var a = 1, b = 2
  
  var temp = a  // 1
  
  a = b /// a is now 2
  
  b = temp /// now, b is 1, b/c temp retained 1 for us
  
  //console.log(a, b, temp) => 2, 1, 1
  
  
  /// without using temp
  
  // var a = 1, b = 2
  
  // [b, a] = [a, b]
  
  
  
  /// OBJECTS
  
  let {val: c} = {val: 5}
  
  // console.log(c) => 5
  
  
  //////////////////////////////////////////////////////// 
   //     List Transforms: Nested Data Structure       ///
  ////////////////////////////////////////////////////////
  
  
  //////// Nesting, comparison with object literal+
  
  // const game = {};          ||    const game{ 
  // game['suspects'] = []     ||      'suspects': [
  //                                      {     
  // game.suspects.push({      ||              name: "Rusty",
  //   name: "Rusty",                          color: "Orange"
  //   color: "Orange"         ||          },
  //   });                                     name: "Miss Scarlett",
  // game.suspects[1] = {      ||              color: "Red"
  //   name: "Miss Scarlett",              },
  //   color: "Red"            ||        ] 
  // } 
  
  
  
  
  
  
  
  ////////// Looping through obj with for loop ///////////////////////
  
  let game = {
    'suspects': [
      {
      name: "Rusty",
      color: "Orange",
    },
    {
      name: "Rudy",
      color: "Red"
    },
    ]
  }
  
  
  
  function foo(obj){
  
  for(let i = 0; i <= obj.suspects.length; i++){
    console.log(obj.suspects[i])
  }
    
  }
  
  // console.log(foo(game))  => returns both objects
  
  
  /// using for Each
  
  function foo1(obj){
    obj.suspects.forEach(item => {
      console.log(item.color)
    })
  }
  
  // console.log(foo1(game)) => returns "Orange", "Red"
  
  ///// Object LOOPING
  
  for(let prop in game){
   /// console.log(game[prop]) => returns all objects in suspects
   //  console.log(game[prop][0]) => returns only the first object in suspects
   /// console.log(game[prop][0].name)  => returns "Rusty
  }
  

  
  /// Destructure!!! Create 2 variables, one thatll hold the val orange and one red
  
      //const [color, color2] = [suspects[0].color, suspects[1].color]
      //const [{color: firstColor, color: secondColor}] = suspects
  
    function useMap(obj){
     let arr = game.suspects.map(item => item.color)
     let [ora, red] = [...arr]
     console.log(ora, red)
    }
  
  // console.log(useMap(game))



  function createSuspectObjects(name){
    return {
      name: name,
      color: name.split(' ')[1],
      speak: function (){
        console.log("my name is ", name);
      }
    };
  };
  
  let newSuspects = ["tony Danza", "joe thomas", "chick roos"]
  
  let newSuspectsList = [];
  
  let y = createSuspectObjects(newSuspects[0])
  
  // console.log(y)  ==> returns {"tony Danza", color: "Danza"}


  
for(let j = 0; j < newSuspects.length; j++){
    newSuspectsList.push(createSuspectObjects(newSuspects[j]))
  }
  
  // console.log(newSuspectsList) // ==> this will return an array of objects, [{name: "Tony Danza", color: "Danza"},{name: "Joe Thomas", color: "thomas"},{name: "Chick roos", color: "roos"}]




///////////////////////////////////////// HERE WE CREATE THE SAME RESULT FROM ABOVE USING _.each METHOD ///////////


// function createSuspectObjects(name){
//   return {
//     name: name,
//     color: name.split(' ')[1],
//     speak: function (){
//       console.log("my name is ", name);
//     }
//   };
// };

// let newSuspects = ["tony Danza", "joe thomas", "chick roos"]

// let newSuspectsList = [];


  _.each(newSuspects, function(name) {   /// instead of placing the array before the method, you add it in the parameter
    let suspectObj = createSuspectObjects(name);
    newSuspectsList.push(suspectObj)
  })
  
  // console.log(newSuspectsList) // ==> This adds the 3 objects to the newSuspectsList, just like the forLoop above.