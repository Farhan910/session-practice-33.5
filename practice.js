// --------------let const-------------

let name = 'farhan'
name = 'faruk'
console.log(name);

const myName = 'farhan'
const myNameNew = 'faruk'
console.log(myNameNew);


// -------------templete string-----------

const name = 'farhan'

const newName = `
'hey ${name} welcome to our team.
`
console.log(newName);

// ---------------arrow function----------------
const num = sum => sum * 2;
const value = num (20)
console.log(value);

const num = (sum1,sum2,sum3 = 10 )=>   sum1 + sum2 + sum3;
const value = num (20,14,40)
console.log(value);


// --------------array destructuring----------------
const products = [30,20,10,5,4,75]

const [one,two,three] = products;
console.log(three,one);


// --------------spread array---------------
const numbers = [10,20,30,40,50,60]
const newArray = [...numbers]
console.log(...newArray);

// ----------------- for of values-----------
const numbers = [ 10,20,30,40,50,60,40,5,25]
for(const number of numbers){
    const newName = number * 2;
    console.log(newName);
}


// ---------------- default value set --------------
const numbers = (num1,num2,num3 = 20) => num1 + num2 + num3 ;
const value = numbers(10,20)
console.log(value);

// --------------map-------------- 

const array = [10,20,30,40,50,650]

const number = array.map(number => number + 5)
console.log(...number);

// -----------------filtar---------------- 
const array = [10,20,30,40,50,650]

const number = array.filter(number => number < 20)

console.log(...number);



// ------------------ find------------ 
const products = [{name: 'Farhan',age:20 ,color:'black',price:2000,
name: 'Farhan',age:20 ,color:'white',price:40000}]
const name = products.find(name => products.price = 40000)
console.log(name);