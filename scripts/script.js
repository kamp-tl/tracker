let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let buttonCase = document.getElementById("buttonCase");
let hiddenCase = document.getElementById("hiddenCase");


function showRoutine() {
    buttonCase.style.display = "none";
    hiddenCase.style.display = "flex";
}

function flipback() {
    if (buttonCase.style.display == "none"
    && hiddenCase.style.display == "flex"){
    hiddenCase.style.display = "none";
    buttonCase.style.display = "flex"}
}

