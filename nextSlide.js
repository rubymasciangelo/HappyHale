function nextSlide() {
    var q = function (sel) { return document.querySelector(sel); };
    q(".mbbox").appendChild(q(".mbbox img:first-child"));
}

setInterval(nextSlide, 5000)