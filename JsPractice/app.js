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


