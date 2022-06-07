let menu_btn = document.getElementById("menu-btn");
let sidebar = document.querySelector(".sidebar");
let close_btn = document.querySelector(".close-sidebar");
let container = document.querySelector(".container");
let toggle_btn = document.querySelector(".toggle-btn");
menu_btn.addEventListener("click", function() {
    sidebar.classList.add("active");
    toggle_btn.classList.add("hide");
});
close_btn.addEventListener("click", function() {
    sidebar.classList.remove("active");
    toggle_btn.classList.remove("hide");
});

//# sourceMappingURL=index.d7e94c19.js.map
