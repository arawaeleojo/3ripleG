
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop(); 
    if (currentPage === "") currentPage = "index.html"; // For home page without filename

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
        let linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});
function openLightbox(item) {
    const lightbox = document.getElementById("lightbox");
    const img = item.querySelector("img");
    const caption = item.querySelector(".subtitle");

    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox-caption").textContent = caption.textContent;
    lightbox.style.display = "flex";
}
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// function closeLightbox() {
//     document.getElementById("lightbox-modal").style.display = "none";
// }


// About.html
// Reveal animation on scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(fader => {
  observer.observe(fader);
});
