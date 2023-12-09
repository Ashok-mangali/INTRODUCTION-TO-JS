//Creating New Array

let name = ["Ashok", "NIST", "0527"]; //preferred way
console.log(name);

//Another way to create an Array
names = new Array("Ashok", "Ram", "charan");
console.log(names);

//What type of Array
console.log(typeof(names));

//How to acces each item in array 
let first_item = names[0];
let second_item = names[1];
let third_item = names[2];
console.log(first_item);
console.log(second_item);
console.log(third_item);

let item = names[4];  //what will happen if we access item is greater than it's length
console.log(item)

//calculating the length of an array
let length_array = names.length; 
console.log(length_array);

//converting an array into string
let stringArray = names.toString();
console.log(stringArray);
console.log(typeof(stringArray));

//Joinstring
let joinedString = names.join(" ");
console.log(joinedString);

//extract subarray
let slicedArray = names.slice(0,2);  //End is  not included
console.log(slicedArray);

//adding value in array in end we use push() methode
names.push("Seeta");
console.log(names);

//remove value from array from end we use pop() method 
names.pop();
console.log(names);

//adding value in array in start we use unshift() method
names.unshift('Manoj');
console.log(names);

//Remove value in array in start we use shift() method
names.shift();
console.log(names);

let nums_Array = [8, 5, 2, 9, 1, 7];
nums_Array.sort(); ////sort your array like asscending order
console.log(nums_Array);
