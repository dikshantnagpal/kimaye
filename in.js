let images=[
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kiwi_bannerArtboard_1.jpg?v=1650952002",
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kiwi_bannerAssured_safety_1.jpg?v=1650952014",
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kiwi_bannerWe_serve_you_1.jpg?v=1650952015"
]
let left=document.getElementById("left")
let right=document.getElementById("right")
let crauser=document.getElementById("crauser")
let imgstate=0
right.addEventListener("click",function(){
    imgstate++
    if(imgstate==images.length){
        imgstate=0
    }
    crauser.src=images[imgstate]
})
left.addEventListener("click",function(){
    imgstate--
    if(imgstate<0){
        imgstate=images.length-1
    }
    crauser.src=images[imgstate]
})