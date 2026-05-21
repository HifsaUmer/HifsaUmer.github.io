// script.js

console.log("Portfolio Website Loaded Successfully!");


// Smooth Fade Animation on Scroll

const cards = document.querySelectorAll(
  ".project-card, .skill-card, .cert-card, .education-card"
);

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 50){

      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";
    }

  });

});

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s";

});
