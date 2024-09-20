'use strict';

// 1. Number

let x = 4;
let y = 3.14;

let c = 24/0; //Infinity

//2. String

const a = 'Hello';
const b = `Hello value ${x}`; //template string

//3. boolean

d = true;
e = false;

//4. null

f = null;

//5. undefined

g = undefined;

//Wertedatentypes (Primitive Datatypes) Stack number, boolean, null, undefined
//Referenzdatentypen(Reference Datatypes) Heap object, string, function

typeof x; //number

//Boolsche Logik

23 == 42; //false
'Hello Welt' == 'Hello Welt'; //true

0 == '0'; //true
0 == '';  //true

0 === '0'; //false
0 !== '0'; //true