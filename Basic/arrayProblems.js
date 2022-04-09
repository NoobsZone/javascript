let array = [5];
let addition =0;
let anotherArray = []
let i =10;
// for (let i=0; i < 10; i++){
    let x = (i*(i+1))/2
    console.log('i', x)
    
// }

for(let i = 0; i < array.length ; ++i){
    addition = addition + array[i]
    anotherArray.push(addition);
    // anotherArray.splice(addition)
    console.log(anotherArray);

}

let newArray = array.reverse()
console.log('newArray', newArray);
array.forEach( (a,b) =>{
console.log('a,b', a,b)
})

array.reduce( (a,b) => {
    console.log('a,b', a,b)
})

function sum (a,b){
    return a+b;
}
console.log('sum of (a,b) ', sum(10,20))