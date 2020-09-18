//show nav//
function openNav() {
    document.getElementById("bbSmolnav").style.width = "250px";
}

//hide nav//
function closeNav() {
    document.getElementById("bbSmolnav").style.width = "0";
}

//hide navbar when scroll down, show navbar when scroll up//
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("smolnavbar").style.top = "0";
    } else {
        document.getElementById("smolnavbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollpos;
}