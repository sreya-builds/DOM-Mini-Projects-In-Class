let a=document.querySelector("h5");
let btn = document.querySelector("#add");
let check = 0


btn.addEventListener("click",function(){
    if(check == 0){
   a.innerHTML = "Taste It";
   a.style.color = "green";
   btn.innerHTML = "How's the Taste"
   check = 1;
}else{
     a.innerHTML = "Try It";
     a.style.color = "red";
     btn.innerHTML = "Add Recipe"
     check = 0;
}
})