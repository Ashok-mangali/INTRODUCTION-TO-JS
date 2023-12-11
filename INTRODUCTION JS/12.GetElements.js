//1. getElementById() - it returns unique element

let h1El = document.getElementById("h1");
console.log(h1El.innerHTML);

//2. getElementsByTagName() - it returns an array of elements

let h1 = document.getElementsByTagName("h1");
console.log(h1);


//3. getElementsByClassName() - returns an array of elements
let paraClassElements = document.getElementsByClassName('para');
console.log(paraClassElements);

//4. querySelector()
let allParaClassElements = document.querySelector('.para');
console.log(allParaClassElements);
