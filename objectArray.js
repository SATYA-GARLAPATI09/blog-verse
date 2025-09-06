let person ={
    name:"satya",
    age:21,
    hobbies:["reading","travelling","coding"]   
}
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);

// destructing assigment
const {name,age,hobbies} = person;
console.log(name);
console.log(age);
console.log(hobbies);
// mapping array
person.hobbies.map(hobby => console.log(hobby));
// adding new property to object
person.location = "India";
console.log(person.location);
console.log(person);
// filtering array
const filteredHobbies = person.hobbies.filter(hobby => hobby === "coding");
console.log(filteredHobbies);

// reducing array
let array=[1,2,3,4,5];

const top = array.reduce((accumulator, currentValue) => accumulator < currentValue? currentValue : accumulator, 0);
console.log(top);

// array of objects
let people2 =[
    {name:"satya", age:21},
    {name:"john", age:25},
    {name:"alice", age:23}
];
