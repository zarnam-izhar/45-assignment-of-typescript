let guest: string[] = ["Maham","Ahmed","Eeman"]
let notinvited = guest.splice(1,1)
console.log(`${notinvited} not invited for dinner`);

//push
guest.push("Taha");

//print a message
guest.forEach(guest =>{
    console.log(`Dear ${guest}, you are invited to dinner at my place`);
    
})


