'use strict';

const a = null;

//Falsy values: 0, '', null, undefined, false
//Truthy values: everything else

if(a!==null){
    console.log('This will never run')
}

// const c = 23; //--> User Input
// const b = 42;
// console.log(c||b); //--> Default Value, Nicht empfohlen!
// console.log(c && b)

const z = c !== 0 ? c : b;