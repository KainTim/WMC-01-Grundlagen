'use strict';
const a = { name: 'John' }

console.log(typeof a);
console.log(a);
console.log(a.name);

const propertyName = 'name';
console.log(a[propertyName]);

a.firma = 'Nokia';
console.log(a.firma);

const b = {...a, address: 'Finland'};
console.log(b);