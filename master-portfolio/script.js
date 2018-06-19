"use strict";


document.querySelector(".icon").addEventListener('click', () => {
    // Get element with id of myTopnav which we save in x
    var x = document.getElementById("myTopnav");
    // if x has - and only has - the classname of topnav
    if (x.className === "topnav") {
        // it will add the class "responsive"
        x.className += " responsive";
    } else {
        // else it will be reassigned "topnav"
        x.className = "topnav";
    }
});
