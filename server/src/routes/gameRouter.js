const gameRouter = require('express').Router();
const GameController = require('../controllers/GameControllers');


gameRouter.get("/", GameController.getGames);
gameRouter.get("/:id", GameController.getGamesByTheme);
gameRouter.post("/", GameController.addNewGame);

module.exports = gameRouter;
