"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string
let userName = "AlizaAbid";
console.log(userName);
// boolean
let ismarried = false;
console.log(ismarried);
// number
let age = 23;
console.log(age);
//sum
let num1 = 5;
let num2 = 5;
console.log(num1 + num2);
//substract
let numb1 = 10;
let numb2 = 5;
console.log(numb1 - numb2);
//multiply
let num3 = 4;
let num4 = 4;
console.log(num3 * num4);
//divide
let numb3 = 6;
let numb4 = 3;
console.log(numb3 / numb4);
//work 
let workFinish = true;
console.log(workFinish);
//square
let layer = 5;
let apple = 5;
let power = layer ** 2;
console.log(power);
// module %
let mango = 5;
let bags = 2;
let reminder = mango % bags;
console.log(reminder);
//bmi
let weightInKg = 50;
let heightInMeter = 1.45;
let bmi = weightInKg / (heightInMeter * heightInMeter);
console.log(bmi);
// unary operator
let a = 10;
++a;
--a;
console.log(a);
// comparision operator
let c = 5;
let d = 2;
c == d;
c != d;
c < d;
c > d;
// simple assignment
let e = 5;
e += 6;
console.log(e);
//logical operator
let k = 10;
let l = 20;
console.log(k > 30 && l > 30);
console.log(k > 30 || l > 30);
console.log(!(k > 30));
// if, elseif, else
let percentage = 92;
if (percentage >= 90) {
    console.log("party");
}
else if (percentage >= 95) {
    console.log("party & gift");
}
else {
    console.log("no party");
}
let day = 19;
day >= 18 ? "you allowed" : "you not allowed";
console.log(day);
