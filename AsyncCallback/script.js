console.log("Start");

const greet =()=>{
    console.log("Greetings");
}

function m(){
    greet();
    console.log("mid");
}
m();
console.log("end");

// const happy=()=>{
//     console.log("Happy");
// }
// const Birthday=()=>{
//     console.log("  Birthday");
// }
// const ToYou=()=>{
//     console.log("  to you"); 
// }
// happy(Birthday(ToYou()));

setTimeout(()=>{
    console.log("Happy");
},1000);
setTimeout(()=>{
    console.log("Birthday")
},2000);
setTimeout(()=>{
    console.log("to you");
},3000);



// const timeup=()=>{
//     console.log("time is up");
// }
// setTimeout(timeup,1000);

// console.log("end");


// console.log("Start");
// const greet = () => {
//     console.log("Greetings");
// };

// const temp = () => {
//     setTimeout(greet,5000);
//     setTimeout(greet, 0);
//     console.log("mid");
// };
// temp();
// console.log("end");


// setTimeout(()=>{
//     console.log("Happy Birthday");
// },1000);


