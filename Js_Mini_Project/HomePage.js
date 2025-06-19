const domroot = document.getElementById('root');
domroot.className="main";
const getTrendingVideos = () => {
    const req = fetch("https://youtube138.p.rapidapi.com/v2/trending", {
        method: "GET",
        headers: {
            "x-rapidapi-host": "youtube138.p.rapidapi.com",
            "x-rapidapi-key": '80b8b8ba38mshf371c071e1b5723p14da2bjsn7cc468230dfc',
        }
    })
    const pr2 = req.json();
    pr2.then(data => {
        console.log(data); // always log to see the structure!
        data.list.forEach(item => {
            const div = document.createElement('div');
            div.className="card";
            div.innerHTML = `
            <div>
            <img src ="${item.videoThumbnails[0].url}" height="200px" />
            </div>
            <div>
            <img src = "${item.authorThumbnails[0].url}"/>
            <p>${item.publishedText}</p>
            <p>${item.viewcountText}</p>
            </div>`
            ;
            domroot.appendChild(div);
        });
    })
};

getTrendingVideos();
