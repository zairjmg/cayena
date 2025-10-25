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
      const i_aos = document.querySelector("i")

      i_aos.style.color = "#000"
      i_aos.style.transition = "color .3s ease"

    } else {
      menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  // Sticky header
  window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if(window.scrollY > 50){
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
      }
  });
});

// Animaciones tipo AOS personalizadas
const animatedElements = document.querySelectorAll("[data-anim]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Solo animar una vez
    }
  });
}, {
  threshold: 0.2 // activa cuando el 20% del elemento es visible
});

animatedElements.forEach(el => observer.observe(el));
