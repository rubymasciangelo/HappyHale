window.onscroll = function() {bannerFunction()};

var banner = document.getElementById("banner");

var sticky = banner.offsetTop;

function bannerFunction() {
    if (window.pageYOffset >= sticky) {
        banner.classList.add("sticky")
    } else {
        banner.classList.remove("sticky");
    }
}