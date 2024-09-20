'use strict';



// function add(a,b){ //function statement
//     return a+b;
// }

const add = function(a = 0,b = 0){ //function expression
    if(typeof a !== 'number' ||typeof b !== 'number'){
        return undefined;
    }
    return a+(b||0)
}

// console.log(add(1,2));
console.log(add(2));