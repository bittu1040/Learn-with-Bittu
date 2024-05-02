

export const curryingCodeSnippet =
`function SumOfThee(a:number){
  return function(b:number){
      return function(c:number){
          return a + b + c;
      }
  }
}
console.log(SumOfThee(2)(3)(4));  // 9 `; 
                                     

export const closureCodeSnippet = 
`function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
let counter = makeCounter();
console.log(counter());  // 1
console.log(counter());  // 2`;



export const variableDeclarationSnippet: string=
`// var example
var x = 10;

// let example
let y = 20;

// const example
const z = 30;`;


export const RestAndDestructuringSnippet: string=
`// Destructuring arrays
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // Output: 1 2 3

// Destructuring objects
const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name, age); // Output: Alice 30

// Spreading elements in array literals
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Spreading elements in function calls
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // Output: 6

// Rest operator
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};
console.log(sum(1, 2, 3)); // Output: 6

`



export const shallowCopySnippet: string=`
// Original array with nested values
    let arr1 = [10, 20, { nestedKey: 30 }, 40];
    
    // Shallow copy of 'arr1'
    let arr2 = Object.assign([], arr1);
    
    // Modify 'arr2', 'arr1' affected
    arr2[2].nestedKey = 11;
`

export const deepCopySnippet: string=`
// Original array of objects with nested values
    let students = [
      { id: 1, name: 'abc', details: { age: 23 } },
      { id: 2, name: 'def', details: { age: 24 } },
      { id: 3, name: 'ghi', details: { age: 25 } }
    ];
    
    // Deep copy of 'students'
    let studentsCopy = JSON.parse(JSON.stringify(students));
    
    // Modify 'studentsCopy', 'students' remains unaffected
    studentsCopy[1].details.age = 30;
    
`