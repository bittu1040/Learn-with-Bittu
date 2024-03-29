
export const curryingCodeSnippet: string = `
function SumOfThee(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(SumOfThee(2)(3)(4));  // 9
`;

export const closureCodeSnippet: string = `
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

let counter = makeCounter();
console.log(counter());  // 1
console.log(counter());  // 2
`;

export const variableDeclarationSnippet: string=`
// var example
var x = 10;

// let example
let y = 20;

// const example
const z = 30;`;

