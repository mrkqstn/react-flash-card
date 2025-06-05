const { Game, Theme } = require('../../db/models');

class GameService {
  static async getAllGame() {
    return await Game.findAll();
  }

  static async getAllGameByTheme(themeId) {
    return await Game.findAll({
      where: { theme_id: themeId },
      include: {
        model: Theme,
        attributes: ['theme_name'],
      },
    });
  }

  static async getAllGameByUserName(userName) {
    return await Game.findAll({ where: { user_name: userName } });
  }
}

module.exports = GameService;
