const { Game, Theme } = require('../../db/models');

class GameService {
  static async getAllGame() {
    return await Game.findAll({
      include: {
        model: Theme,
        as: 'theme',
        attributes: ['theme_name'],
      },
    });
  }

  static async getAllGameByTheme(themeId) {
    return await Game.findAll({
      where: { theme_id: themeId },
      include: {
        model: Theme,
        as: 'theme',
        attributes: ['theme_name'],
      },
    });
  }

  static async createNewGame(data) {
    return await Game.create(data);
  }
}

module.exports = GameService;
