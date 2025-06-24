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
// const info ={
//     name:'divya',
//     age:22,
//     gender:"female",
//     height:"180",
//     weight:22,
//     allinfo:function (){
//         console.log(`Name is ${this.name} age would be ${this.age}`); //function inside object
//     },
//     bmi:function(){
//         const bmi = this.height/this.weight*weight;
//         if(bmi<=20){
//             console.log("you are underweight")
//         }
//         else if(bmi>21&&bmi<=25){
//             console.log("you are absolutely fine");
//         }
//         else{
//             console.log("you are overweight");
//         }
//     }
// }
// info.bmi();
// console.log(a);
// var a = "hello";
// console.log(a);
// a="puppy";
// var a = "kitty";
// console.log(a);
// function add(){
//     var b =45;
//     console.log(b);
// }
// console.log(b);
// add();
// let a  = "apple";
// console.log(a);
// a="banana";
// console.log(a);
// let a = "kiiw";
// {
//     const b = "banana";
//     function add(){
//         var a  ="apple";
//         console.log(a);
//         console.log("inside the function");
//         console.log(b);
//     }
//     add();
//     console.log("outside the function");
//     console.log(b);
// }
// var can be reassigned and can be redeclared>>let can be reassigned but cant be redeclared>>const cant be reassigned and cant be redeclaered
// var is only function scoped that means it can be used inside a fucntion only
// let and const are block scoped that means that they can be used inside the block

// promitiv type >number>string>boolean>
// const a = 5;
// const b ="124";
// console.log(a-b);
// >>>functions in js
// const arr = [1,2,3,4,5];
// arr.forEach((e,i)=>{
//     console.log(e*2,"----",i);
// })
// higher order fuunctiond ---forEach,Map,setTimeout,setInterval,filter
// const pr1 = fetch('https://www.google.com/').then((res)=>{
//     res.json
// }).catch("bye");
// console.log(pr1);
// setTimeout(()=>{
//     console.log("happy")
// },1000);

// const arr = [1,2,3,4];
// // arr.pop(); //deletes  an elemnt from the last
// // console.log(arr);
// // arr.push("happy");//add an element at the last
// // console.log(arr);
// arr.join("-");
// console.log(arr);
// const arr1 = [1,2,6,4,5];
// // const arr2 =arr1.slice(3);
// const even = arr1.filter(nums=>nums%2==0);
// console.log(even);

// const obj = {
//     name:"rajat",
//     age:21,
//     Gender:"male",
//     isSubs:function (){
//         if(this.age>21){
//             console.log("yes");
//         }
//         else{
//             console.log("no");
//         }
//     }
// }
// // obj.name="sikka"
// // obj.ff="ertrf";
// const k = prompt("enter any key");
// const v = prompt("enter any val");
// obj[k]=v;
// // const a =Object.entries(obj);
// console.log(obj);
// const{name,age}=obj; //destru
// console.log(name ,age);

// const b = obj;
// if(obj===b){
//     console.log("ture");
// }
// else{
//     console.log("false");
// }
// const a =10;
// const f =10;
// const cc = (a==f?.a+f);
// console.log(cc);

// const domroot = document.getElementById('root');
// const header = document.createElement('h1');
// header.className="card";
// header.className='header';
// header.innerHTML=`Products List`;
// domroot.appendChild(header);
// const parent = document.createElement('div');
// parent.className="parent";
// const req =fetch('https://dummyjson.com/products?limit=20')
//   .then((res => res.json()))
//   .then(data => {
//     data.products.forEach(product => {
//         const d = document.createElement('div');
//     d.className = "hh";
//     d.innerHTML = `
//         <img src="${product.images[0]}" width="200"/>
//         <h1>Id: ${product.id}</h1>
//         <h2>Rating: ${product.rating}</h2>
//         <h2>Brand: ${product.brand}</h2>
//         <button>Add To Cart</button>
//       `;
//       parent.appendChild(d);
//     });
//   });
//   domroot.appendChild(parent);
// const button = document.createElement('button');
// domroot.appendChild(button);
// button.onclick = () => HandleClick();
// const HandleClick =()=>{
//   const pr1 = fetch('https://dummyjson.com/ip');
//   pr1.then((res)=>{
//     const pr2 = res.json();
//     pr2.then((data)=>{
//       console.log(data);
//       header.innerHTML=`
//       <h2>Ip would be: ${data.ip}</h2>
//       <h2>User Agent : ${data.userAgent}</h2>`
//     })
//   })
// }
// domroot.appendChild(header);
// Select parent and child buttons
// const parentBtn = document.getElementById('parent');
// const childBtn = document.getElementById('child');

// // Add event listener on parent
// parentBtn.addEventListener('click', () => {
//   console.log('Parent button clicked');
// });

// // Add event listener on child
// childBtn.addEventListener('click', () => {
//   console.log('Child button clicked');
// });
// var let const,type coercion ,loose and strict equality,data types in js(Pmt and non pmt),Async callbacks,callbacks
// HigherOrderfn - array -obj -promises-events - eventlisitner - destrctrunig - spreading-Bubbling-capturing-4types of functions
// domApi - api calling - 
//



