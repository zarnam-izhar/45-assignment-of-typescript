function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name)
    );
}
function makeGreat(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
}
let magiciansNames = ["Kayle","John","Dave"]

let copymagiciansNames = magiciansNames.slice()
let copyGreatMagician = makeGreat(copymagiciansNames)
console.log("Original array\n");
show_magicians(magiciansNames)

console.log("Copied array\n");
show_magicians(copymagiciansNames)
