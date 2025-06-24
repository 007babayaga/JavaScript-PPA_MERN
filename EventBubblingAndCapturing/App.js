// bubbling means child ----parent like a bubble
// capturing means parent ---- child

// bubbling

const parent = document.getElementById('parent');
const child = document.getElementById('child');

child.addEventListener('click',()=>{
    console.log("child clicked")});
parent.addEventListener('click',()=>{
    console.log("parent clicked")
})

// capturing

child.addEventListener('click',()=>{
    console.log("child clicked")});
parent.addEventListener('click',()=>{
    console.log("parent clicked")
},true)
