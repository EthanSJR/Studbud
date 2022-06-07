const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;
function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

//# sourceMappingURL=index.043b1a6b.js.map
