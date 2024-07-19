"use strict";
let guest = ["Maham", "Eeman", "Taha"];
console.log("Great news guys! we found a bigger table");
guest.unshift("Sadia");
guest.splice(Math.floor(guest.length / 2), 0, "Ali");
guest.push("Vaniya");
console.log(guest);
guest.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to my dinner party`);
});
