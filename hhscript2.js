// target navlogo
var navLogo = document.getElementById("navlogo");

// dont display navlogo til scroll
window.onload = function() {loadFunction();};

function loadFunction() {
    window.onload = navLogo.style.display = 'block';
}

// switch out homeMsg for navLogo after homeHeight is surpassed
// function logoFunction() {
//     if (window.pageYOffset < homeHeight) {
//         navLogo.style.display = 'none';
//         homeMsg.style.display = 'block';
//     } else {
//         navLogo.style.display = 'block';
//         homeMsg.style.display = 'none';
//     }
// }