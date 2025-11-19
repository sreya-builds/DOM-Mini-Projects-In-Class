var grow = 0
var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')
btn.addEventListener('click',function(){
  btn.style.pointerEvents = "none"

  var num = 50 + Math.floor(Math.random()*50)
  console.log(num);
  
   var bubble = setInterval(function(){
    grow++
    h2.innerHTML = grow + '%'
    console.log('grow');
    inner.style.width = grow+'%'
   },num);
     
  setTimeout(function(){
   clearInterval(bubble)
   btn.innerHTML = 'Downloaded'
   btn.style.opacity = 0.5
   console.log('Downloaded in',num/10,'seconds');
  },num*100);

  
  
})
