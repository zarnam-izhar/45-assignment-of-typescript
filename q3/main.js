"use strict";
//Name cases
let personName = "zarnam Izhar";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toLocaleUpperCase());
console.log("Titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
