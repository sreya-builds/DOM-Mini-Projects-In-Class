const love = document.getElementById("loveIcon");
const like = document.getElementById("likeIcon");
const dislike = document.getElementById("dislikeIcon");
const heartEmojis = ["❤️","💖","💗","💓","💕","💘","💝"];
const smileEmojis = ["😊","😄","😁","😆","😍","🤩"];
const sadEmojis = ["😢","😭","😞","😟"];


//animation start
 //new element banana hai (heart)
 function createHearts(){
 const heart  = document.createElement("div");
  heart.innerText = heartEmojis[Math.floor(Math.random()*heartEmojis.length)];
  heart.classList.add("parallax-fly");
  heart.style.fontSize = Math.random() * 20 + 20 + "px"; 
  heart.style.left = Math.random()*150+"vw";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
 }

love.addEventListener("click",function(){

      if(iconsLocked)return;
      resetIcons();
        love.style.color = 'red';
        for(let i=0;i<15;i++){
       createHearts();
  }
     lockIcons();
    })
//new element banaya hai (smile)
  function createSmiles(){
   const smile = document.createElement("div");
   smile.innerText=smileEmojis[Math.floor(Math.random()*smileEmojis.length)];
   smile.style.fontSize = Math.random()*20 + 20 + "px";
    smile.style.left = Math.random()*100 + "vw";
    smile.classList.add("smile-drop");
    document.body.appendChild(smile);
   setTimeout(()=>smile.remove(),6000);
  }
 like.addEventListener("click",function(){

    if(iconsLocked)return;
      resetIcons();
    like.style.color = 'green';
    for(let i=0;i<15;i++){
        createSmiles();
    }
     lockIcons();
})


//new element banaya hai (sad)
function createSad(){
   const sad = document.createElement("div");
   sad.innerText=sadEmojis[Math.floor(Math.random()*sadEmojis.length)];
   sad.style.fontSize = Math.random()*20 + 20 + "px";
    sad.style.left = Math.random()*100 + "vw";
    sad.classList.add("sad-shake");
    document.body.appendChild(sad);
   setTimeout(()=>sad.remove(),4000);
  }
dislike.addEventListener("click",function(){

    if(iconsLocked)return;
      resetIcons();
    dislike.style.color="blue";
    for(let i=0;i<15;i++){
        createSad();
    }
    lockIcons();
})

function resetIcons() {
    love.style.color = "";
    like.style.color = "";
    dislike.style.color = "";
}
 let iconsLocked = false;

 function lockIcons(){
    iconsLocked=true;

    setTimeout(()=>{
        iconsLocked=false;
    },2000);
 }


  