document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.querySelector(".gallery-container");
    const timerDisplay = document.getElementById("timer");
    const startOverButton = document.getElementById("start-over");
    const announcement = document.getElementById("announcement");
    console.log("ByJoseB");
    let cards = [];
    let flippedCards = [];
    let connect1Index = -1;
    let connect2Index = -1;
    let timer;
    let seconds = 0;
    let isGameOver = false;
    let timerStarted = false;
  
    // Function to create and shuffle the cards
    function createCards() {
      cardsContainer.innerHTML = "";
      cards = [];
      const gridSize = 16;
      const positions = Array.from({ length: gridSize }, (_, i) => i);
  
      positions.sort(() => Math.random() - 0.5);
      connect1Index = positions[0];
      let possiblePositions = [];
      if (connect1Index % 4 !== 0) possiblePositions.push(connect1Index - 1); // Left
      if (connect1Index % 4 !== 3) possiblePositions.push(connect1Index + 1); // Right
      if (connect1Index - 4 >= 0) possiblePositions.push(connect1Index - 4); // Above
      if (connect1Index + 4 < gridSize) possiblePositions.push(connect1Index + 4); // Below
  
      connect2Index =
        possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
  
      positions.forEach((position, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                  <div class="card-inner">
                      <div class="card-front">
                          <img src="image3.png" alt="Image" style="width: 100%; height: 100%; object-fit: cover;">
                      </div>
                      <div class="card-back">
                          <!-- Content will be dynamically updated -->
                      </div>
                  </div>
              `;
        cardsContainer.appendChild(card);
        cards.push(card);
      });
  
      randomizeCardText();
    }
  
    // Function to randomize card text
    function randomizeCardText() {
      const cardBacks = document.querySelectorAll(".card-back");
  
      cardBacks.forEach((cardBack, index) => {
        if (index === connect1Index) {
          cardBack.innerHTML =
            "<h3>Connect 1</h3><p>Find Connector next to this card!</p>";
        } else if (index === connect2Index) {
          cardBack.innerHTML = "<h3>Connect 2</h3><p>You found it!</p>";
        } else {
          cardBack.innerHTML = "<h3>Nothing Here</h3>";
        }
      });
    }
  
    // Function to start the timer
    function startTimer() {
      if (!timerStarted) {
        timerStarted = true;
        timer = setInterval(() => {
          seconds++;
          timerDisplay.textContent = `Time: ${seconds}s`;
        }, 1000);
      }
    }
  
    // Function to stop the timer and handle the end of the game
    function stopGame() {
      clearInterval(timer);
      isGameOver = true;
      startOverButton.classList.remove("hidden");
      announcement.classList.remove("hidden");
      announcement.textContent = `Congratulations! You found both connectors in ${seconds}s.`;
    }
  
    // Handle card clicks
    function handleCardClick(card) {
      if (
        flippedCards.length < 2 &&
        !card.classList.contains("flipped") &&
        !isGameOver
      ) {
        card.classList.add("flipped");
        flippedCards.push(card);
  
        if (flippedCards.length === 2) {
          const [card1, card2] = flippedCards;
          const index1 = Array.from(cards).indexOf(card1);
          const index2 = Array.from(cards).indexOf(card2);
  
          if (index1 === connect1Index || index2 === connect1Index) {
            if (index1 === connect2Index || index2 === connect2Index) {
              // Both connectors found
              stopGame();
            } else {
              // One connector found, but not the pair
              setTimeout(() => {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                flippedCards = [];
              }, 1000);
            }
          } else {
            // No connectors found, flip back
            setTimeout(() => {
              card1.classList.remove("flipped");
              card2.classList.remove("flipped");
              flippedCards = [];
            }, 0); // Flip back immediately
          }
        }
  
        // Start timer if it's the first click
        if (flippedCards.length === 1) {
          startTimer();
        }
      }
    }
  
    // Initialize game
    createCards();
  
    // Add click event to each card
    cards.forEach((card) => {
      card.addEventListener("click", () => handleCardClick(card));
    });
  
    // Restart the game
    startOverButton.addEventListener("click", () => {
      location.reload();
    });
  });