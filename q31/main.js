"use strict";
let user_Name = ["Ayesha", "Admin", "Syeda", "Aslam"];
user_Name = [];
if (user_Name.length === 0) {
    console.log("We need to find some users");
}
else {
    user_Name.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thankyou for logging in again`);
        }
    });
}
