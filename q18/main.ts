let placeToVisit :string[] = ["Tokyo","Wales","Cairo","New York","Beijing"]
console.log("Original order:" , placeToVisit); //not in alphabetical order

//Alphabetical order
console.log("Aplphabetical order:" , placeToVisit.slice().sort());
//Array is in its original order
console.log("Still In Original Order:" , placeToVisit);

//reverse alphabetical order
console.log("Reverse Aplphabetical order:" , placeToVisit.slice().sort().reverse());
//original order after reversal
console.log("Still In Original Order:" , placeToVisit);
//reverse the order of original list
console.log("Rerverse order:", placeToVisit.reverse());
//reverse again
console.log("reverse order of list again to give original:",placeToVisit.reverse());
//Sort so its stored in alphabetical order
console.log("Sorted in alphabetical order:", placeToVisit.slice().sort());
//Sort into reverse alphabetical order
console.log("Stored in reverse alphabetical order:", placeToVisit.slice().sort().reverse());










