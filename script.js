'use strict';

// const list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             },
//         },
//     },
// };

// let getLastvalueFromList = (list) => {
//     if (!list.next) {
//         return list.value;
//     } else {
//         return getLastvalueFromList(list.next);
//     }
// };
// console.log(getLastvalueFromList(list));


// constructor functions

// let count = 0;



// const Human = function (name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.isAlive = true;
//     this.id = getRandomId();

//    function getRandomId () {
//       return  Math.floor(Math.random() * 100) - 1;
//     }

//     this.sayHumanName = function () {
//         console.log(`My name is ${this.name}`)
//     };

//     this.getAge = function () {
//         return this.age
//     };

//     this.setIsAlive = function (isAlive) {
//         this.isAlive = isAlive;
//     };
// };

// const rojer = new Human('Rojer', 44, 'male');



// console.log(rojer);


// const Developer = function (name, skills) {
//     this.name = name;
//     this.skills = skills;
//     this.experience = getRandomId();
//     this.showSkills = function () {
//         return `I know ${this.skills}`;
//     }

//     function getRandomId() {
//         return Math.floor(Math.random() * 100) - 1;
//     };
// }

// const dev = new Developer('John', ['HTML', 'CSS']);

// console.log(dev);
// console.log(dev.showSkills());

const obj3 = {
    name: 'Rita',
    age: 19,
    isAlive: true,    
};


const obj2 = {
    name: 'John',
    // age: 22,
    isAlive: true,
    __proto__:obj3,
};

const obj1 = {
    name: 'Rick',
    age: 33,
    isAlive: true,
    __proto__:obj2,
};


console.log(obj1);
console.log(obj2);
console.log(obj3);