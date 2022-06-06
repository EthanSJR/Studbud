var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");
var playpause = function() {
    if (player.paused) player.play();
    else player.pause();
};
// basic pause / play method
playbtn.addEventListener("click", playpause);
player.onplay = function() {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
};
player.onpause = function() {
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
};
//click on button means to play or to pause
/*TIME doesnt seem to update on the web - minor issue to be solved*/ player.ontimeupdate = function() {
    let ct = player.currentTime;
    current.innerHtml = timeFormat(ct);
    //progress
    let duration = player.duration;
    prog = Math.floor(ct * 100 / duration);
    progress.style.setProperty("--progress", prog + "%");
};
function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + "" + seconds;
}

//# sourceMappingURL=index.193acc4b.js.map
