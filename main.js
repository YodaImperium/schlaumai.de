let noButton = document.querySelector("#no");
let yesButton = document.querySelector("#yes");

let moving = false;

let video = document.querySelector("#video1")

noButton.addEventListener("click", moveRandomly);
noButton.addEventListener("mouseover", moveRandomly);

yesButton.addEventListener("click", onAccept);

console.log()

function toggleMoving() {
    moving = !moving;
}

function moveRandomly() {
    if (moving) {
        return;
    }
    moving = true;

    yesButton.style.transform = "none";
    noButton.style.transform = "none";

    let height = document.body.clientHeight;
    let width = document.body.clientWidth;

    yesButton.style.left = noButton.style.left;
    yesButton.style.top = noButton.style.top;

    let x = Math.floor(Math.random()*(width - 100));
    let y = Math.floor(Math.random()*(height - 100));
    noButton.style.left = x+"px";
    noButton.style.top = y+"px";

    setTimeout(toggleMoving, 100);
}

function onAccept() {
    if (moving) {
        return;
    }
    document.getElementById("accept").style.display = "block";
    document.getElementById("question").style.display = "none";
    document.getElementById("content").style.top = "10%";
    noButton.style.display = "none";
    yesButton.style.display = "none";
}