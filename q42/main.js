"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function makeGreat(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magiciansNames = ["Kayle", "John", "Dave"];
let greatMagicican = makeGreat(magiciansNames);
show_magicians(greatMagicican);
