//Name cases
let personName: string = "zarnam Izhar"
console.log("Lowercase:" , personName.toLowerCase());
console.log("Uppercase:" , personName.toLocaleUpperCase());
console.log("Titlecase:" , personName.replace(/\b\w/g, c => c.toUpperCase()))