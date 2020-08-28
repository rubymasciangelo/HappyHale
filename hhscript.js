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


// banner msg slide//
var msgIndex = 1;
showMsgs(msgIndex);

function plusMsg(n) {
    showMsgs(msgIndex += n);
}

function showMsgs(n) {
    var i;
    var msgs = document.getElementsByClassName("msg");
    var dots = document.getElementsByClassName("dot");
    if (n > msgs.length) {msgIndex = 1}
    if (n < 1) {msgIndex = msgs.length}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    msgs[msgIndex-1].style.display = "block";
    dots[msgIndex-1].className += " active";
}

//auto
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