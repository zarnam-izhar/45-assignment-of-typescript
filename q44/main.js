"use strict";
function makeSandwitch(...item) {
    console.log("\n Making a sandwitch with the following items: \n");
    item.forEach(singleItem => console.log(singleItem));
    console.log("Now enjoy your sandwitch");
}
;
makeSandwitch("Chicken");
makeSandwitch("Egg", "Tomatoe");
makeSandwitch("Egg", "Chicken", "Cheese", "Tomatoe", "Ketchup");
