
function userNameHandler(e){
    const button = document.querySelector("button");
    const UserName = e.target.value;
    if(UserName.toLowerCase()!==UserName){
        alert("Please Dont use Uppercase-letters");
    }
    
}
function formHandler(e){
    e.preventDefault();
    const UserName = e.target[0].value;
    const UserEmail = e.target[1].value;
    const UserPassword = e.target[2].value;
    const card = document.getElementById("card");
    // const a = document.createElement("p");
    card.innerHTML=`
    <p> UserName:${UserName}</p>
    <p>UserEmail:${UserEmail}</p>
    <p>UserPassword:${UserPassword}</p>
    <button onclick="BackButtonHandler()">Edit</button>
    <button>Flip</button>`
    ;
    // card.append(a);
    const form = document.getElementsByTagName("form");
    form[0].style.display="none";
    card.style.display="block";
}
function BackButtonHandler(){
    const form = document.querySelector("form");
    const card = document.getElementById("card");
    form.style.display="flex";
    card.style.display="none";
}
function backSideHandler(e){
    const userBloodGroup = e.target[3].value;
    console.log(userBloodGroup);
    const back = document.getElementById("back-side");
    back.innerHTML=`
    <p> UserAddress:${userBloodGroup}</p>
    `;
    back.style.display="block";
    back.style.display="block";
    const card = document.getElementById("card");
    card.style.display="none";
    
}
