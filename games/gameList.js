import { useGames } from "./gameDataProvider.js";
import GameComponent from "./game.js";

const gameListComponent = () => {
  const contentElement = document.querySelector(".game-list");
  const games = useGames();

  contentElement.innerHTML = `${games
    .map((currentGame) => {
      return GameComponent(currentGame);
    })
    .join("")}`;
};

export default gameListComponent;
