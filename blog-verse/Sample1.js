// spread operators in js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
// left operator
const [first, ...rest] = [10, 20, 30, 40];
console.log(first);
console.log(rest);

// for object
const person = { name: "Alice", age: 25, city: "New York" };
const { name, ...otherDetails } = person;
console.log(name);
console.log(otherDetails);

// spread operators in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 } 

 
// dynamic object elocation

const key = "mail";
const mail = "alice@example.com";
const dynamicObj = { [key]: key, mail };
console.log(dynamicObj);