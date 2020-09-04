
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
    if (msgIndex > msgs.length) {msgIndex = 1}
    msgs[msgIndex-1].style.display = "block";
    setTimeout(showMsgs, 15000);
}