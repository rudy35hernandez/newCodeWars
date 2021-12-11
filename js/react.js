/// classes preparation

class Human {
    constructor(){
        this.gender = "male"
    },
    printGender(){
        console.log(this.gender)
    }
}

class Person extends Human {
    constructor(){
        super();
        this.name = "Max";
        this.gender = "female"
    }
    printName(){
        console.log(this.name)
    }
}


/// Spread operator and rest

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

/// we can do it with objects also

const person = {
    name: "Rudy"
}

const newPerson = {
    ...person,
    age: 28,
}

/// Rest operator

const filter = (...args) => {
    return args.filter(nums => nums < 4)
}

console.log(filter(1, 3, 6, 3, 5, 4)) /// returns [1, 2, 3]

////// Destructuring

// Array destructuring
[a,b] = ['hello', 'max']

console.log(a) // "hello";
console.log(b) // 'max;

/// object destructuring


{name} = {name: "Max", age: 28}

console.log(name) // "Max"
console.log(age) /// undefined

// examples

const numbers = [1,2,3];
[num1, , num3] = numbers;

console.log(num1, num3) // 1 
                        // 3


/// Primitives & References


/// Array functions;

const numbers = [1,2,3];

const double = numbers.map((nums) => {
    return nums * 2;
})

console.log(double) // [2, 4, 6]

/////////////////////////////// React /////////////////////////////////////////

// Declarative approach- Unlike vanilla javascript, you will not tell react that a certain html element should be created and inserted in a 
// specific place on the user interface. 
// Instead, you will always define the desired end state/target state, and React figures out which elements on 
// the webpage need to be added/removed/updated. We dont write concrete dom updating instructions on your own, 
// instead we just define the end/target state and under which conditions which state should be used.

