// execute logoFunction on user scroll
window.onscroll = function () { logoFunction(); };
// calculate height
var coverHeight = document.getElementById("cover").clientHeight;
// target homemsg
var homeMsg = document.getElementById("homemsg");
// target navlogo
var navLogo = document.getElementById("navlogo");
// switch out homeMsg for navLogo after homeHeight is surpassed
function logoFunction() {
    if (window.pageYOffset < coverHeight) {
        navLogo.style.display = 'none';
        homeMsg.style.display = 'block';
    }
    else {
        navLogo.style.display = 'block';
        homeMsg.style.display = 'none';
    }
}
