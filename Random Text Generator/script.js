var btn = document.querySelector('button')
var main = document.querySelector('main')
var arr = ['Hey!I am Coder','JS Dom','Sheryians is best','Harsh bhiya is the best teacher','Sarthak Bhaiya is the best inspiration','Sheryians Team is Amazing','Awwarded Website Series','Keep Exploring']

btn.addEventListener('click',function(){
    var h1  = document.createElement('h1')

    var a = Math.floor(Math.random()*arr.length)
    var x = Math.random()*80
    var y = Math.random()*80
    var r = Math.random()*360
    var scl = Math.random()*3
    h1.innerHTML = arr[a]
    h1.style.position = 'absolute'
    h1.style.left = x + '%'
    h1.style.top = y + '%'
    h1.style.rotate = r + 'deg'
    h1.style.scale = scl
    main.appendChild(h1)
    
})