
export const currying = 
function SumOfThee(a:number){
    return function(b:number){
        return function(c:number){
            return a + b + c;
        }
    }
}



export const curryingCodeSnippet = `${currying.toString()}
console.log(SumOfThee(2)(3)(4));  // 9 `; 
                                     
export const closure = 
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}


export const closureCodeSnippet = `${closure.toString()}
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

