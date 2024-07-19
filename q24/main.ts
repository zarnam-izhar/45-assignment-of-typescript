//Test for equality
let apple = "apple"
console.log("apple is equal to apple");
console.log(apple == apple);
//Test for inequality
console.log("apple is not equal to apple");
console.log(apple !== apple);
//Using lowercase function
//Equal to
let upperCaseApple = "APPLE"
console.log("AAPLE is equal to apple after coverting to lowercase");
console.log(upperCaseApple.toLocaleLowerCase() == "apple");
// Not equal to
console.log("AAPLE is not equal to apple after coverting to lowercase");
console.log(upperCaseApple.toLocaleLowerCase() !== "apple");

//Numerical test
let ten = 10
let twenty = 20
//Equal to
console.log("ten is equal to twenty");
console.log(ten == twenty);
//Not Equal to
console.log("Ten is not equal to twenty");
console.log(ten !== twenty);
//Greater than
console.log("twenty is greater than 10");
console.log(twenty > ten);
//Less than
console.log("twenty is less than ten");
console.log(twenty< ten);
//Greater or equal to
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);
// Less than or equal to
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);

//Use "and" and "Or" operator
// && operator
//True
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty !== ten && twenty> ten);
// False
console.log("twenty is equal to ten and twenty is less than ten");
console.log(twenty == ten && twenty < ten);

//using || Or operator 
console.log("twenty is greater than ten or twenty not is equal to twenty");
console.log(twenty > ten || twenty !== twenty);

console.log("twenty is less than ten or twenty not is equal to twenty");
console.log(twenty < ten || twenty !== twenty);
//Test whether an array is in array
let fruits = ["Apples","Grapes","Cherry","Orange"]
console.log("Orange is included in my fruits array");
console.log(fruits.includes("Orange"));

//Test whether an item is not present in an array
console.log("Orange is not included in my fruits array");
console.log(!fruits.includes("Orange"));








