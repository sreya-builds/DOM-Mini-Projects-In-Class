var cards = document.querySelectorAll('.card1,.card2,.card3')

cards.forEach(function(card){
    var love = card.querySelector('.love')
    card.addEventListener('dblclick',function(){
   love.style.opacity = 1
    love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0)'

    setTimeout(()=>{
        love.style.opacity=0
        love.style.transform = 'translate(-50%,-50%) scale(1) rotate(60deg)'
    },6000);
});
});
