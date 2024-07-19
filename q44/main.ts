function makeSandwitch(...item:string[]){
console.log("\n Making a sandwitch with the following items: \n");
item.forEach(singleItem => 
    console.log(singleItem)
)
console.log("Now enjoy your sandwitch");

};
makeSandwitch("Chicken","Cheese")
makeSandwitch("Egg","Tomatoe","Mayo")
makeSandwitch("Egg","Chicken","Cheese","Tomatoe","Ketchup")

