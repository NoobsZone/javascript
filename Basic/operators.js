// let x = 5;         // assign the value 5 to x
// let y = 2;         // assign the value 2 to y
// let z1 = x + y; 
// let z2 = x * y;
// let z3 = x/y;    // assign the value 7 to z (5 + 2)
// console.log('z1', z1)
// console.log('z2', z2)
// console.log('z3', z3)

// let a="joy bangla"
if (true){
    console.log('True')
} else {
    console.log('False')
}

// let isMember = true;

function getFee(isMember = true) {
    
    return (isMember ? '$2.00' : '$10.00');
  }
  

console.log(getFee())
console.log(getFee(false))

// Function
function add(a,b){
    return a+b;
}
console.log("The sum of two numbers is :",add(10,20))