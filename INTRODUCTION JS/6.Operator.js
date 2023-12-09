// Arithemetic Operators 

let num1 = 2;
let num2 = 3;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 % num2);
console.log(num1 / num2);

// Increment / Decrement Operators - 
// 1. Pre Increment   ++variableName
// 2. Post Increment  variableName++

let number = ++num2; //increase first and then assign
console.log("PreNumber : " +  number)
 
let Newnumber = num2++ //first assign the value and then increase
console.log("PostNumber : " + Newnumber)

let FirstName = "M ";
let LastName = "Ashok";
console.log(FirstName + LastName); //Concatition

// 3. Comparison Operator
let num5 = 6;  //number
let num6 = '6'; //string
console.log(num5 < num6);
console.log(num5 > num6);
console.log(num5 <= num6);
console.log(num5 >= num6);
console.log(num5 == num6);   //compares only value
console.log(num5 === num6);  //compares value and type
console.log(num5 != num6);
console.log(num5 !== num6);

// 4. Logical Operator 

// i) And 
// condition1 AND condition2 - if both are true then true else false
let password = '12345';
let confirmPassword = '123456';
console.log(password == confirmPassword && password.length >=6);

// ii) OR - if any condition is true - then true
console.log(password == confirmPassword || password.length >=6);

// iii) NOT - if true then false 
console.log(!(password == confirmPassword))


// 5. Turnary Operator 

let age = 26;
let married = age > 24 ? 'Married' : 'Unmarried';
console.log(married);

// 1. Assignment Operators 
// =, +=, -=, *=, /=, %=, **=
let name = 'Ashok';
console.log(name);

let num7 = 2;
num7 += 1;    //num8 = num8 + 1
console.log(num7);

let num8 = 2;
num8 -= 1;  //num8 = num8 - 1
console.log(num8);
