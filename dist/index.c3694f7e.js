pauseBtn.addEventListener("click", ()=>{
    if (paused === undefined) return;
    if (paused) {
        paused = false;
        initial = setTimeout("decremenT()", 60);
        pauseBtn.textContent = "pause";
        pauseBtn.classList.remove("resume");
    } else {
        clearTimeout(initial);
        pauseBtn.textContent = "resume";
        pauseBtn.classList.add("resume");
        paused = true;
    }
});

//# sourceMappingURL=index.c3694f7e.js.map
