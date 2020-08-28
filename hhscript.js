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


//auto banner msg scroll
var msgIndex = 0;
showMsgs();

function showMsgs() {
    var i;
    var msgs = document.getElementsByClassName("msg");
    for (i=0; i < msgs.length; i++) {
        msgs[i].style.display = "none";
    }
    msgIndex++;
    if (msgIndex > msgs.length) {msgIndex = 1}
    msgs[msgIndex-1].style.display = "block";
    setTimeout(showMsgs, 15000);
}