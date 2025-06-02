const Handleupload=(e)=>{
    const file = e.target.files[0];
    Papa.parse(file,{
        header:true,        
    complete:handleCSVread,
    })
};

const handleCSVread = (res)=>{
    const {data,error} = res;
    if(Array.isArray(error)&&error.length>0){
        alert("Error in file");
        console.log("error",error);
    }
    else{
        renderUI(data);
        console.log(data);
    }
}

const parent = document.getElementById("parent");
const renderUI=(data)=>{
    data.forEach((obj) =>{
        const{Name,RollNum,GithubLink} = obj
        const username = GithubLink.split("/").pop();

    const newCard = document.createElement('div');
    newCard.className="row-card";
    newCard.innerHTML=`
    <section>
        
    </section>
    <div class="left">
        <h2>${Name} (${username})</h2>
        <h2>${RollNum}</h2>
        <a target="_blank" href="${GithubLink}">Github link</a>
    </div>
    
    <div class="right">
        <img src="">
    </div>
    `


    const pr1 = fetch(`https://api.github.com/users/${username}`)
    pr1.then((res)=>{
        const pr2 = res.json();
        pr2.then((info)=>{
            const {avatar_url,location,company} = info;
            const im = newCard.querySelector('img');
            im.src=avatar_url;
            const l = newCard.querySelector('section');
            l.innerHTML=`
            <p>📍${location}</p>
            <p>🏢${company}</p>`
        })
    })


    parent.appendChild(newCard);
    });
    
};
