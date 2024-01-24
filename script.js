document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const main = document.querySelector(".makeblack");


    window.addEventListener("scroll", function () {
        if (window.scrollY > main.offsetTop) {
            navbar.classList.add("bg-black");
            navbar.classList.add("text-gray-300");
        } else {
            navbar.classList.remove("bg-black");
            navbar.classList.remove("text-gray-300");
        }
    });
});