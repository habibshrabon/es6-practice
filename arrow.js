//es6 rules
const doubleIt = num => num * 2;//no 1 rules
const add = (s, n) => s + n;//no 2 rules
const give5 = () => 5;//no 3 rules
const doMath = (s, n) => { //arrow function
    const sum = s + n;
    const diff = s - n;
    const result = sum * diff;
    return result;
}

const result = add(50, 70);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);

// function doubleIt(num){
//     return num * 2;
// }

// const result = doubleIt(5);
// console.log(result);

// //function declaration
// const doubleIt = function myFun(num){
//     return num * 3;
// }

// const result = doubleIt(5);
// console.log(result);

