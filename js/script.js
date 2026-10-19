"use strict";

const cards = document.querySelector("#cards");

cards.addEventListener("click", (event) => {
  const button = event.target.closest("[data-read-more-btn]");

  if (!button || !cards.contains(button)) {
    return;
  }

  const currentCard = button.closest(".card");

  if (!currentCard) {
    return;
  }

  const isExpanded = currentCard.classList.toggle("expanded");

  if (isExpanded) {
    button.textContent = button.dataset.hideText;
  } else {
    button.textContent = button.dataset.readMoreBtn;
  }
});
