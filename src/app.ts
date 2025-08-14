// const userName = 'Max';
// // userName = 'Maximilian';
// let age = 30;

// age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];

// activeHobbies.push(...hobbies);


// const copiedPerson = { ...person };

// const add = (...numbers: number[]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };

// const addedNumbers = add(5, 10, 2, 3.7);
// console.log(addedNumbers);

// const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// console.log(hobbies, hobby1, hobby2);



// const person = {
//     firstName: 'Maxxx',
//     age: 30
// };

// const { firstName: userName, age } = person;

// console.log(userName, age, person);



// creating class

//normally like this
// class User {
//     name: string;
//     age: number;
    
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log('hello my name is ' + this.name);
//     }
// }

// but we can also use the shorthands

class User {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log('hello my name is ' + this.name);
    }
}

const user = new User('Max', 30);
user.greet();