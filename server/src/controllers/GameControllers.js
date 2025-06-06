const GameService = require('../services/GameServise');
const formatResponse = require('../utils/formatResponse');

class PostController {
  static async getGames(req, res) {
    try {
      const posts = await GameService.getAllGame();
      if (posts.length === 0) {
        return res.status(200).json(formatResponse(200, 'Not posts found', []));
      }
      return res.status(200).json(formatResponse(200, 'Success', posts));
    } catch (err) {
      console.log(err);
      return res.status(500).json(formatResponse(500, 'Internal Server Error'));
    }
  }

  static async getGamesByTheme(req, res) {
    try {
      const { id } = req.params;
      const posts = await GameService.getAllGameByTheme(id);
      if (posts.length === 0) {
        return res.status(200).json(formatResponse(200, 'Not posts found', []));
      }
      return res.status(200).json(formatResponse(200, 'Success', posts));
    } catch (err) {
      console.log(err);
      return res.status(500).json(formatResponse(500, 'Internal Server Error'));
    }
  }

  static async addNewGame(req, res) {
    try {
      const { user_name, theme_id, score } = req.body;
      console.log('++++++++++++++++++++', { user_name, theme_id, score })
      const posts = await GameService.createNewGame({ user_name, theme_id, score });
      return res.status(200).json(formatResponse(200, 'Success', posts));
    } catch (err) {
      console.log(err);
      return res.status(500).json(formatResponse(500, 'Internal Server Error'));
    }
  }
}

module.exports = PostController;
