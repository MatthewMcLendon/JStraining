const GameComponent = (game) => {
  return `
    <div class="game-container">
      <div class="game-name">${game.name}</div>
      <div class="game-genre">${game.genre}</div>
      <div class="game-players">${game.players}</div>
      <div class="game-rating">${game.rating}</div>
      <div class="game-systems">${game.systems}</div>
    </div>
    `;
};

export default GameComponent;
