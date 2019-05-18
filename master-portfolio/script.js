"use strict";

import ScrollReveal from "scrollreveal";

window.addEventListener("load", init);

function init() {
  document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", activeClassButtons);
  });

  fadeIn();
}

function fadeIn() {
  ScrollReveal().reveal(".item", { delay: 200 });
  ScrollReveal().reveal("#about_me", { delay: 400 });
}

document.querySelector(".icon").addEventListener("click", () => {
  // Get element with id of myTopnav which we save in x
  let x = document.getElementById("myTopnav");
  // if x has - and only has - the classname of topnav
  if (x.className === "topnav") {
    // it will add the class "responsive"
    x.className += " responsive";
  } else {
    // else it will be reassigned "topnav"
    x.className = "topnav";
  }
});

function activeClassButtons() {
  // Get the container element
  const btnContainer = document.querySelector("#wrapper");

  let btns = btnContainer.getElementsByClassName("btn");

  // Loop through the buttons and also adds the active class to the clicked button
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");

      // if theres no current active
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      // add class active to clicked
      this.className += " active";
    });
  }
}
