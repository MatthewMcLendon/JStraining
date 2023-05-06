import { useGames } from "../games/gameDataProvider.js";
import gameListComponent from "../games/gameList.js";

gameListComponent();

const allGames = useGames();
