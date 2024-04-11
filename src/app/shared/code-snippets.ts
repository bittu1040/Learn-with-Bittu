
export const currying = 
function SumOfThee(a:number){
    return function(b:number){
        return function(c:number){
            return a + b + c;
        }
    }
}

export const curryingCodeSnippet = `
${currying.toString()}
console.log(SumOfThee(2)(3)(4));  // 9 `; 
                                     
export const closure = 
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

export const closureCodeSnippet = `
${closure.toString()}
let counter = makeCounter();
console.log(counter());  // 1
console.log(counter());  // 2`;



export const variableDeclarationSnippet: string=`
// var example
var x = 10;

// let example
let y = 20;

// const example
const z = 30;`;


export const RestAndDestructuringSnippet: string=`
// Destructuring arrays
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