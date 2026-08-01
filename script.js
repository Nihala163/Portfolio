/* ======================================================
   NIHALA FERI PORTFOLIO
   Premium Portfolio Script
   Part 3A
====================================================== */

/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.pointerEvents = "none";

    setTimeout(() => {
        loader.style.display = "none";
    }, 600);

});

/* ===========================
   AOS
=========================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* ===========================
   TYPING EFFECT
=========================== */

new Typed("#typing", {

    strings: [
        "Flutter Developer",
        "UI Designer",
        "Web Developer",
        "Digital Creator"
    ],

    typeSpeed: 70,

    backSpeed: 45,

    backDelay: 1700,

    loop: true

});

/* ===========================
   SCROLL PROGRESS
=========================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/* ===========================
   BACK TO TOP
=========================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================
   DARK / LIGHT MODE
=========================== */

const themeButton =
    document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const icon = themeButton.querySelector("i");

    if (document.body.classList.contains("light-theme")) {

        icon.className = "fa-solid fa-sun";

    } else {

        icon.className = "fa-solid fa-moon";

    }

});