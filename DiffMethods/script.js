const obj ={
    usrName:"rajat",
    age:40,
    gender:"male",
};
const arr =(Object.seal(obj));
obj.usrName="ii";
console.log(obj);