const symbols = ['🐶', '🐱', '🐰', '🦊', '🐸', '🐵'];
let cards = [...symbols, ...symbols]; // 12 cards = 6 pairs

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedCount = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createBoard() {
  const gameBoard = document.getElementById('gameBoard');
  const shuffled = shuffle(cards);

  shuffled.forEach(symbol => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.symbol = symbol;
    card.textContent = symbol;

    card.addEventListener('click', () => handleCardClick(card));
    gameBoard.appendChild(card);
  });
}

function handleCardClick(card) {
  if (lockBoard || card.classList.contains('revealed') || card.classList.contains('matched')) return;

  card.classList.add('revealed');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true;

  if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matchedCount++;
    resetTurn();
    if (matchedCount === cards.length / 2) {
      document.getElementById('message').textContent = "🎉 You've matched all pairs!";
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove('revealed');
      secondCard.classList.remove('revealed');
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

createBoard();
