"use strict";
let user_Names = ["Ayesha", "Admin", "Syeda", "Aslam"];
user_Names.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report`);
    }
    else {
        console.log(`Hello ${oneUser}, thankyou for logging in again`);
    }
});
