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

