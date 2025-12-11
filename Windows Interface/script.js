let menu = document.getElementById("custom-menu");

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();  

    menu.style.display = "block";

    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
});

document.addEventListener("click", function() {
    menu.style.display = "none";
});
let startBtn = document.querySelector(".start-btn");
let startMenu = document.querySelector(".start-menu");

startBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    startMenu.style.display =
        startMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (e) {
    if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
        startMenu.style.display = "none";
    }
});
