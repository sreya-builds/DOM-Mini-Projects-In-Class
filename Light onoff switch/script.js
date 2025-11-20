const onBtn = document.querySelector(".on");
const offBtn = document.querySelector(".off");
const bulbImg = document.getElementById("bulb");
const body = document.body;
const heading = document.querySelector("h2");
const balloonContainer = document.querySelector(".balloons");

function releaseBalloons() {
    for (let i = 0; i < 8; i++) {
        let b = document.createElement("div");
        b.classList.add("balloon");

        // Random left position + Random color
        b.style.left = Math.random() * 90 + "vw";
        b.style.background = getRandomColor();

        balloonContainer.appendChild(b);

        // Remove balloon after animation
        setTimeout(() => {
            b.remove();
        }, 10000);
    }
}

function getRandomColor() {
    const colors = ["#ff6f91", "#ff9671", "#ffc75f", "#f9f871", "#8ccae3"];
    return colors[Math.floor(Math.random() * colors.length)];
}



onBtn.addEventListener("click",()=>{
    bulbImg.src = "on-bulb.png";
    body.style.backgroundColor = "#fff7b1";
    heading.style.color = "black";
    bulbImg.classList.add("slow-blink");
    setTimeout(() => {
    bulbImg.classList.remove("slow-blink");
}, 2500); 

  releaseBalloons();
});
const sadContainer = document.querySelector(".sad-emojis");

function releaseSadEmojis() {
    for (let i = 0; i < 10; i++) {
        let e = document.createElement("div");
        e.classList.add("emoji");
        e.innerText = "😢";  // sad emoji

        // random horizontal position
        e.style.left = Math.random() * 90 + "vw";

        // random animation delay
        e.style.animationDelay = Math.random() * 0.7 + "s";

        sadContainer.appendChild(e);

    
        setTimeout(() => {
            e.remove();
        }, 10000);
    }
}

offBtn.addEventListener("click",()=>{
    bulbImg.src = "off-bulb.png";
    body.style.backgroundColor="#2c2c2c";
    heading.style.color="white";

    releaseSadEmojis();
});