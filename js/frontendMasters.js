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

var rooms1 = ['observatory', 'ballroom', 'library'];

var logger = function(val){
  console.log(val)
}
//// Again, _.each takes in the array in the parameter
// _.each(rooms1, logger) // => "observatory" "ballroom" "library"


/// setting up the _ method
const _ = {}

/// creating a method for whenever you use _.each

_.each = function(list, callback){
    // 
if(Array.isArray(list)){
    /// loop through array
    for(var i = 0; i < list.length; i++){
      /// call the callback with a list item. parameters (item, index, arr or list)
      callback(list[i], i, list);
    }

} else {
    /// loop through object
      for(var key in list){
        callback(list[key], key, list)
      }
      ///call the callback with a list item

}
    //celebrate
}


/// setting up an array to throw it in the _.each method
let myList = ["rudy", "erika", "rudy jr", "adam"]


/// creating a function to be thrown in as the callback
let ages = function(name, i, list){
  if(list[i+1]){
    console.log(`${name}, is older than ${list[i+1]}`)
  } else {
    console.log(`${name}, is the youngest`)
  }
}

// _.each(myList, ages)


//////////////////////// using _.map()////////////////////////////////////////

const weapons = ['candlestick', 'lead pipe', 'revolver']

const makeBroken = function(item){
  return `broken ${item}`
}

const brokenWeapons = _.map(weapons, makeBroken)

/*

function createSuspectObjects(name){
   return {
     name: name,
     color: name.split(' ')[1],
     speak: function (){
       console.log("my name is ", name);
     }
   };
};

*/

 let newSuspects = ["tony Danza", "joe thomas", "chick roos"]

 const suspectsList = _.map(newSuspects, function(name){
    return createSuspectObjects(name);
 });

 _.each(newSuspects, function(suspect){
   suspect.speak
 })

let suspectObjectsList = []

 _.each(newSuspects, function(suspect){
  suspectObjectsList.push(createSuspectObjects(suspect))
 })


 ////////// Implementing a _.map function ////////////

 _.map = function(list, callback){
   /// create an empty array to store
   let storage = [];
   /// check if list is an array
   /// loopin'
   for(let i = 0; i < list.length; i++){
     /// push it to our array
      storage.push(callback(list[i], i, list));
   }
    /// return updated storage
    return storage 
}

// lets try it with a _.each inside our _.map function instead of a for loop

_.map = function(list, callback){
  let storage2 = [];
  _.each(list, function(v, i, list){
    storage.push(callback(v, i, list))
  })
  return storage
}


/////////////////////// filter() practice next ///////////////////////////////////

const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false},
    ]
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false},
    ]
  },
  {
    name: "Reverend King",
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false},
    ]
  },
  {
    name: "Rusty",
    present: false;
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false},
    ]
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false},
    ]
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false},
    ]
  }

];

const _ = {}

_.filter = function(arr, callback){
  /// create a new array
  let storage = []
  /// run a for loop for each item
  for(let i = 0; i < arr.length; i++){
    /// check if callback returns true, if it does, push into array
    if(callback(arr[i], i, arr) === true){
      storage.push(arr[i])
    }
  }
  return storage
}

/// lets write the same function with _.each

_.filter = function(arr, callback){
  /// create empty arr to push to
  let storage = []
  /// loop arr with each method
  _.each(arr, function(item, i, list){
  /// check to see if its true
    if(callback(item, i, list) === true){
  /// push items into arr that pass the condition
      storage.push(item)
    }
  })
  /// returns the arr of items
  return storage
}

let presentCharacters = _.filter(videoData, function(suspectObject){
  return suspectObject.present
})





/////////////////////// MOST IMPORTANT THINGS TO KNOW ABOUT JS //////////////

/* 

- Never mutate data. Either change it, or share it, but don't do both.
- Know how to read documentation.


////////////////////////// Arrow Functions ////////////////////////////////////////////////

*/
//// 
         /// Reg ////
var nameImprover = function(name, adj){
  return `Col ${name} Mc ${adj} pants`;
}

${'body'}.hide();

${'button'}.on('click', function(){
  console.log('Don/t press my button')
})
///////////////// VS /////////////////

        /// Arrow ///
var nameImprover = (name, adj) => {
  return `Col ${name} Mc ${adj} pants`
}

${'body'}.hide()

myArr.forEach(val => console.log(val))

${'button'}.on('click', () => {
  console.log('Don/t press my buttons!')
})


/// template string. The name part is called interpolation  `hello ${name}, how are you` 




/// NEXT LESSON, PROJECTING (TAKING A VALUE OUT OF A DATA STRUCTURE AND TURN IT INTO ANOTHER DATA STRUCTURE)

//// question is, filter through the data to see who was present, and return only the names in a new array ///

/// lets set up our filter and map methods as if its never been done so you can see the difference

// const videoData = [
//   {
//     name: "Miss Scarlet",
//     present: true,
//     rooms: [
//       {kitchen: false},
//       {ballroom: false},
//       {conservatory: false},
//       {'dining room': false},
//       {'billiard room': false},
//       {library: false},
//     ]
//   },
//   {
//     name: "Mrs. White",
//     present: false,
//     rooms: [
//       {kitchen: false},
//       {ballroom: false},
//       {conservatory: false},
//       {'dining room': false},
//       {'billiard room': false},
//       {library: false},
//     ]
//   },
//   {
//     name: "Reverend King",
//     present: false,
//     rooms: [
//       {kitchen: false},
//       {ballroom: false},
//       {conservatory: false},
//       {'dining room': false},
//       {'billiard room': false},
//       {library: false},
//     ]
//   },
//   {
//     name: "Rusty",
//     present: false;
//     rooms: [
//       {kitchen: false},
//       {ballroom: false},
//       {conservatory: false},
//       {'dining room': false},
//       {'billiard room': false},
//       {library: false},
//     ]
//   },
//   {
//     name: "Colonel Mustard",
//     present: true,
//     rooms: [
//       {kitchen: false},
//       {ballroom: false},
//       {conservatory: false},
//       {'dining room': false},
//       {'billiard room': false},
//       {library: false},
//     ]
//   },
//   {
//     name: "Professor Plum",
//     present: true,
//     rooms: [
//       {kitchen: false},
//       {ballroom: false},
//       {conservatory: false},
//       {'dining room': false},
//       {'billiard room': false},
//       {library: false},
//     ]
//   }

// ];

const _ = {};

_.map = function(arr, callback){
  let storage = [];
  for(let i = 0; i < arr.length; i++){
    storage.push(callback(arr[i], i, arr))
  }
  return storage
}

_.filter = function(arr, callback){
  let storage = [];
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i], i, arr)){
      storage.push(arr[i])
    }
  }
  return storage
}

///// return all objects with present people, give a var name

const presentChar = _.filter(videoData, function(suspObj){
    return suspObj.present
})

//// now we map those and return arr of their names only

const onlyNames = _.map(presentChar, function(onlyName){
  return onlyName.name
})


/// function scavenger hunt: Definitions, Fn Names, Invocations, Arguemnts, Parameters, Fn Bodies, Return Values, Side Effects //////////////////

///  func name               func def/ parameters
var nameImprover = function (name, adj) {
  // return val  //  
  //func body (usually followed by two paranthesis)
  return 'Col ' + name + ' Mc' + adj + ' pants';
 }

//
//func name(body)        func name(hide)
//             invocation(calling the func)
 $('body').hide();


//    func name(forEach)/ func definition 
//                                    func name(log)
//        invocation                func body / incovation      
 myArr.forEach(function(val) {console.log(val);})


///      func name(on)              func def
 $('button').on('click', function()){
  //      func name(log)
  // func body  / invocation (calling the func)
   console.log('Don\'t press my buttons!');
 }


 /////////////////////////// ARROW FUNCTIONS, ex from functions up top //////////////////////////////////////////

 var nameImprover = (name, adj) => {
   return `Col ${name} Mc ${adj} pants`
 }

 $('body').hide();

 myArr.forEach(val => console.log(val));

 $('button').on('click', () => {
   console.log('Don\'t press my buttons!');
 })

 /////////////////////////// SPREAD OPERATOR //////////////////////////////////////////

 const createTuple = (a,b,c,d) => {
   return [[a,c], [b,d]]
  }

  createTuple('it', 'be', 'could', 'anyone', 'no one') /// [["it", "could"], ["be", "anyone"]]

  /// Spread
  const createTuple = (a, b, c, ...d) => {
    return [[a, c], [b, d]]
  }

  createTuple("it", "be", "could", "anyone", "no one") /// [ ["it", "could"], ["be", ["anyone", "no one"]] ]



                             //// Arguments keyword ///
  
const createTuple = (a, b, c, ...d) => {
  console.log(arguments); // will print it [ {0: "it", 1: "be", 2: "could", 3: "anyone", 4: "no one"}]
  return [[a, b], [c, d]]
}

createTuple("it", "be", "could", "anyone", "no one") 

////////////////////////////// Default Parameters //////////////////////////////////////

// E6
const add = function(a, b = 2) {  /// b is being assigned as 2 in case an argument is not passed 
  console.log(arguments) // logs [3] 
  return a + b
}

add(3) // returns 5
add(3, 1) // return 4

// before E6

const add = function(a,b) {
  b = b || 2;
  return a + b
}


//////////// Array-like Object //////////////////

const constructArr = function() {
  const arr = Array.prototype.slice.call(arguments); /// this turns your array-like object to an actual array
  /// ['was', 'it', 'in']
  arr.push('the billiards room?');
  // ['was', 'it', 'in', 'the billiards room?']
  return arr.join(' ');
  /// 'was it in the billiards room?'
}

constructArr('was', 'it', 'in')


// E6 Array.from

const constructArr2 = function () {
  const arr = Array.from(arguments);
  // ['was', 'it', 'in']
  arr.push("the billiards rooms")
  // ['was', 'it', 'in', 'the billiards room']
  return arr.join(' ') // returns 'was it in the billiards room'
  
}

constructArr('was', 'it', 'in')



////////////// Implement _.from()

const from = arr => {
  return Array.prototype.slice.call(arr)
}


                 /////////////// Scope walkthrough set up ////////////////////

// Scope is the area where a variable has access to some value

(function () {
  describe('Scope Exercises', function() { 
  var ACTUAL;

  // This resets the value to of ACTUAL (to null) before each test is run

  beforeEach(function (){
    ACTUAL = null;
  });


  /// Lets run through it
  it('a function has access to its own local scope variales', function() {
    /// 1. we create a var name fn that contains a function
    var fn = function () {
      // 3. since function is called, we go into the body of the function.
      // we create a var name inner and we assign ACTUAL to name
      var name = 'inner';
      ACTUAL = name
    };
    //// 2. We call the function with the next line.
    fn();
    expect(ACTUAL === 'inner').to.be.true;
  });
  
  it('inputs to a function are treated as local scope variables', function(){
    var fn = function (name) {
      ACTUAL = name;
    };
    fn('inner');
    expect(ACTUAL === 'inner').to.be.true;
  });

  it('block scope can be created with let', function(){
    var fn = function(){
      var where = 'outer'
      {
        //// in ES6, we now have block scopes. because we used let, the let where is out of the scope for the next line.
        /// if we change the let to var, it is no longer a block scope and where is just rewritten to 'inner'
        let where = 'inner'
      }
      ACTUAL = where
    };
    fn();
    expect(ACTUAL === "outer").to.be.true
  });

})

