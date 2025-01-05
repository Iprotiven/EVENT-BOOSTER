const style = document.createElement("style");
style.innerHTML = `
    /* Base styles */
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    .container {
        width: 100%;
        padding: 20px;
    }

    /* Mobile styles */
    @media (max-width: 600px) {
        .container {
            padding: 10px;
        }

        .header {
            font-size: 1.5em;
        }

        .content {
            font-size: 1em;
        }

        .footer {
            font-size: 0.8em;
        }
    }
`;
document.head.appendChild(style);
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.style.display = "block";
  input.style.width = "100%";
  input.style.marginBottom = "10px";
});
const citySelect = document.querySelector("#city-select");
const cardsContainer = document.querySelector(".cards-container");

if (citySelect && cardsContainer) {
  citySelect.addEventListener("change", () => {
    if (citySelect.value) {
      cardsContainer.style.display = "block";
    } else {
      cardsContainer.style.display = "none";
    }
  });

  // Initially hide the cards container
  cardsContainer.style.display = "none";
}
const cards = document.querySelectorAll(".card");

if (citySelect) {
  citySelect.addEventListener("change", () => {
    cards.forEach((card) => {
      if (card.dataset.city === citySelect.value) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Initially hide all cards
cards.forEach((card) => {
  const searchInput = document.querySelector("#search-input");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      cards.forEach((card) => {
        const eventName = card
          .querySelector(".event-name")
          .textContent.toLowerCase();
        if (eventName.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});
