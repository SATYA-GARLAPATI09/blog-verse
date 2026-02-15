// switch case ex with calender
let day = '1';
switch(day) {
    case 0:
        console.log("Sunday");
        break;
    case '1':
        console.log("Monday");
        break;
    case '2':
        console.log("Tuesday");
        break;
    case '3':
        console.log("Wednesday");
        break;
    case '4':
        console.log("Thursday");
        break;  
    case '5':
        console.log("Friday");
        break;
    case '6':
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
        break;    

}

// if else ex with age
 let age =30;
 if(age>=18){
    console.log("i am elegible to vote");
    } else if(age==17){
        console.log("i will be elegible to vote next year");
    }else{
        console.log("i am not elegible to vote");
    
 }

//  while loop
    let i=1;
    while(i<=5){
        console.log(i);
        i++;
    }

    // do while loop
    let k=1;
    do{
        console.log(k++);
    }while(k<=5);
        
// for loop
let m;
for(m=0;m<6;m++)
{
    console.log(m);
    
}
// array of strings

let fruits = ["apple", "banana", "orange", "grape"];
for(let index=0;index<fruits.length;index++){
    console.log(fruits[index]);
}
// for of loop
for(let fruit of fruits){
    console.log(fruit);
}

for(key in fruits){
    console.log(`${key}:${fruits[key]}`);
}   

