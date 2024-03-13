
let num1=8;
let num2 =2;
document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;


// let num1=document.getElementById("num1-el");
// let num2=document.getElementById("num2-el");

// num1.textContent=8;
// num2.textContent=2;




let sumEl = document.getElementById("sum-el");



function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}


function substruct(){
    let result = num1 - num2;
    sumEl.textContent="Substruct: " + result;
    
}

function divide(){
    let result = num1 / num2;
    sumEl.textContent="Divide: " + result;
    
}

function multiply(){
    let result = num1 * num2;
    sumEl.textContent="Multiply: " + result;
    
}