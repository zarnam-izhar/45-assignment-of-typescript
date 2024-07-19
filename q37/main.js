"use strict";
function makeShirt(size = "Large", printMessage = "'I love Typescript'") {
    console.log(`Creating a ${size} shirt with ${printMessage} printed on it`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "'I love python'");
