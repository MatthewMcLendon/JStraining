const GameComponent = (game) => {
  return `
    <div class="game-container">
      <div class="game-name">${game.name}</div>
      <div class="game-genre">Genre: ${game.genre}</div>
      <div class="game-players">Number of players: ${game.players}</div>
      <div class="game-rating">Rating: ${game.rating}/5</div>
      <div class="game-systems">Available on: ${game.systems.map((game) => {
        return ` ${game}`;
      })}</div>
    </div>
    `;
};

export default GameComponent;
