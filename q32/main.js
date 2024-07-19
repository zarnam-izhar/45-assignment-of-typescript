"use strict";
let current_user = ["Ali", "zainab", "Fatima", "aslam"];
let new_user = ["Ayesha", "Aslam", "Zainab", "Sana"];
new_user.forEach(one_new_user => {
    let ourCondition = current_user.some(current_one_user => current_one_user.toLocaleLowerCase() === one_new_user.toLocaleLowerCase());
    if (ourCondition) {
        console.log(`Sorry ${one_new_user} is already taken!`);
    }
    else {
        console.log(`This username ${one_new_user} is available `);
    }
});
