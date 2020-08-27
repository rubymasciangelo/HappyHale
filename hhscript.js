// execute bannerFunction on user scroll
window.onscroll = function() {bannerFunction()};

// target #banner
var banner = document.getElementById("banner");

// define offset position of banner
var sticky = banner.offsetTop;

// add sticky class to banner when you reach the scroll position and remove when you leave the scroll position
function bannerFunction() {
    if (window.pageYOffset >= sticky) {
        banner.classList.add("sticky")
    } else {
        banner.classList.remove("sticky");
    }
}