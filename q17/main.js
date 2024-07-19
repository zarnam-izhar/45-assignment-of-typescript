"use strict";
let guest = ['Sadia', 'Maham', 'Ali', 'Eeman', 'Taha', 'Vaniya'];
console.log("unfortunately! the new dinner table wont arrive so we can only invite 2 guests");
//remove guests
while (guest.length > 2) {
    let removeGuest = guest.pop();
    if (removeGuest !== undefined) {
        console.log(`Sorry ${removeGuest}, we cant invite you`);
    }
}
//Print a message to the remaining 2 people
guest.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to the dinner`);
});
//remove the remaining guests
guest.splice(0, guest.length);
console.log("Updated list:", guest);
