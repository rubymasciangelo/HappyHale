//auto nav msg switch
var msgIndex = 0;
showMsgs();

function showMsgs() {
    var i;
    var msgs = document.getElementsByClassName("msg");
    for (i=0; i < msgs.length; i++) {
        msgs[i].style.display = "none";
    }
    msgIndex++;
    if (msgIndex > msgs.length) {msgIndex = 1;}
    msgs[msgIndex-1].style.display = "block";
    setTimeout(showMsgs, 8000);
}


// execute logoFunction on user scroll
window.onscroll = function() {logoFunction();};

// calculate height
var homeHeight = document.getElementById("home").clientHeight;

// target homemsg
var homeMsg = document.getElementById("homemsg");

// target navlogo
var navLogo = document.getElementById("navlogo");

// // dont display navlogo til scroll
// window.onload = function() {loadFunction();};

// function loadFunction() {
//     window.onload = navLogo.style.display = 'none';
// }

// switch out homeMsg for navLogo after homeHeight is surpassed
function logoFunction() {
    if (window.pageYOffset < homeHeight) {
        navLogo.style.display = 'none';
        homeMsg.style.display = 'block';
    } else {
        navLogo.style.display = 'block';
        homeMsg.style.display = 'none';
    }
}