function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name)
    );
}
function makeGreat(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
}
let magiciansNames = ["Kayle","John","Dave"]
let greatMagicican = makeGreat(magiciansNames)
show_magicians(greatMagicican)
