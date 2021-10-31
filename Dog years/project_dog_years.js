//Man's Age
let myAge = 20;
//Early Years
let earlyYears = 2;
//Converting formula:
earlyYears *= 10.5;
//Later Years:
let laterYears = myAge - 2;
//Next converting formula:
laterYears = laterYears*4;
//Checking status:
console.log(laterYears + ' ' + earlyYears);
//Man's age in dog years
const myAgeInDogYears = earlyYears + laterYears;
//My name in lower case:
const myName = 'Duc Manh'.toUpperCase();
//Result:
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)