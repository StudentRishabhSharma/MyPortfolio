var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Java Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");
    const themeButton = document.getElementById("theme-button");

    // Toggle navigation menu
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            console.log("Hamburger clicked"); // Optional for testing
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card__clip").forEach((clip) => {
      clip.addEventListener("click", function () {
        const card = this.closest(".card__article");
        const img = card.querySelector(".card__img");
        const info = card.querySelector(".info");
  
        img.classList.toggle("scale-down");
        info.classList.toggle("open");
      });
    });
  });
  
