// // console.log("hello");
// console.log(a);
// var a = 10;

// a = 4;
// console.log(a);
// var a = 40;
// console.log(a);
// let b=9;
// console.log(b);
// b=90;
// console.log(b);
// // let b=9;
// function s (){
//     var a =10;
//     console.log(a);
// }
// s();
// console.log(typeof(()=>{}));
// const z = "7";
// const y = "7";
// console.log(z===y);

// const z = (a,b)=>{
//     return(
//         console.log(a+b)
//     )
// }
// z(4,7);
// const name ="rajat";
// switch(name){
//     case "aman":{
//         console.log("nothing")
//     }
//     case "rajat":{
//         console.log("i gotchu")
//     }
// }

// objects are used to store the properties in the form of key value pairs inside the curly braces
// const obj = {
//     name:"rajat",
//     age:23,
//     gender:"male",
//     address:{
//         many:["delhi","mubai"],
//     }
// }
// // obj.title ="info"
// // console.log(Object.entries(obj));
// // // spread Operator
// // const ob = {...obj,class:"8th"};
// // console.log(ob);
// // console.log(obj===ob);
// // obj.freeze(obj);
// const{name,age} = obj;
// console.log(name);

// >>>Arrays 
// const arr =["rajat",23,"hello","yui"];
// console.log(arr.length);
// console.log(arr.toString());
// console.log(arr.join("-"));
// console.log(arr.pop());
// arr.push("9");
// console.log(arr);
// arr.unshift("31");
// console.log(arr);

// const arr =[1,2,3,4,5,6,7,8];
// // // arr.forEach((ele)=>{
// // //     console.log(ele*2);
// // // })
// // arr.map((ele)=>{
// //     console.log(ele*5);
// // })

// // arr.filter(()=>{
// //     console.log(ele>=5);
// // })
// arr.find((ele)=>{
//     console.log(ele[0]==="1");
// })

// const dom = document.getElementById('root');
// const  p = document.createElement('div');
// p.style.backgroundColor="red";
// p.innerHTML=`
// <p>hello</p>
// <p>How are you</p>`
// dom.appendChild(p);
// const HandleClick =()=>{
//     const text = document.createElement('p');
//     p.innerHTML=`
//     <p>Hellp</p>`
// }
// const a = ()=>{
//     console.log("a")
//     b();
// }
// const b = ()=>{
//     console.log("b")
//     c();
// }
// const c = ()=>{
//     setTimeout(()=>{
//         console.log("Setting time out");
//     },1000);
// }
// a();
// const obj ={
//     name:"asus",
//     version:"3.45",
//     price:"34k",
// }
// obj.lld="dfd";
// // delete obj.name;
// // console.log(obj);
// // const prop = prompt("enter property to search"); //taking input from user
// // // const val = prompt("enter its val");
// // // obj[prop]=val;
// // const k = prompt("What you want to add");
// const v = prompt("val");
// obj.k=v;
// console.log(obj);
// const d = prompt("what do you want to delte");
// delete obj[d];
// console.log(obj);
const info ={
    name:'divya',
    age:22,
    gender:"female",
    height:"180",
    weight:22,
    allinfo:function (){
        console.log(`Name is ${this.name} age would be ${this.age}`); //function inside object
    },
    bmi:function(){
        const bmi = this.height/this.weight*weight;
        if(bmi<=20){
            console.log("you are underweight")
        }
        else if(bmi>21&&bmi<=25){
            console.log("you are absolutely fine");
        }
        else{
            console.log("you are overweight");
        }
    }
}
info.bmi();

