//create current date
let currentDate = new Date();
console.log(currentDate);


//creating a custom Date
let newYear = new Date('2026-1-1');
console.log(newYear);

//type of date
console.log(typeof(newYear));


console.log(newYear.getDate());

//set the date
newYear.setDate(2);
console.log(newYear);