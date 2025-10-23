document.addEventListener("DOMContentLoaded", () => {
    let nav = document.querySelector("header nav");
    let menuBtn = document.createElement("button");

    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    menuBtn.classList.add("menu-toggle");

    document.querySelector("header").insertBefore(menuBtn, nav);

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuBtn.classList.toggle("open");

        if (menuBtn.classList.contains("open")) {
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});
