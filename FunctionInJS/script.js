// immutable in JS means once a value is assigned to a variable then it will take some space in the memory 
// on re-asssigning the variable a new space in the memory is being created.
// let username="Aman";
// console.log(username);
// username="Rajat";
// console.log(username);

// type coercion in JS
// if "+" operator is there then it first use arithmetic operation then it will use concatenation
// let a = 2 + 5;
// console.log(a);
//  a = 2 +"hello";
// console.log(a);
// a = 2 + 3+"hello";
// console.log(a);
// a ="hello"+ 2 +4;
// console.log(a);

// let a = 2 - 5;
// console.log(a);
// a = 2 -"hello";
// console.log(a);
// a = 2 - 3-"hello";
// console.log(a);
// a ="hello"- 2 -4;
// console.log(a);
//  a = 2 + 5;
// console.log(a);
//  a = 2 +"hello";
// console.log(a);
// a = 2 + 3+"hello";
// console.log(a);
//  a ="100"-20;   //String is trying to convert into a number and then perform the calculation
// console.log(a);
//  a = 2 + 5;
// console.log(a);
//  a = 2 +"hello";
// console.log(a);
// a = 2 + 3+"hello";
// console.log(a);
// a ="8"-"7";
// console.log(a);

// ----------------------------------------------
// Strict and loose Equality
// loose equality
// let one =5;
// let two ="5";
// if(one==two){
//     console.log("Both are Equal");
// }
// else{
//     console.log("Both are  not Equal");
// }
// //---------------------------
// // Strict Equality ====
// let o =5;
// let p ="5";
// if(0===p){
//     console.log("Both are Equal");
// }
// else{
//     console.log("Both are  not Equal");
// }

// Fuctions in JavaScript
// fucntion declaration using fucntion Keyword

// sum(6,7);
// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,2);
// function sum(a,b){
//     console.log(10+a+b);
// }
// sum(1,2);

// fucntion declaration using variable Assignment

// const add1 = function sum(a,b){
//     console.log(a+b);
// };
// add1(3,4);

// const add2 = function (a,b){
//     console.log(a+b);
// };
// add2(3,4);

// -----------------------------------------------
// fucntion declaration using arrow keyword
// const add = (a,b)=>{
//     console.log(a+b);
// }
// add(4,6);
// const a ="am";
// switch (a) {
//     case "rajat":{
//         console.log("hi",a);
//         break;
//     }
//     case "aman":{
//         console.log("hi",a);
//         break;
//     }


// }

// const a = "rijwan";
// switch(a){
//     case "rajat":{
//         console.log("hello",a);
//         break;
//     }
//     case "Divya":{
//         console.log("hello",a);
//         break;
//     }
//     default :
//     console.log("Who the hell are you to try to login");
// }
// >>>>>>>>>>>>>>>>callBack function >>>>>>>>>>>>>
// const sum =(a,b,show)=>{
//     const res =a+b;
//     show(res);
// }
// const ShowResult=(txt)=>{
//     console.log(`${txt}`);
// }
// const a = 10;
// const b=20;
// const total= sum(a,b,ShowResult);

// const arr = ["a", 'b', 'c', 'd', 'e'];
// // for(let i =0;i<arr.length;i++){
// //     printdata(arr[i],i,arr);
// // }
// function printdata(fir, sec, third) {
//     console.log(fir, sec, third);
// }
// function printdata2(fir,sec){
//     console.log(fir,sec);
// }
// function printdata1(fir){
//     console.log(fir);
// }
// arr.forEach(printdata); 
// arr.forEach(printdata2);
// arr.forEach(printdata1)

// const arr =['a','b','c','d'];
// // function t(one,two,three){
// //     console.log(one,two,three);
// // }
// arr.forEach((one,two,three)=>{
//     console.log(one,two,three);
// });
// console.log(">>>>>>>>>>>>>>>");
// arr.map((one,two,three)=>{
//     console.log(one,two,three);
// });
// console.log(">>>>>>>>>>>>>>>");

// arr.filter((one,two,three)=>{
//     console.log(one,two,three);
// });
// console.log(">>>>>>>>>>>>>>>");

// arr.some((one,two,three)=>{
//     console.log(one,two,three);
// });
function add(a,b,c){
    const res  = a+b;
    c();
}
function ss(){
    console.log("happy Birthday");
}
add(10,20,ss);
