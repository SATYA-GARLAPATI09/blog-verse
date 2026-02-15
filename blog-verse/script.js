console.log("hi mama this is script file   ");
let name = "satya";
console.log(name);

let age = null;
console.log(age);

let isLoggedIn = false;
console.log(isLoggedIn);

let person={
    name:"satya",
    age:21,
}
console.log(person);
console.log(person.name);
console.log(person.age);


console.log(typeof (person) );
console.log(typeof person.name );
console.log(typeof person.age );


console.log(typeof (age) );
console.log(typeof (name));
console.log(typeof (isLoggedIn) );
console.log(typeof (null) );

// arthimetic operators
// arthimetic operators
let x = 5;
let y = 8;
let z = 10;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x**y);
console.log(x++);
console.log(x--);
// equality operators
 y = "5";
 let k;
console.log(x===y);
console.log(x==y);
console.log(x!==y);
console.log(x!=y);
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log(x>=y && x===5);
console.log(x+k);
console.log(k);
// logoical operators
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);
// string operators
let str1 = "satya";
let str2 = "Garlapati";
let fullName = str1 + str2;
console.log(fullName);
console.log(str1 + str2);
console.log(str1 + " " + str2);
// str concatenation
console.log(`Hello ${str1} ${str2} world`);
console.log(`Hello ${str1} ${str2} world. I am ${age} years old`);

// assignment operators
let a = 10;
a += 5;
console.log(a);
a -= 5;
console.log(a);
a *= 5;
console.log(a);
a /= 5;
console.log(a);
a **= 5;
console.log(a);
a %= 5;
console.log(a);     

// terinary operator
let marks = 35;
if (marks >= 35) {
    console.log("pass");
} else {
    console.log("fail");
}
// shorthand terinary operator
let result = marks >= 35 ? "pass" : "fail";
console.log(result);

// increment and decrement operators
let count=0;
console.log(count);
console.log(count++);
console.log(++count);

console.log(count--);
console.log(--count);

// typeof operators

console.log(typeof count);
console.log(typeof "satya");
console.log(typeof 10);




