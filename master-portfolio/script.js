
"use strict";

function jump() {
    monster.classList.toggle("jump");
    console.log(see_moreBtn);
}

document.querySelector("#see_more").addEventListener("click", jump);

function goBack() {
    window.history.back();
}

document.querySelector(".icon").addEventListener('click', () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
});