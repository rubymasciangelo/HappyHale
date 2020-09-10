// display navlogo
window.onload = function() {
    document.getElementById('navlogo').style.display = 'block';
} ;

var mbIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mbslide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    mbIndex++;
    if (mbIndex > x.length) {mbIndex = 1}
    x[mbIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}