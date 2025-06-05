const gameRouter = require('express').Router();
const GameController = require('../controllers/GameControllers');


gameRouter.post("/games", GameController.getGames);
gameRouter.post("/games/:id", GameController.getGamesByTheme);


module.exports = gameRouter;
