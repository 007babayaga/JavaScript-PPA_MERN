
// const a = document.getElementsByTagName("h1");
// const headinghandler = ()=>{
//     console.log("Button is clicked");
// }


// function submitHandler(e){
//     e.preventDefault();
//     const userNAme = e.target[0].value;
//     const userEmail = e.target[1].value;
//     const UserPhNo = e.target[2].value;
//     console.log("userName is " ,userNAme); 
//     console.log("userEmail is " ,userEmail);
//     console.log("UserPhoneNumber is " ,UserPhNo); 
//     const UserCard= document.getElementById("card");
//     UserCard.innerHTML = `
//     <p>username: ${userNAme}</p>
//     <p>email: ${userEmail}</p>
//     <p>PhoneNumber: ${UserPhNo}</p>
//     `;
//     const b = document.getElementsByTagName("form");
//     b[0].style.display="none";

// }
// function submitHandler(e) {
//     e.preventDefault();
//     // console.dir(e.target)
//     const username = e.target[0].value;
//     const email = e.target[1].value;
//     //    console.log(e.target[0].value,e.target[1].value)
//        console.log(e.target.username.value,e.target.email.value)
//     // userNameHandler({target: {value: username}});
    
// }


const cardElem = document.getElementById('card');

function userNameHandler(e) {
    const usrName = e.target.value;
    if (usrName.toLowerCase() !== usrName) {
        alert("Please input the text in Lower-case letters");
    }
    // const a = document.getElementById("i1");
    const title = document.createElement('h3');
    title.innerText = `HELLO ${e.target.value} !`;
    cardElem.appendChild(title)
}

function userEmailHandler(e) {
    const emailValue = e.target.value;
    if (emailValue.toLowerCase() !== emailValue) {
        alert("Please input the text in Lower-case letters");
    }
    // const a = document.getElementById("i1");
    const email = document.createElement('h4');
    email.innerHTML = `Email: ${e.target.value} !`;
    cardElem.appendChild(email)
}
function submitHandler(e){
    e.preventDefault();
}